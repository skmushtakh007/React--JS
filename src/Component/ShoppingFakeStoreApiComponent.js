import { useState, useEffect } from "react";
export default function ShoppingFakeStoreApiComponent() {
    const [Categories, setCategories] = useState();
    const [products, setProducts] = useState([]);

    // to select seprate by using id
    const [cartItems, setcarItems] = useState([]);

    //to add to cart and length
    const [itemCount, setitemCount] = useState(0);

    //function to load(to get data) categories
    function LoadCategories() {
        fetch('http://fakestoreapi.com/products/categories')
            .then(response => response.json())
            .then(data => {           //collect data(reference data)
                data.unshift('all')
                setCategories(data); //store data
            })
    }
    function LoadProducts(url) {
        // loading all product according to category
        fetch(url)
            // loading all products without url as parameter
            //fetch('http://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => {
                setProducts(data);
            })
    }
    //configuring component initilization by using useEffect
    useEffect(() => {
        LoadCategories();
        LoadProducts('http://fakestoreapi.com/products');
    },[cartItems.length])
    function handleCategoryChange(e) {
        // alert(e.target.value);

        // user select all fetch with this api
        if (e.target.value == 'all') {
            LoadProducts('http://fakestoreapi.com/products');
        }
        // if user select category then fetch this api
        else {
            LoadProducts(`http://fakestoreapi.com/products/category/${e.target.value}`);
        }
    }
    function handleAddtoCart(e) {
        alert("car item is added");
        // alert(e.target.id);
        // when we click on add to cart we need  to fetch product and id
        fetch(`http://fakestoreapi.com/products/${e.target.id}`)
            .then(response => response.json())
            .then(data => {
                setcarItems(data);
                cartItems.push(data);
                GetCartItemsCount();
            })            
    }
    function GetCartItemsCount() {
        // it will count items length and update
        setitemCount(cartItems.length);
    }
    return (
        <>
            <div className="container-fluid">
                <header className="bg-danger text-white text-center p-2">
                    <h1><span className="bi bi-cart"></span>  Shopping Home</h1>
                </header>
                <section className="row">
                    <nav className="col-2">
                        <div>
                            <label>Select Category</label>
                            <div >
                                <select className="form-select" onChange={handleCategoryChange}>
                                    {
                                        Categories && Categories.map(category =>
                                            <option key={category}>{category}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                    </nav>
                    <main className="col-8 d-flex flex-wrap overflow-auto" style={{ height: '600px' }}>
                        {
                            products.map(product =>
                                <div key={product.id} className="card m-2 p-2 w-25">
                                    <img src={product.image} className="card-img-top " height="150" alt="" />
                                    <div className="card-header" style={{ height: '160px' }}>
                                        <p>{product.title}</p>
                                    </div>
                                    <div className="card-body">
                                        <dl>
                                            <dt>Price</dt>
                                            <dd>{product.price}</dd>
                                            <dt>Rating</dt>
                                            <dd>
                                                <span className="bi bi-star-fill text-success"></span>
                                                {product.rating.rate} <span>[{product.rating.count}]</span>
                                            </dd>
                                        </dl>
                                    </div>
                                    <div className="card-footer">
                                        <button id={product.id} onClick={handleAddtoCart} className="btn btn-danger w-100">
                                            <span className="bi bi-card4"></span>
                                            Add to Card
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    </main>
                    <aside className="col-2">
                        <button className="btn btn-danger w-100 m-3">
                            <span className="bi bi-cart3"></span>[{itemCount}] Your Cart Item
                        </button>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Price</th>
                                    <th>Preview</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems && cartItems.map(item=>
                                        <tr key={item.id}>
                                            <td>{item.title}</td>
                                            <td>{item.Price}</td>
                                            <td>
                                                <img src={item.image} alt="" width="50" height="50" />
                                            </td>
                                        </tr>
                                        )
                                }
                            </tbody>
                        </table>
                    </aside>
                </section>
            </div>
        </>
    )

}
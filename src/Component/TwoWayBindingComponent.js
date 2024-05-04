import { useState } from "react";
export default function TwoWayBindingComponent() {
    const [product, setProduct] = useState({ Name: '', Price: 0, City: '', Stock: false});
    // if u dont want update product simultaneously then (in short storing in reference)
    const [newProduct,setNewProduct]=useState({Name:'',Price:0,City:'',Stock:false});
    function handleRegister(){
        setNewProduct(product);
    }
    function handleName(e) {
        setProduct({
            Name: e.target.value,
            Price: product.Price,
            City: product.City,
            Stock: product.Stock
        })
    }
    function handlePrice(e) {
        setProduct({
          Name:product.Name,
          Price:e.target.value,
          City:product.City,
          Stock:product.Stock
        })
    }
    function handleCity(e) {
        setProduct({
          Name:product.Name,
          Price:product.Price,
          City:e.target.value,
          Stock:product.Stock
        })
    }
    function handleStock(e) {
        setProduct({
            Name:product.Name,
            Price:product.Price,
            City:product.City,
            Stock:e.target.checked
        })
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-3">
                    <h2>Register Product</h2>
                    <dl>
                        <dt>Name</dt>
                        <dd><input className="form-control" type="text" onChange={handleName} /></dd>
                        <dt>Price</dt>
                        <dd><input className="form-control" type="text" onChange={handlePrice} /></dd>
                        <dt>City</dt>
                        <dd>
                            <select onChange={handleCity} className="form-select">
                                <option>Delhi</option>
                                <option>Pune</option>
                            </select>
                        </dd>
                        <dt>Stock</dt>
                        <dd className="form-switch">
                            <input onChange={handleStock} className="form-check-input" type="checkbox" />Available
                        </dd>
                    </dl>
                    <button onClick={handleRegister} className="btn btn-primary">Register</button>
                </div>
                <div className="col-9">
                    <h2>Product Details</h2>
                    <dl>
                        <dt>Name</dt>
                        {/* <dd>{product.Name}</dd> */}
                        <dd>{newProduct.Name}</dd>
                        <dt>Price</dt>
                        {/* <dd>{product.Price}</dd> */}
                        <dd>{newProduct.Price}</dd>
                        <dt>City</dt>
                        {/* <dd>{product.City}</dd> */}
                        <dd>{newProduct.City}</dd>
                        <dt>Stock</dt>
                        {/* <dd>{(product.Stock==true)?"Available":"out of Stock"}</dd> */}
                        <dd>{(newProduct.Stock===true)?"Available":"Out of Stock"}</dd>

                    </dl>
                </div>
            </div>
        </div>
    )
}
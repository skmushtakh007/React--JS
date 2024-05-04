export default function DataBindingComponent(){
    var products={
        Name:'Samsung',
        Price:45000.89,
        Stock:true
    }
    return(
        <div className="container">
            <h2>Products Details</h2>
            <dl>
                <dt>Name</dt>
                <dd>{products.Name}</dd>
                {/* Bindig as a property */}
                <dd><input type="text" value={products.Name}/></dd>   
                <dt>Price</dt>
                <dd>{products.Price}</dd>
                <dt>Stock</dt>
                <dd>{(products.Stock===true)?"Available":"Out of Stock"}</dd>
            </dl>
        </div>
    )
}
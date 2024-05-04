export default function DataBindingTableComponent(){
    var products=[
        {Name:'Samsung TV',Price:34000.90},
        {Name:'Nike Casuls',Price:4500}
    ];
    return(
        <div className="container">
            <h2>Products Table</h2>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(product=>
                            <tr >
                                <td>{product.Name}</td>
                                <td>{product.Price}</td>
                            </tr>
                        
                            )
                    }
                </tbody>
            </table>
        </div>
    )
}
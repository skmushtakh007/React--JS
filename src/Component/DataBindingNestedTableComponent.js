export default function DataBindingNestedComponent() {
    var menus = [
        { Category: "Electronic", Products: ["Samsung TV", "Mobile"] },
        { Category: "Footwear", Products: ["Nike Casuals", "Lee Boot"] }
    ]
    return (
        <div className="container">
            <h2>Categories</h2>
            <ol>
                {
                    menus.map(item =>
                        <li key={item.Category}>{item.Category}
                            <ul>
                                {
                                    item.Products.map(product =>
                                        <li key={product}>
                                            {product}
                                        </li>
                                    )
                                }
                            </ul>
                        </li>
                    )
                }
            </ol>
            <h2>Select a Product</h2>
            <select>
                {
                    menus.map(item=>
                        <optgroup key={item.className} label={item.Category}>
                            {
                                item.Products.map(product=>
                                    <option key={item.Category}>{product}</option>
                                    )
                            }
                        </optgroup>
                        )
                }
            </select>
        </div>

    )
}
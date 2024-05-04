export default function DataBindingComponentT(){
    var size={
        Width:450,
        Height:14
    }
    return(
        <div className="container">
            <h2>Property Binding</h2>
            <table border="1" width={size.Width} height={size.Height}>
                <tr>
                    <td>Welcome to react</td>
                </tr>
            </table>
        </div>
    )
    
}
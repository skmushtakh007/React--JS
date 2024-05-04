export default function DataBindingCollectionComponent(){
    var categories=['All','Electronics','Footwear'];
    return(
        <div className=" container">
            <h2>Categories</h2>
        <ol>
            {
                // categories.toString()      it return categories seprated with ,
                // categories.join("-->")        it can return categories seprated with -->

                //Long version
                // categories.map(function(category){
                //     return(
                //         <li>{category}</li>
                //     )
                // })
                //Arrow function
                // categories.map((category)=>{
                //     return <li>{category}</li>;
                // })

               // short hand
                categories.map(category=>
                <li key={category}>{category}</li>
                )

                
            }
        </ol>
        <h2>Select Categories</h2>
        <select>
            {
                categories.map(category=>
                    <option key={category} value={category}>{category}</option>
                    )
            }
        </select>
        </div>
    )
}
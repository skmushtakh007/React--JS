import { useState,useEffect } from "react";
export default function ArrayDestructuringComponent(){
    // const [Products,setName]=useState(['TV',"Electronics","Footwear","Shoes"])
    // return(
    //     <div className="container">
    //         <ol>
    //         {
    //              Products.map(product=>
    //              <li key={product}>
    //                 {product}
    //              </li>                  
    //             )
    //         }
    //         </ol>
    //     </div>
    // )

    const {mars,setMars}=useState();
    useEffect(()=>{
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
        .then(response=> response.json())      //returning data into json
        .then(data=>{             //collecting data
            setMars(data);     //set data into setMars
        })
    },[])
    return(
        <div className="container">
            <h2>Mars Photos</h2>

             <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Photo Id</th>
                        <th>Camers Name</th>
                        <th>Rover Name</th>    
                        <th>Previews</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mars&&mars.photos.map(photo=>
                            <tr key={photo}>
                                <td>{photo.id}</td>
                                <td>{photo.camera.full_name}</td>
                                <td>{photo.rover.name}</td>
                                <td><img src={photo.img_src} width="100" height="100" alt="" /></td>
                            </tr>
                            )
                    }
                </tbody>
            </table>
           

            {/* <div className="d-flex flex-wrap">
                {
                    mars.photos.map(photo=>
                        <div className="card p-2 m-2 w-25">
                            <img src={photo.img_src} alt="" className="card-img-top" height="150" />
                            <div>
                                <h2 className="card-header">{photo.camera.full_name}</h2>
                            </div>
                            <div className="card-body">
                                <p>{photo.rover.name}</p>
                            </div>
                        </div>
                        )
                }
            </div> */}
        </div>
    )
}
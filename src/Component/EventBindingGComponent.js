import { useState } from "react";
export default function EventBindingGComponent(){
    const [userName,setUserName]=useState([]);
    function handleUserName(e){
        //it will collect value entered inside text box {handleUserName}
        //console.log(e.target.value);

        //Binding text box value
        setUserName(e.target.value);

    }
    return(
        <div className="container-fluid">
            <dl>
                <dt>User Name</dt>
                <input type="text" onChange={handleUserName} />
            </dl>
            <h3>Hello..! {userName}</h3>
        </div>
    )
}
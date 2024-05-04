import axios from "axios";
import { useState,useEffect } from "react";
export default function AxioDemo(){
    const [users,setUsers]=useState([]);
    useEffect(()=>{
        axios.get("http://localhost:800/getusers")
        .then(function(response){
            setUsers(response.data);
        }).catch(function(ex){
            console.log(ex);
        })
    },[])
    return(
        <div>
            <h2 className="container-fluid">Users Details</h2>
            <ol>
                {
                    users.map(user => {
                        <li key={user.UserId}>{user.UserId}</li>
                    })
                }
            </ol>
        </div>
    )
}
import { useEffect,useState } from "react";
import {useCookies} from "react";

export default function DemoUseCookies(){
    const [cookies,setCookie,removeCookie]=useCookies(['username'])
    const [userDetails,setUserDetails]=useState({UserName:'',Password:''})
    useEffect(()=>{
        if(cookies.username === undefined){
            alert("Please Login..")
        }
    },[])

    function HandleUser(e){
        setUserDetails({
            UserName:e.target.value,
            Password:userDetails.Password
        })
    }
    function HandlePassword(e){
        setUserDetails({
            UserName:userDetails.UserName,
            Password:e.target.value
        })
    }
    function HandleCookie(){
        setCookie("username",userDetails.UserName,{path:"/",expires:new Date()})
        alert("login success..")
    }
    return(
        <div className="container-fluid">
            <dl>
                <dt>User Name</dt>
                <dd><input onChange={HandleUser} type="text" /></dd>
                <dt>Password</dt>
                <dd><input onChange={HandlePassword} type="text" /></dd>
            </dl>
            <button onClick={HandleCookie}>Login</button>
            <hr />
            <h3>Home</h3>
            Hello ! {cookies.username}
           
        </div>
    )
}
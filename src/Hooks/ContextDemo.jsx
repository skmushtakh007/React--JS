import React,{useState,useContext} from 'react';

var userDetailsContext=React.createContext(null);
export default function ContextDemo() {
    const [userDetails,setUserDetails]=useState({
        UserName:'',
        Email:''
    })
    function HandleUser(e){
        setUserDetails({
            UserName:userDetails.UserName,
            Email:e.target.value
        })
    }
    function HandleEmail(e){
        setUserDetails({
            UserName:e.target.value,
            Email:userDetails.Email
        })
    }
    function HandleSet(e){
        setUserDetails({
            UserName:userDetails.UserName,
            Email:userDetails.Email
        })
    }
    
    return (
        <userDetailsContext.Provider value={userDetails}>
        <div className='container-fluid'>
            <h2>Index Home {userDetails.UserName}</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input onChange={HandleUser} type="text" /></dd>
                <dt>Email</dt>
                <dd><input onChange={HandleEmail} type="text" /></dd>
            </dl>
            <button onClick={HandleSet}>Set Data</button>
            <HeaderComponent/>
        </div>
        </userDetailsContext.Provider>
    );
}
function HeaderComponent(){
var userDetails=useContext(userDetailsContext);
    return(
        <div className="bg-info text-white" style={{height:'150px'}}>
            <h2>Home-{userDetails.UserName}</h2>
            
            <NavbarComponent/>
        </div>    
        )
}
function NavbarComponent(){
    var userDetails=useContext(userDetailsContext);
    return(
        <div className="btn-toolbar bg-dard text-white justify-content-between">
            <div className="btn-group">
                <div className="btn-group">
                    <button className="btn btn-dark">Amaxzon</button>
                </div>
                <div className="btn-group">
                    <button className="btn btn-dark">{userDetails.Email}</button>
                </div>
            </div>
        </div>
    )
}
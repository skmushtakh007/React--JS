import { useEffect,useState } from "react";
export default function ReactHooks(){
    const [msg,setMsg]=useState();

    function HandleSuccessFullClick(){
        setMsg(<SuccessLogin/>)
    }
    function HandleErrorClick(){
        setMsg(<ErrorComponent/>)
    }
    return(
        <div className="container-fluid">
            <h2 className="mt-3">React Hooks</h2>
            <button className="m-4" onClick={HandleSuccessFullClick}>Login</button>
            <button onClick={HandleErrorClick}>Invalid</button>
            <hr />
            <div>
                {msg}
            </div>
        </div>
    )
}


function SuccessLogin(){
    useEffect(()=>{
        alert('Success component Will Mount')
        return(()=>{
            alert('Succes component Will Unmount')
        }
        )
    },[])
    return(
        <div>
            <h2>Login</h2>
        </div>
    )
}
function ErrorComponent(){
    useEffect(()=>{
        alert('Error Component Will Mount')
        return(()=>{
            alert('Error Component Will Unmount')
        })
    },[])
    return(
        <div>
            <h2>Invalid</h2>
        </div>
    )
}
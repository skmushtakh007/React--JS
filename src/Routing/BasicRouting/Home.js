import { Link, useNavigate } from "react-router-dom";

export function Home(){
    const id=6; //passing id
    const navigate=useNavigate();
    const navigate1=useNavigate();
    function goTo(){
        navigate("/about" ,{state:{car:id}})   //here we are passing data to about page by using state which takes key value pair format
    }
    function goToo(){
        navigate1("/contact")
    }
    return(
        <div>
            <h3>Home Page</h3>
            {/* <div><Link to='/about'>About</Link></div>
            <div><Link to='/contact'>Contact</Link></div>  easy way */}
            <button onClick={goTo}>About</button>
            <button onClick={goToo}> Contact</button>
        </div>
    )
}
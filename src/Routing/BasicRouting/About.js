import { Link, useLocation } from "react-router-dom"
export function About(){
    // used locatio hook is used to acces whatever data passed by Home component by use useNavigate() hook
    const location=useLocation()
    console.log(location.state)
    return(
        <div>
            <h3>About Page and my id is {location.state.car}</h3>
           <div> <Link to='/'>Home</Link></div>
            <div><Link to='/contact'>Contact</Link></div>
        </div>
    )
}
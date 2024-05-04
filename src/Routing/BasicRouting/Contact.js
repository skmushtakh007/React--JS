import { Link } from "react-router-dom"
export function Contact(){
    return(
        <div>
            <h2>Contact Page</h2>
            <div><Link to='/about'>About</Link></div>
            <div><Link to='/'>Home</Link></div>
        </div>
    )
}
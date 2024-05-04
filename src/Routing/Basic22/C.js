import { Link } from "react-router-dom"
export function C(){
    return(
        <div>
            <h2>Option C</h2>
            <Link to='/b'>B</Link>
            <Link to='/'>A</Link>
        </div>
    )
}
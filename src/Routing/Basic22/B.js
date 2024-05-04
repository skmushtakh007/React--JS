import { Link } from "react-router-dom"
export function B(){
    return(
        <div>
            <h2>Option B</h2>
            <Link to='/'>A</Link>
            <Link to='/c'>C</Link>
        </div>
    )
}
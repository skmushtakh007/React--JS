import { Link } from "react-router-dom"
export function A(){
    return(
        <div>
            <h2>Option A</h2>
            <Link to='/b'>B</Link>
            <Link to='/c'>C</Link>

        </div>
    )
}
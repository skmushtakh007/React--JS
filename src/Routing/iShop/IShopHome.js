import {Link} from "react-router-dom";
export default function IShopHome(){
    return(
        <div>
            <h2>Home</h2>
            <Link to="/register">New User</Link>
            <span> </span>
            <Link to="/login">Existing User</Link>
        </div>
    )
}

import { BrowserRouter, Router, Route, Link } from "react-router-dom"
export default function TRoutes() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <nav>
                    <ul>
                        <li><Link to="/html">HTML</Link></li>
                        <li><Link to="/css">CSS</Link></li>
                        <li><Link to="/js">JavaScript</Link></li>
                    </ul>
                </nav>
                <hr />
                
            </BrowserRouter>
        </div>
    )

}
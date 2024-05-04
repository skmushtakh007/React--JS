import { expr } from "jquery";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function HTML() {
    return (
        <>
            <main>
                <h2>HTML</h2>
                <p>It is a Markup Language..</p>
            </main>
        </>
    )
}
function CSS() {
    return (
        <main>
            <h2>CSS</h2>
            <p>It is a Style..</p>
        </main>
    )
}
function JavaScript() {
    return (
        <main>
            <h2>JavaScript</h2>
            <p>It is a Scripting Language..</p>
        </main>
    )
}
export default function SinglePAComponent() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <nav>
                    <ul>
                        <li><Link to="/html">HTML</Link></li>
                        <li><Link to="/css">CSS</Link></li>
                        <li><Link to="js">JavaScript</Link></li>
                    </ul>
                </nav>
                <hr />
                <Routes>
                    <Route path="html" element={
                        // <main>
                        //     <h2>HTML</h2>
                        //     <p>It is MarkUp Language..</p>
                        // </main>
                        <HTML />
                    }>
                    </Route>
                    <Route path="css" element={
                        // <main>
                        //     <h2>CSS</h2>
                        //     <p>It defines Style..</p>
                        // </main>
                        <CSS />
                    }>
                    </Route>
                    <Route path="/js" element={
                        // <main>
                        //     <h2>JavaScript</h2>
                        //     <p>It is Scripting Language..</p>
                        // </main>
                        <JavaScript />
                    }>

                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
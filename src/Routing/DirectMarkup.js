import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
// without using direct markup.By using component
export default function HTML() {
    return (
        <>
            <main>
                <h2>Hello HTML</h2>
                <p>HTML Stands for Hyper Text Markup Language</p>
            </main>
        </>
    )
}
export function DirectMarkup() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <nav>
                    <ul>
                        <li><Link to="/html">HTML</Link></li>
                        <li><Link to="/css">CSS</Link></li>
                        <li><Link to="/js"> JS</Link></li>
                    </ul>
                </nav>
                <hr />
                <Routes>
                    <Route path="html" element={
                        <HTML />
                    } />
                    <Route path="css" element={
                        <main>
                            <h2>Hello CSS</h2>
                            <p>CSS Stands for Cast Cading Style Sheet</p>

                        </main>
                    } />
                    <Route path="js" element={
                        <main>
                            <h2>Hello JavaScript</h2>
                            <p>JavaScript is used for front End</p>
                        </main>
                    } />

                    {/* <Route path="*" element={
                    <code>Not Found: Page you requested Not Found</code>
                    }>
                    </Route> */}
                </Routes>
            </BrowserRouter>
        </div>
    );
}
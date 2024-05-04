import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
export default function SPAComponent() {
    //var location = useLocation();
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <nav>
                    <ul>
                        <li><Link to="/html">HTML</Link></li>
                        <li><Link to="/css">CSS</Link></li>
                        <li><Link to="/js">Javascript</Link></li>
                    </ul>
                </nav>
                <hr />
                <Routes>
                    <Route to="/" element={
                        <main>
                            <h2>HTML</h2>
                            <p>It is a Markup Language..</p>
                        </main>
                    }>
                    </Route>
                    <Route to="/" element={
                        <main>
                            <h2>CSS</h2>
                            <p>It is a style..</p>
                        </main>
                    }>
                    </Route>
                    <Route to="/" element={
                        <main>
                            <h2>JavaScript</h2>
                            <p>It is a Scripting Language..</p>
                        </main>
                    }>
                    </Route>
                    <Route path="*" element={
                        <main>
                            <code>Not Found: Page you requeste Not Found</code>
                        </main>
                    }>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function TutorialRoutes() {
    return (
        <div className="container-fluid">
            <BrowserRouter>
                <Routes>
                    <Route path="html" element={
                        <main>
                            <h2>HTML</h2>
                            <p>It is a Markup Language..</p>
                        </main>
                    }>
                    </Route>
                    <Route path="css" element={
                        <main>
                            <h2>CSS</h2>
                            <p>It is a style..</p>
                        </main>
                    }>
                    </Route>
                    <Route path="js" element={
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
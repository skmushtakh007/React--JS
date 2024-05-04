import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import IShopHome from "./IShopHome";
import IShopRegister from "./IShopRegister";
import IShopLogin from "./IShopLogin";
import IShopDashboard from "./IShopDashboard";

export default function IShopIndex() {
    return (
        <div className="container-fluid">
            <header className="bg-danger p-2 mt-2 text-white text-center">
                <h2>Ishop-Online</h2>
            </header>
            <section className="row">
                <BrowserRouter>
                    <nav className="col-3 mt-3">
                        <div className="mb-2">
                            <Link className="btn btn-danger w-100" to="/home">Home</Link>
                        </div>
                        <div className="mb-2">
                            <Link className="btn btn-danger w-100" to="/register">Register</Link>
                        </div>
                        <div className="mb-2">
                            <Link className="btn btn-danger w-100" to="/login">Login</Link>
                        </div>
                        <div className="mb-2">
                            <Link className="btn btn-danger w-100" to="/dashboard">Dashboard</Link>
                        </div>
                    </nav>
                    <main className="col-9">
                        <Routes>
                            <Route path="/" element={<IShopHome/>}></Route>
                            <Route path="home" element={<IShopHome/>}/>
                            <Route path="register" element={<IShopRegister/>}></Route>
                            <Route path="login" element={<IShopLogin/>}></Route>
                            <Route path="dashboard" element={<IShopDashboard/>}></Route>
                        </Routes>
                    </main>
                </BrowserRouter>
            </section>
        </div>
    )
}
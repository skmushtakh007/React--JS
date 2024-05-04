import { Link, Outlet } from 'react-router-dom'

export default function BankAppHome() {
    return (
        <div>
            <h2>Bank App Home</h2>
            <nav>
                <span><Link to="/plogin">Personal Login</Link></span>
                <span> | </span>
                <span><Link to="/pregister">Personal Register</Link></span>
                <span> | </span>
                <span><Link to="/nriregister">NRI Register</Link></span>
                <span> | </span>
                <span><Link to="/nrilogin">NRI Login</Link></span>
            </nav>
            <hr />
            {/* The reesulting marking is rendered at any specified location using Outlet. */}
            <Outlet />
        </div>
    )
}
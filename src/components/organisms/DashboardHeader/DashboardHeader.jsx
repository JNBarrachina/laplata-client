import { Link } from 'react-router-dom'

import "./DashboardHeader.css"

export const DashboardHeader = () => {
    return (
        <>
            <header className='headerContainer'>
                <nav className="headerNav">
                    <button>Perfil</button>
                    <Link to="/"></Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </nav>
            </header>
        </>
    )
}
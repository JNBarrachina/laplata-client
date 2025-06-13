import { Link } from 'react-router-dom'

import "./HomeHeader.css"

export const HomeHeader = () => {
    return (
        <>
            <header className='headerContainer'>
                <p className="headerTitle">LaPlata</p>
                <nav className="headerNav">
                    <Link to="/">LaPlata</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                </nav>
            </header>
        </>
    )
}
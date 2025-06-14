import { Link } from 'react-router-dom'

import "./DashboardHeader.css"

export const DashboardHeader = () => {
    return (
        <>
            <header className='dashboardHeaderContainer'>
                <img src="/src/assets/laplata.png" alt="" className='dashboardLogo' />
                <nav className="dashboardNav">
                    <Link to="/dashboard" className='dashboardHeaderLink'>
                        <img className='dashboardHeaderImg' src="/src/assets/dashboard.svg" alt="" />
                        <p className='linkText'>Dashboard</p>
                    </Link>
                    <Link to="/" className='dashboardHeaderLink'>
                        <img className='dashboardHeaderImg' src="/src/assets/useraccount.svg" alt="" />
                        <p className='linkText'>Profile</p>

                    </Link>
                    <Link to="/" className='dashboardHeaderLink'>
                        <img className='dashboardHeaderImg' src="/src/assets/logout.svg" alt="" />
                        <p className='linkText'>Logout</p>
                    </Link>
                </nav>
            </header>
        </>
    )
}
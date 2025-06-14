import { Link } from 'react-router-dom'

import "./DashboardHeader.css"

export const DashboardHeader = () => {
    return (
        <>
            <header className='dashboardHeaderContainer'>
                <img src="/src/assets/laplata.png" alt="" className='dashboardLogo' />
                <nav className="dashboardNav">
                    <Link to="/dashboard">
                        <button className='dashboardHeaderBtn'>
                            <img className='dashboardHeaderImg' src="/src/assets/dashboard.svg" alt="" />
                        </button>
                    </Link>
                    <Link to="/">
                        <button className='dashboardHeaderBtn'>
                            <img className='dashboardHeaderImg' src="/src/assets/useraccount.svg" alt="" />
                        </button>
                    </Link>
                    <Link to="/">
                        <button className='dashboardHeaderBtn'>
                            <img className='dashboardHeaderImg' src="/src/assets/logout.svg" alt="" />
                        </button></Link>
                </nav>
            </header>
        </>
    )
}
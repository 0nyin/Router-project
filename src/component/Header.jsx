import React from 'react'
import { Link , NavLink } from "react-router-dom"

export default function Header() {
  return (
    <div>
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <NavLink 
                to="/host"
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                Host</NavLink>
                <NavLink 
                to="/about"
                    className={({isActive}) => isActive ? "active-link" : null}
                >
                About</NavLink>
                <NavLink 
                    className={({isActive}) => isActive ? "active-link" : null}
                to="/vans"
                
                >
                Vans</NavLink>
            </nav>
        </header>
    </div>
  )
}

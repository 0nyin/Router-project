import React from 'react'
import { NavLink  , Outlet } from "react-router-dom"

export default function HostLayout() {

    const ActiveStyle ={

        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
  return (
    <div>
        <nav className='host-nav'>
            <NavLink 
            to="/host"
            end
                style={({isActive}) => isActive ? ActiveStyle : null }
            >
            Dashboard</NavLink>

            <NavLink 
            to="/host/income"
                style={({isActive}) => isActive ? ActiveStyle : null }
            >
            Income</NavLink>

            <NavLink 
            to="/host/vans"
                style={({isActive}) => isActive ? ActiveStyle : null }
            >
            Vans</NavLink>

            <NavLink 
            to="/host/review"
                style={({isActive}) => isActive ? ActiveStyle : null }
            >
            Review</NavLink>
        </nav>
        <Outlet />
    </div>
  )
}

import React from 'react'
import './NavStyle.css'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav className="navbar">
            
            
            <div className="ulbox">
                <h1>Notepad</h1>
                <ul className="ulstyle">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    
                    <Link to="/add">
                        <li>Add</li>
                    </Link>
                </ul>

            </div>
            
        </nav>
    )
}

export default Nav
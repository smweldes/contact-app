import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="">
            <Link to="/" className="navbar-brand ml-5"><h2>React Redux Contact App</h2></Link>
        </nav>
    )
}

export default Navbar

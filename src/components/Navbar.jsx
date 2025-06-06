import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full gap-3 bg-slate-300 text-black p-4 flex justify-end">
                <Link to="/">Home</Link>
                <Link to="/Profile">Profile</Link>
                <Link to="/Contact">Contact</Link>
        </nav>
    )
}

export default Navbar
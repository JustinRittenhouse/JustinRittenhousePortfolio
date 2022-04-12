import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">Justin Rittenhouse</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll" style={{maxHeight: "100px"}}>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">About<span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Experience</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

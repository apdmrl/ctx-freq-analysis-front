import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" className='navbar-brand'>Contextual Frequency Analysis</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/contexts">Contexts <span className="sr-only"></span></Link>
                        </li>
                        <li className="nav-item active">
                            <Link className="nav-link" to="/contents">Contents <span className="sr-only"></span></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
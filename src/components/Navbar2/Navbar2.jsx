import React from 'react'
import '../../index.css'

function Navbar2() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid">
                    <a className="navbar-brand text-capitalize landind-btn" href="#">Landing</a>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto text-center">
                            <li className="nav-item">
                                <a className="nav-link active d-flex align-items-center nav-content" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center nav-content" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link d-flex align-items-center nav-content">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <button class="btn navbar-btn align-content-center align-items-center rounded-0 me-3" type="submit">Purchase UI Kit</button>
                    <button class="btn navbar-btn navbar-btn-2 align-content-center align-items-center rounded-0" type="submit">Contact Us</button>
                </div>
            </nav>

        </>
    )
}

export default Navbar2
import React from 'react'
import '../../index.css'

function NavbarHomePage() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white">
                <div className="container-fluid text-center d-flex justify-content-between">
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav text-center list-element me-0">
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

                    <a className="navbar-brand text-capitalize align-content-center align-items-center landing-home w-100 m-0" href="#">Landing</a>

                    <button className="btn home-page-btn home-page-btn-s align-content-center align-items-center rounded-1" type="submit">Buy Now</button>
                </div>
            </nav>

        </>
    )
}

export default NavbarHomePage
import React from 'react'
import '../../index.css'

function Footer() {
    return (
        <>
            <footer className="footer-section pt-5 pb-3">
                <div className="container-fluid text-center d-flex justify-content-between pb-4">
                    <span className=" text-center your-company">©2023 Yourcompany</span>
                    <a className="navbar-brand text-capitalize align-content-center align-items-center landing-home m-0" href="#">Landing</a>
                    <button className="btn home-page-btn align-content-center align-items-center rounded-1" type="submit">Purchase now</button>
                </div>

                <div className="border-bottom mx-5 line-footer"></div>

                <nav className="navbar navbar-expand-lg pt-3">
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

                        <div className="icons">

                        </div>
                    </div>
                </nav>
            </footer>

        </>
    )
}

export default Footer
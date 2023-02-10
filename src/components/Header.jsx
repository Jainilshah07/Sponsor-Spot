import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../asset/logo.png';
import person from '../assets/person-circle.svg'
const Header = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid mb-2">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="" width="40" height="34" />
                    </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active mx-4" aria-current="page" to="/Profile">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active mx-4" aria-current="page" to="/history">History</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active mx-4" aria-current="page" to="/complain">Complain</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active mx-4" aria-current="page" to="/become-a-sponsor">Become A Sponsor</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active mx-4" aria-current="page" to="/avail-a-sponsorship">Avail a Sponsorship</Link>
                            </li>
                        </ul>
                        <div className="d-flex">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/signup">Sign up</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/login">Login</Link>
                                </li>
                                {/* Check this */}
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/"> <img className='mt-1' src={person} alt="" /> </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
};
export default Header;
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../../../css/custom.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
            <div className="container container-fluid ">

                <a className="navbar-brand text-white" href="#">Md. <span className='text-secondary'>Shafiqul</span> Alam</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className='dropdown'>
                    <div className="" id="navbarNavDropdown ">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link text-white active a" aria-current="page" href="">Home</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-white dropdown-togglec a" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Biography
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item text-dark" href={route('biography.profile')}>Profile</a></li>
                                    <li><a className="dropdown-item text-dark" href={route('biography.social-involvement')}>Social involvement</a></li>
                                    <li><a className="dropdown-item text-dark" href={route('biography.vision')}>Vision</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-white dropdown-toggle a" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Business Activity
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item text-dark" href={route('bizzSolution')}>Bizz Solutions PLC</a></li>
                                    <li><a className="dropdown-item text-dark" href={route('training')}>Trainig</a></li>
                                    <li><a className="dropdown-item text-dark" href={route('firm')}>CA Firm</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-white dropdown-toggle a" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Award & Honor
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item text-dark" href={route('private')}>Private Award</a></li>
                                    <li><a className="dropdown-item text-dark" href={route('govt')}>Govt Award</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-white dropdown-toggle a" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    News Coverage
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item text-dark" href="#">Blog</a></li>

                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link text-white dropdown-toggle a" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Live TV show
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li><a className="dropdown-item" href="#">News 24</a></li>
                                    <li><a className="dropdown-item" href="#">Independence TV</a></li>
                                    <li><a className="dropdown-item" href="#">G TV</a></li>
                                </ul>
                            </li>
                            <li>
                                {/* <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;


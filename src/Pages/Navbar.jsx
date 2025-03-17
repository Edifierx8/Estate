import React from 'react';
import accountPic from '../assets/Link.png';
import '../Css/Navbar.css'



const Navbar = () => {
    function myButton() {   
        const nav = document.getElementById('mobile-navbar');
        nav.display = 'none';
        alert('its working')

    }

    return (
        <header>
            <div className='nav'>
                <nav className='navbar'>
                    <a href="#" className="logo">EState</a>
                    <ul className="nav-list primary-list">
                        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Listings</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Members</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Blog</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Pages</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
                    </ul>
                    <ul className="secondary-list">
                        <li className="nav-item"><a href="#" className="nav-link">+62 659 45278</a></li>
                        <li className="nav-item"><a href="#" className="nav-link"><img src={accountPic} alt="" /></a></li>
                        <li className="nav-item"><a href="#" className="nav-link cta-link">Add Property</a></li>
                    </ul>

                    <button className='toggle' onClick={myButton}>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </button>
                </nav>

                <nav className='mobile-navbar' id='mobile-navbar'>
                <ul className="nav-list primary-list">
                        <li className="nav-item"><a href="#" className="nav-link">Home</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Listings</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Members</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Blog</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Pages</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
                    </ul>
                    <ul className="secondary-list">
                        <li className="nav-item"><a href="#" className="nav-link">+62 659 45278</a></li>
                        <li className="nav-item"><a href="#" className="nav-link  account-link">Account <img src={accountPic} alt="" /></a></li>
                        <li className="nav-item"><a href="#" className="nav-link cta-link">Add Property</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar

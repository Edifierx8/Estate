import React from 'react'
import '../Css/End.css'

const End = () => {
    return (
        <div className='end'>
            <div className="sub">
                <h3>Subscribe</h3>
                <div className="g1">
                    <p>Your E-mail</p>
                    <a href="#" className="cta">Send</a>
                </div>
                <hr />
                <p>Subscribe to our newsletter to receive our weekly feed.</p>
            </div>
            <div className="dis">
                <h3>Discover</h3>
                <ul>
                    <li>Miami</li>
                    <li>New York</li>
                    <li>Chicago</li>
                    <li>Florida</li>
                    <li>Los Angeles</li>
                    <li>San Diego</li>
                </ul>
            </div>
            <div className="quick">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">FAQ’s</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Pricing Plans</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                </ul>
            </div>
            <div className="cont">
                <h3>Contact Us</h3>
                <p>hi@ehome.com</p>
                <p>(123) 456-7890</p>
            </div>
            <div className="address">
                <h3>Address</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit.
                </p>
            </div>
        </div>
    )
}

export default End

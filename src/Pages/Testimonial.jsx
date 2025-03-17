import React from 'react'
import '../Css/Testimonal.css'
import client from '../assets/div.avarta.png'
import left from '../assets/Button (1).png'
import right from '../assets/button2.png'

const Testimonial = () => {
    return (
        <div className='testimonial'>
            <div className="left">
                <h2 className="heading">What our customers are
                saying us?</h2>
                <p>Various versions have evolved over the years, sometimes by
                accident, sometimes on purpose injected humour and the like.</p>
                <div className="rating">
                <div className="left">
                    <h3>10m+</h3>
                    <p>Happy People</p>
                </div>
                <div className="right">
                    <h3>4.88</h3>
                    <p>Overall rating</p>
                </div>
            </div>
            </div>
            <div className="right">
                <div className="profile">
                    <img src={client} alt="client" />
                    <div className="text">
                        <h3>Cameron Williamson</h3>
                        <p>Designer</p>
                    </div>
                </div>
                <p>Searches for multiplexes, property comparisons, and the loan
estimator. Works great. Lorem ipsum dolor sit amet, consectetur
adipiscing elit, sed do eiusmod tempor incididunt ut labore et
dores.</p>
                <div className="buttons">
                    <a href="#"><img src={right} alt="left btn" /></a>
                    <a href="#"><img src={left} alt="right btn" /></a>
                </div>
            </div>
        </div>
    )
}

export default Testimonial

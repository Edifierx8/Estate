import React from 'react'
import '../Css/Listings.css'
import icon1 from '../assets/Icon.png'
import icon2 from '../assets/Icon (1).png'
import icon3 from '../assets/Icon (2).png'
import property1 from '../assets/Article.png'
import property2 from '../assets/article2.png'
import property3 from '../assets/article3.png'
import property4 from '../assets/article4.png'
import property5 from '../assets/article5.png'
import property6 from '../assets/article6.png'
import bed from '../assets/bed.png'
import shower from '../assets/Vector.png'
import box from '../assets/box.png'
import location from '../assets/location.png'
import arrow from '../assets/SVG.svg'


const Listings = () => {
    return (
        <div className='listings'>
            <h2 className='heading'>Why You Should Work with Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="row">
                <div className="card">
                    <img src={icon1} alt="Properties pic" />
                    <h3>Wide Range of Properties</h3>
                    <p>We offer expert legal help for all related property
                    items in Dubai.</p>
                </div>
                <div className="card">
                    <img src={icon2} alt="buy or rent homes pic" />
                    <h3>Buy or Rent Homes</h3>
                    <p>We sell your home at the best market price and very
                    quickly as well.</p>
                </div>
                <div className="card">
                    <img src={icon3} alt="Trusted by Thousands pic" />
                    <h3>Trusted by Thousands</h3>
                    <p>We offer you free consultancy to get a loan for your
                    new home.</p>
                </div>
            </div>

            <div className="featured">
                <h2 className='heading'>Featured Properties</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="types" >
                    <a className="link active">All Properties</a>
                    <a className="link">For Sale</a>
                    <a className="link">For Rent</a>
                </div>
                <div className="properties">
                    <div className="property sale">
                        <a href="#">
                            <img className='bg' src={property1} alt="Hotel" />
                            <div className="price">
                                <h3>Luxury family Home</h3>
                                <p className='location'><img src={location} alt="location" />1800-1810 79th St</p>
                                <div className="feature">
                                    <h3 className='rate'>
                                        $395,000
                                    </h3>
                                    <p><img src={bed} alt="bed" /> 4</p>
                                    <p><img src={shower} alt="Bathroom" /> 1</p>
                                    <p><img src={box} alt="square foot" /> 400</p>
                                </div>
                            </div>
                            <div className="details">
                            <div className="for-sale">For Sale</div>
                            <div className="feat">Featured</div>
                            </div>
                        </a>
                    </div>
                    <div className="property sale">
                        <a href="#">
                            <img className='bg' src={property2} alt="Hotel" />
                            <div className="price">
                                <h3>Skyper Pool Apartment</h3>
                                <p className='location'><img src={location} alt="location" />1020 Bloomingdale Ave</p>
                                <div className="feature">
                                    <h3 className='rate'>
                                        $280,000
                                    </h3>
                                    <p><img src={bed} alt="bed" /> 4</p>
                                    <p><img src={shower} alt="Bathroom" /> 2</p>
                                    <p><img src={box} alt="square foot" /> 450</p>
                                </div>
                            </div>
                            <div className="details">
                            <div className="for-sale">For Sale</div>
                            </div>
                        </a>
                    </div>
                    <div className="property rent">
                        <a href="#">
                            <img className='bg' src={property3} alt="Hotel" />
                            <div className="price">
                                <h3>North Dillard Street</h3>
                                <p className='location'><img src={location} alt="location" />4330 Bell Shoals Rd</p>
                                <div className="feature">
                                    <h3 className='rate'>
                                        $250/<span>month</span>
                                    </h3>
                                    <p><img src={bed} alt="bed" /> 4</p>
                                    <p><img src={shower} alt="Bathroom" /> 1</p>
                                    <p><img src={box} alt="square foot" /> 400</p>
                                </div>
                            </div>
                            <div className="details">
                            <div className="for-sale">For Rent</div>
                            </div>
                        </a>
                    </div>

                    <div className="property sale">
                        <a href="#">
                            <img className='bg' src={property4} alt="Hotel" />
                            <div className="price">
                                <h3>Eaton Garth Penthouse</h3>
                                <p className='location'><img src={location} alt="location" />7722 18th Ave, Brooklyn</p>
                                <div className="feature">
                                    <h3 className='rate'>
                                        $195,000
                                    </h3>
                                    <p><img src={bed} alt="bed" /> 4</p>
                                    <p><img src={shower} alt="Bathroom" /> 2</p>
                                    <p><img src={box} alt="square foot" /> 450</p>
                                </div>
                            </div>
                            <div className="details">
                            <div className="for-sale">For Sale</div>
                            <div className="feat">Featured</div>
                            </div>
                        </a>
                    </div>

                    <div className="property rent">
                        <a href="#">
                            <img className='bg' src={property5} alt="Hotel" />
                            <div className="price">
                                <h3>New Apartment Nice Wiew</h3>
                                <p className='location'><img src={location} alt="location" />42 Avenue O, Brooklyn</p>
                                <div className="feature">
                                    <h3 className='rate'>
                                        $850/<span>month</span>
                                    </h3>
                                    <p><img src={bed} alt="bed" /> 4</p>
                                    <p><img src={shower} alt="Bathroom" /> 1</p>
                                    <p><img src={box} alt="square foot" /> 460</p>
                                </div>
                            </div>
                            <div className="details">
                            <div className="for-sale">For Rent</div>
                            </div>
                        </a>
                    </div>

                    <div className="property sale">
                        <a href="#">
                            <img className='bg' src={property6} alt="Hotel" />
                            <div className="price">
                                <h3>Diamond Manor Apartment</h3>
                                <p className='location'><img src={location} alt="location" />7802 20th Ave, Brooklyn</p>
                                <div className="feature">
                                    <h3 className='rate'>
                                        $259,000
                                    </h3>
                                    <p><img src={bed} alt="bed" /> 4</p>
                                    <p><img src={shower} alt="Bathroom" /> 2</p>
                                    <p><img src={box} alt="square foot" /> 500</p>
                                </div>
                            </div>
                            <div className="details">
                            <div className="for-sale">For Sale</div>
                            <div className="feat">Featured</div>
                            </div>
                        </a>
                    </div>
                </div>
                <a href="#" className="btn flex">See All Listing <img src={arrow} alt="arrow" /></a>
            </div>
        </div>
    )
}

export default Listings

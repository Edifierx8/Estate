import React from 'react'
import '../Css/Slider.css'
import chicago from '../assets/h22.jpg.png'
import losAngels from '../assets/h23.jpg.jpg'
import miami from '../assets/h24.jpg.jpg'
import florida from '../assets/h25.jpg.jpg'
import newYork from '../assets/h21.jpg.png'

const Slider = () => {
    return (
        <div className='slider'>
            <h2 className="heading">Find Properties in These Cities</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <div className="cities">
                <figure>
                    <img src={chicago} alt="Chicago" />
                    <figcaption>
                        <h3>Chicago</h3>
                        <p>2 Properties</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={losAngels} alt="Chicago" />
                    <figcaption>
                        <h3>Los Angeles</h3>
                        <p>1 Properties</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={miami} alt="Chicago" />
                    <figcaption>
                        <h3>Miami</h3>
                        <p>2 Properties</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={florida} alt="Chicago" />
                    <figcaption>
                        <h3>Florida</h3>
                        <p>3 Properties</p>
                    </figcaption>
                </figure>
                <figure>
                    <img src={newYork} alt="Chicago" />
                    <figcaption>
                        <h3>New York</h3>
                        <p>8 Properties</p>
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}

export default   Slider

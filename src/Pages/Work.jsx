import React from 'react'
import '../Css/Work.css'
import salePic from '../assets/sales.png'

const Work = () => {
    return (
        <div className='work'>
            <img src={salePic} alt="Sales" />
            <div className="content">
                <h2 className="heading">How It works?
                Find a perfect home</h2>
                <p className='sub-head'>Pellentesque egestas elementum egestas faucibus sem. Velit
                nunc egestas ut morbi. Leo diam diam.</p>
                <h3>Find Real Estate</h3>
                <p>Sumo petentium ut per, at his wisim utinam
                adipiscing. Est ei graeco</p>
                <h3>Meet Realtor</h3>
                <p>Sumo petentium ut per, at his wisim utinam
                adipiscing. Est ei graeco</p>
                <h3>Take The Keys</h3>
                <p>Sumo petentium ut per, at his wisim utinam
                adipiscing. Est ei graeco</p>
            </div>
        </div>
    )
}

export default Work

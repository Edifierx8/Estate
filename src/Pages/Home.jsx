import React from 'react'
import '../Css/Home.css'
import searchPic from '../assets/Button.png'
import icon1 from '../assets/div.type-icon.png';
import icon2 from '../assets/div.type-icon (1).png';
import icon3 from '../assets/div.type-icon (2).png';


const hero = () => {
    return (
        <div className='hero'>
            <p className='guide'>Let us guide your home</p>
            <h1 className='title'>Believe in finding it</h1>
            <p className='subtitle'>Search properties for sale and to rent in the UK</p>
            <form action="/action_page.php" className='search-box'>
                <input type="text" className='search' placeholder='Enter Name, Keyword...' />
                <button type="submit"><img src={searchPic} alt="" /></button>
            </form>
            <p>What are you looking for</p>
            <div className="row">
                <div className="box">
                    <img src={icon1} alt="Modern Villa" />
                    Modern Villa
                </div>
                <div className="box">
                    <img src={icon2} alt="Modern Villa" />
                    Apartment
                </div>
                <div className="box">
                    <img src={icon3} alt="Modern Villa" />
                    Town House
                </div>
            </div>
        </div>
)
}

export default hero

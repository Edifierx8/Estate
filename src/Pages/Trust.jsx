import React from 'react'
import '../Css/Trust.css'
import companyPic from '../assets/div.slick-list.png'

const Trust = () => {
    return (
        <div className='trust'>
            <p>Thousands of world’s leading companies trust Space</p>
            <img src={companyPic} alt="company" />
        </div>
    )
}

export default Trust

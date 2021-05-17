import React from 'react'
import { Link } from 'react-router-dom'

function Slide({icon, heading, lead, desc}) {
    return (
        <div className="singleSlide">
            <img src={lead} alt="" className='lead'/>
            <div className="content">
                <img src={icon} alt="" className='icon'/>
                <div className="slide__text">
                    <h2>{heading}</h2>
                    <p>{desc}</p>
                    <div className='btn'>
                        <Link className='link'>
                            Learn More
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide

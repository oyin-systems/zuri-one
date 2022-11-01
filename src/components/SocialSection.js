import React from 'react';
import Logo1 from '../images/slack.png';
import Logo2 from '../images/Icon.png';
import "../App.css"

export default function SocialSection() {
    return (
        <div className='social-section'>
            <img src={Logo1} className="slack" alt="logo" />
            <img src={Logo2} className="icon" alt="logo" />
        </div>
    )
} 
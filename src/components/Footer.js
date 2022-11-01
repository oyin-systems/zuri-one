import React from 'react';
import "../App.css";
import Logo1 from "../images/Zuri_Logo.png";
import Logo2 from "../images/Footer_text.png";
import Logo3 from "../images/I4G.png";

export default function Footer() {
    return (
        <div className='footer'>
            <img src={Logo1} className="zuri_logo" alt="logo" />
            <img src={Logo2} className="footer_text" alt="logo" />
            <img src={Logo3} className="I4G" alt="logo" />
        </div>
    )
} 
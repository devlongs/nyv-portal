import React from 'react';
import {Link} from 'react-router-dom';
import './HeroSection.css';
import Navbar from './../navbar/Navbar';

function HeroSection(){
    return (
        <>
            <div className="home__hero-section">
                <Navbar />
                <div className="home__hero-container">
                    <h1>Building Strong and Resilient Communities through
Volunteerism</h1>
                    <ul className="home__primary-links">
                        <li><Link to='/signup'>BECOME A VOLUNTEER</Link></li>
                        <li><a href="#">REQUEST VOLUNTEER</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HeroSection;
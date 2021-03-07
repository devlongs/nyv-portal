import React from 'react';
// import fb from '../../src/img/fb.png';
// import tw from '../../src/img/tw.png';
// import ins from '../../src/img/ins.png';
import fb from '../../img/fb.png';
import tw from '../../img/tw.png';
import ins from '../../img/ins.png';
import './Quicklinks.css';

function Quicklinks (){
    return(
        <div className="home__quicklinks">
        <h2>QUICK LINKS</h2>
        <div className="links">
            <div className="link">
                <p><a href="">Become a NYV Volunteer</a></p>
                <p><a href="">Our Mission</a></p>
                <p><a href="">Our Mission</a></p>
            </div>
            <div className="link">
                <p><a href="">Become a NYV Volunteer</a></p>
                <p><a href="">Our Mission</a></p>
                <p><a href="">Our Mission</a></p>
            </div>
            <div className="link">
                <p><a href="">Become a NYV Volunteer</a></p>
                <p><a href="">Our Mission</a></p>
                <p><a href="">Our Mission</a></p>
            </div>
        </div>
        <a href="#" className="profile">My NYV Profile</a>
        <h3>Follow Us on Social Media</h3>
        <div className="social-icons">
            <img src={fb} alt="" />
            <img src={tw} alt="" />
            <img src={ins} alt="" />
        </div>
    </div>
    )
}

export default Quicklinks;
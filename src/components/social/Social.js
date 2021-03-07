import React from 'react';
import {Link} from 'react-router-dom';
import './Social.css';
import fb from '../../img/fb.png';
import tw from '../../img/tw.png';
import ins from '../../img/ins.png';


function Social(){
    return (
        <>
            <div className="home__social-media-section">
            <h3>NYV ON SOCIAL MEDIA</h3>
            <div className="social-media-cards">
                <div className="card">
                    <div className="logo">
                        <img src={fb} alt="" />
                    </div>
                    <p>Lorem ipsum dolor siiias dolore!</p>
                    <p>Lorem ipsum dolor siiias dolore!</p>
                    <p>Lorem ipsum dolor siiias dolore!</p>
                </div>
                <div className="card">
                    <div className="logo">
                        <img src={tw} alt="" />
                    </div>
                    <p>Lorem ipsum dolor siiias dolore!</p>
                    <p>Lorem ipsum dolor siiias dolore!</p>
                    <p>Lorem ipsum dolor siiias dolore!</p>
                </div>
                <div className="card">
                    <div className="logo">
                        <img src={ins} alt="" />
                    </div>
                    <p>Lorem ipsum dolor siiias dolore!</p>
                    <p>Lorem ipsum dolor siiias dolore!</p>
                    <p>Lorem ipsum dolor siiias dolore!</p>
                </div>
            </div>
    </div>
        </>
    )
}

export default Social;
import React from 'react';
import {Link} from 'react-router-dom';
import './Partners.css';
import who from '../../img/who.png';


function Partners(){
    return (
        <>
            <div className="home__partners-wrapper">
                <div>
                    <img src={who} />
                </div>
                <div>
                    <img src={who} />
                </div>
                <div>
                    <img src={who} />
                </div>
                <div>
                    <img src={who} />
                </div>
            </div>
        </>
    )
}

export default Partners;
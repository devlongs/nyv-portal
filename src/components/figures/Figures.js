import React from 'react';
import './Figures.css';
import users from '../../img/users.png';
import chat from '../../img/chat.png';
import organization from '../../img/organization.png';

function Figures(){
    return (
        <>
            <div className="home__figures">
                <div>
                    <img src={users} />
                    <h3>REGISTERED USERS</h3>
                    <h4>2345</h4>
                </div>
                <div>
                    <img src={organization} />
                    <h3>REGISTERED USERS</h3>
                    <h4>2345</h4>
                </div>
                <div>
                    <img src={chat} />
                    <h3>REGISTERED USERS</h3>
                    <h4>2345</h4>
                </div>
            </div>
        </>
    )
}

export default Figures;
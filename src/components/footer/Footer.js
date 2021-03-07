import React from 'react';
import './Footer.css';

function Footer (props){
    return(
        <footer style={props.dashboardfooterstyle}>
            <div class="col">
                <p>All rights reserved @ NYV</p>
            </div>
            <div class="col">
                <p>Developed by Black Owl Technology Services</p>
            </div>
    </footer>
    )
}

export default Footer;
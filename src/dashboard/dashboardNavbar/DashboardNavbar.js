import React from 'react';
import { BsFillPersonFill } from "react-icons/bs";
import {Link} from 'react-router-dom';
import styles from './DashboardNavbar.module.css';
import logo from '../../img/logo.png';

function DashboardNavbar(props) {
    return (
        <>
            <nav>
                <div className={styles.logo}>
                    <img src={logo} />
                </div>
                <ul className={styles.menu}>
                    <li><Link to='/'>Home</Link></li>
                    <li><BsFillPersonFill /></li>
                    <li>{props.name}</li>
                </ul>
            </nav>
        </>
    )
}

export default DashboardNavbar

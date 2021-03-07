import React from 'react';
import { BsPersonFill } from "react-icons/bs";
import { BsFillBookmarksFill } from "react-icons/bs";
import { BsWrench } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";
import { BsBoxArrowUpRight } from "react-icons/bs";

import styles from './Sidebar.module.css'

function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <ul>
                <li><a href="#"><BsPersonFill /> My Profile</a></li>
                <li><a href="#"><BsFillBookmarksFill /> Tools</a></li>
                <li><a href="#"><BsWrench /> Settings</a></li>
                <li><a href="#"><BsBellFill /> Notifications</a></li>
                <li><a href="#"><BsBoxArrowUpRight /> Log Out</a></li>
            </ul>
        </div>
    )
}

export default Sidebar

import React from 'react'
import {Link} from 'react-router-dom';
import styles from  './PersonalInfo.module.css';

function PersonalInfo(props) {
    return (
        <div className={styles.personalinfo}>
            <table id={styles.personalinfotable}>
            <caption>Professional Information</caption>
                <tr>
                    <td>Title</td>
                    <td>Mr</td>
                </tr>
                <tr>
                    <td>First Name</td>
                    <td>John</td>
                </tr>
                <tr>
                    <td>Last Name</td>
                    <td>Doe</td>
                </tr>
                <tr>
                    <td>Email Address</td>
                    <td>{props.email}</td>
                </tr>
                <tr>
                    <td>Gender</td>
                    <td>Male</td>
                </tr>
                <tr>
                    <td>Nationality</td>
                    <td>Nigerian</td>
                </tr>
                <tr>
                    <td>Other Nationality(s)</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Marital Status</td>
                    <td>Single</td>
                </tr>
                <tr>
                    <td>Correspondence Language</td>
                    <td>English</td>
                </tr>
                <tr>
                    <td>I Am Willing To Serve in a Non-family Duty Station</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>I Am Interested In Serving as a Volunteer</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Disbality(s)</td>
                    <td>None</td>
                </tr>
                <tr>
                    <td>Mobile Number</td>
                    <td>0907767893476</td>
                </tr>
            </table>
        </div>
    )
}

export default PersonalInfo;
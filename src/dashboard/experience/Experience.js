import React from 'react';
import {Link} from 'react-router-dom';
import styles from  './Experience.module.css';

function Experience() {
    return (
        <div className={styles.experience}>
            <table id={styles.experiencetable}>
            <caption>Professional Experience</caption>
                <tr>
                    <td>Professional Experience</td>
                    <td>-</td>
                </tr>
            </table>
            <Link to='/editform'>
            <button style={{background: "#2ec346", padding: "15px", border: "none", marginTop: "20px", color: "white"}}>Edit Profile</button>
            </Link>
        </div>
    )
}

export default Experience;
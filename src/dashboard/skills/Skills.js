import React from 'react'
import styles from  './Skills.module.css';

function Skills() {
    return (
        <div className={styles.skills}>
            <table id={styles.skillstable}>
            <caption>Qualifications and Skills </caption>
                <tr>
                    <td>Academic Qualifications</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Other Qualifications, Trainings and Certifications</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Computer/IT Skills</td>
                    <td>-</td>
                </tr>
                <tr>
                    <td>Languages</td>
                    <td>-</td>
                </tr>
            </table>
        </div>
    )
}

export default Skills;
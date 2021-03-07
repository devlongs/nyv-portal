import React from 'react'
import styles from  './Addresses.module.css';

function Addresses() {
    return (
        <div className={styles.addresses}>
            <table id={styles.addressestable}>
            <caption>Addresses</caption>
                <tr>
                    <td>Current Address</td>
                    <td>Bukuru, Jos South, Plateau State</td>
                </tr>
                <tr>
                    <td>Permanent Address</td>
                    <td>Bukuru, Jos South, Plateau State</td>
                </tr>
            </table>
        </div>
    )
}

export default Addresses;
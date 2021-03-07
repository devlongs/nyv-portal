import React from 'react'
import Addresses from '../addresses/Addresses';
import Experience from '../experience/Experience';
import PersonalInfo from '../personalinfo/PersonalInfo';
import Skills from '../skills/Skills';
import styles from  './Main.module.css';

function Main() {
    return (
        <div className={styles.main}>
               <PersonalInfo />
               <Addresses />
               <Skills />
               <Experience />
        </div>
    )
}

export default Main

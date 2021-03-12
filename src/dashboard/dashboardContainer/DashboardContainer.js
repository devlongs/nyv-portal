import React from 'react'
import Main from '../main/Main';
import Sidebar from '../sidebar/Sidebar';
import styles from './DashboardContainer.module.css';

function DashboardContainer(props) {
    return (
        <div className={styles.dashboardcontainer}>
            <Sidebar />
            <Main email={props.email}/>
        </div>
    )
}

export default DashboardContainer

import React from 'react'
import Main from '../main/Main';
import Sidebar from '../sidebar/Sidebar';
import styles from './DashboardContainer.module.css';

function DashboardContainer() {
    return (
        <div className={styles.dashboardcontainer}>
            <Sidebar />
            <Main />
        </div>
    )
}

export default DashboardContainer

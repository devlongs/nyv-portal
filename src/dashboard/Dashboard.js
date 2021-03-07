import React from 'react';
import DashboardContainer from './dashboardContainer/DashboardContainer';
import DashboardNavbar from './dashboardNavbar/DashboardNavbar';
import Footer from '../components/footer/Footer'

function Dashboard (props){
    const dashboardfooterstyle = {
        position: "relative", 
        bottom: 0
    }
    
    return(
        <>
            <DashboardNavbar />
            <DashboardContainer />
            <Footer dashboardfooterstyle={dashboardfooterstyle}/>
        </>
    )
}

export default Dashboard;
import React from 'react';
import WhoWeAre from '../../whoweare/WhoWeAre';
import StrategicFramework from '../../strategicframework/StrategicFramework';
import AnnualReport from '../../annualreport/AnnualReport';
import Quicklinks from '../../quicklinks/Quicklinks';
import Footer from '../../footer/Footer';
import Navbar from '../../navbar/Navbar';
import { FaBlackberry } from 'react-icons/fa';



function AboutPage (){
    const propstyle = {
        background: "#00b41e",
        marginBottom: "20px"
    }

    return(
        <>
            <Navbar propstyle={propstyle}/>
            <WhoWeAre />
            <StrategicFramework />
            <AnnualReport />
            <Quicklinks />
            <Footer />
        </>
    )
}

export default AboutPage;
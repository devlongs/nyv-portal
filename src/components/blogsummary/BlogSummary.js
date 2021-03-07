import React from 'react';
import {Link} from 'react-router-dom';
import './BlogSummary.css';
import users from '../../img/users.png';
// import officeguys from '../../img/vol.jpg';
// import marker from '../../img/marker.png'
import officeguys from '../../img/vol.jpg'
import marker from '../../img/marker.png'


function BlogSummary(){
    return (
        <>
            <div className="home__blog-wrapper">
                <div className="blog-card">
                    <div className="blog-card-header">
                        <img src={officeguys} />
                    </div>
                    <div className="blog-card-body">
                        <h3>Youth reconnection meeting in Jos</h3>
                        <p className="location">  <img src={marker} />Jos Plateau State</p>
                        <p className="date">28 January 2021</p>
                    </div>
                </div>
                <div className="blog-card">
                    <div className="blog-card-header">
                        <img src={officeguys} />
                    </div>
                    <div className="blog-card-body">
                        <h3>Youth reconnection meeting in Jos</h3>
                        <p className="location">  <img src={marker} />Jos Plateau State</p>
                        <p className="date">28 January 2021</p>
                    </div>
                </div>
                <div className="blog-card">
                    <div className="blog-card-header">
                        <img src={officeguys} />
                    </div>
                    <div className="blog-card-body">
                        <h3>Youth reconnection meeting in Jos</h3>
                        <p className="location">  <img src={marker} />Jos Plateau State</p>
                        <p className="date">28 January 2021</p>
                    </div>
                </div>
                <div className="blog-card">
                    <div className="blog-card-header">
                        <img src={officeguys} />
                    </div>
                    <div className="blog-card-body">
                        <h3>Youth reconnection meeting in Jos</h3>
                        <p className="location">  <img src={marker} />Jos Plateau State</p>
                        <p className="date">28 January 2021</p>
                    </div>
                </div>
                <div className="blog-card">
                    <div className="blog-card-header">
                        <img src={officeguys} />
                    </div>
                    <div className="blog-card-body">
                        <h3>Youth reconnection meeting in Jos</h3>
                        <p className="location">  <img src={marker} />Jos Plateau State</p>
                        <p className="date">28 January 2021</p>
                    </div>
                </div>
                <div className="blog-card">
                    <div className="blog-card-header">
                        <img src={officeguys} />
                    </div>
                    <div className="blog-card-body">
                        <h3>Youth reconnection meeting in Jos</h3>
                        <p className="location">  <img src={marker} />Jos Plateau State</p>
                        <p className="date">28 January 2021</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogSummary;
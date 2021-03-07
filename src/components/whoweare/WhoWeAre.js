import React from 'react';
import styles from './WhoWeAre.module.css'
import img from '../../img/anna-earl-J-Jb1niw1j0-unsplash.jpg'

function WhoWeAre() {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.leftSide}>
                <img src={img} />
            </div>
            <div className={styles.rightSide}>
                <h1>Who We Are</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                <a href="#">Read More</a>
            </div>
        </div>
    )
}

export default WhoWeAre

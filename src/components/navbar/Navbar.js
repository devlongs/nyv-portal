import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';
import {IconContext} from 'react-icons/lib';
import './Navbar.css';
import logo from '../../img/logo.png'

function Navbar(props){
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    return(
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <div className="navbar" style={props.propstyle}>
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
                        <img src={logo} style={{width: '50px'}}/>
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className="nav-item">
                            <Link to='/about'  className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/donate' className='nav-links' onClick={closeMobileMenu}>
                                Donate
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/signup' className='nav-links' onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/login' className='nav-links' onClick={closeMobileMenu}>
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;
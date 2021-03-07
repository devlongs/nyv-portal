import React from 'react';
import logo from '../../img/logo.png';
import {Link} from 'react-router-dom';
import { BsFillLockFill } from "react-icons/bs";
import styles from './Login.module.css';

const initialState = {
    email: "",
    emailError: "",
    password: "",
    passwordError: ""
};

class Login extends React.Component{
    state = initialState;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox ? event.target.checked : event.target.value
        });
    };

    validate =() =>{
        let emailError = "";
        let passwordError = "";

        if(!this.state.email.includes('@') || this.state.email.length < 5){
            emailError = 'Invalid email';
    }

        if(this.state.password.length < 5){
            passwordError = 'Invalid Password';
        }

        if(emailError || passwordError){
            this.setState({emailError, passwordError});
            return false;
        }

        return true;
    }

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate(); 
        if(isValid){
            console.log(this.state);
             // Clear form
            this.setState(initialState);
        }
    }

    render(){
        return (
            <div className={styles.body}>
                <div className={styles.header}></div>
                <div className={styles.formcontainer}>
                    <form onSubmit={this.handleSubmit}>
                        <img src={logo} />
                        <h1>Login with your NYV Account</h1>
                        <p>New to NYV? <Link to='/signup'>Sign up</Link></p>
                        <div className={styles.forminputs}>
                            <input placeholder="email" className={styles.forminput} type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                            <div style={{color: "red", fontSize: "14px", padding: "5px"}}>{this.state.emailError}</div>
                        </div>
                        <div className={styles.forminputs}>
                            <input placeholder="Password" className={styles.forminput} type="password" name="password" value = {this.state.password}onChange={this.handleChange}/>
                            <div style={{color: "red", fontSize: "14px", padding: "5px"}}>{this.state.passwordError}</div>
                        </div>
                        <div className={styles.forminputs}>
                            <button type="submit" className={styles.formbtn}>Submit</button>
                        </div>
                        <p><BsFillLockFill /> Forgot your Password?</p>
                    </form>
                </div>
            </div>
        )
    }
}


export default Login

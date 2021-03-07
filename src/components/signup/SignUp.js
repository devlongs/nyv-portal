import React from 'react';
import logo from '../../img/logo.png';
import {Link} from 'react-router-dom';
import { BsFillLockFill } from "react-icons/bs";
import styles from './Signup.module.css';

const initialState = {
    name: "",
    nameError: "",
    email: "",
    emailError: "",
    phone: "",
    phoneError: "",
    password: "",
    passwordError: "",
    confirmPassword: "",
    confirmPasswordError: ""
};

class SignUp extends React.Component{
    state = initialState;

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox ? event.target.checked : event.target.value
        });
    };

    validate =() =>{
        let nameError = "";
        let emailError = "";
        let phoneError = "";
        let passwordError = "";
        let confirmPasswordError = "";

        if(this.state.name === "" || this.state.name.length < 5){
            nameError = 'Invalid name';
        }

        if(!this.state.email.includes('@') || this.state.email.length < 5){
            emailError = 'Invalid email';
        }

        if(this.state.phone.length < 11 || this.state.phone === ""){
            phoneError = 'Invalid Phone Number';
        }

        if(this.state.password.length < 5){
            passwordError = 'Invalid Password';
        }

        if(this.state.password != this.state.confirmPassword){
            confirmPasswordError = 'Password does not match';
        }

        if(nameError || emailError || phoneError || passwordError || confirmPasswordError){
            this.setState({nameError, emailError, phoneError, passwordError, confirmPasswordError});
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
                        <h1>Create a new NYV Account</h1>
                        <div className={styles.forminputs}>
                            <input placeholder="Name" className={styles.forminput} type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                            <div style={{fontSize: "14px", color: "red", padding: "10px"}}>{this.state.nameError}</div>
                        </div>
                        <div className={styles.forminputs}>
                            <input placeholder="Email" className={styles.forminput} type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                            <div style={{fontSize: "14px", color: "red", padding: "10px"}}>{this.state.emailError}</div>
                        </div>
                         <div className={styles.forminputs}>         
                            <input className={styles.forminput} type="tel" name="phone" placeholder="Phone Number" value={this.state.phone} onChange={this.handleChange}/>
                            <div style={{fontSize: "14px", color: "red", padding: "10px"}}>{this.state.phoneError}</div>
                        </div>
                        <div className={styles.forminputs}> 
                            <input className={styles.forminput} type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
                            <div style={{fontSize: "14px", color: "red", padding: "10px"}}>{this.state.passwordError}</div>
                       </div>
                       <div className={styles.forminputs}>
                           <input className={styles.forminput} type="password" name="confirmPassword" placeholder="Confirm Password" value={this.state.confirmPassword} onChange={this.handleChange}/>
                           <div style={{fontSize: "14px", color: "red", padding: "10px"}}>{this.state.confirmPasswordError}</div>
                       </div>
                       <div className={styles.forminputs}>
                            <button type="submit" className={styles.formbtn}>CREATE ACCOUNT</button>
                        </div>
                        <p><BsFillLockFill /> I already have an account? <Link to='/login'>Login</Link></p>
                    </form>
                </div>
            </div>
        )
    }
}


export default SignUp


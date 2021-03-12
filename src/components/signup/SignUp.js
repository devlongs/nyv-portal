import React, {useState} from 'react';
import axios from "axios";
import logo from '../../img/logo.png';
import {Link} from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { BsFillLockFill } from "react-icons/bs";
import styles from './Signup.module.css';


const SignUp = ({errors, touched, isSubmitting}) =>{
        return (
            <div className={styles.body}>
                <div className={styles.header}></div>
                <div className={styles.formcontainer}>
                    <Form >
                        <img src={logo} />
                        <h1>Create a new NYV Account</h1>
                        <div className={styles.forminputs}>
                            <Field placeholder="Name" className={styles.forminput} type="text" name="name" />
                            {touched.name && errors.name && <p style={{color: "red"}}>{errors.name }</p>}
                        </div>
                        <div className={styles.forminputs}>
                            <Field placeholder="Email" className={styles.forminput} type="email" name="email" />
                            {touched.email && errors.email && <p style={{color: "red"}}>{errors.email }</p>}
                        </div>
                         <div className={styles.forminputs}>         
                            <Field className={styles.forminput} type="tel" name="phone" placeholder="Phone Number" />
                            {touched.phone && errors.phone && <p style={{color: "red"}}>{errors.phone }</p>}
                        </div>
                        <div className={styles.forminputs}> 
                            <Field className={styles.forminput} type="password" name="password" placeholder="Password" />
                            {touched.password && errors.password && <p style={{color: "red"}}>{errors.password }</p>}
                       </div>
                       <div className={styles.forminputs}>
                           <Field className={styles.forminput} type="password" name="confirmPassword" placeholder="Confirm Password"/>
                           {touched.confirmPassword && errors.confirmPassword && <p style={{color: "red"}}>{errors.confirmPassword }</p>}
                       </div>
                       <div className={styles.forminputs}>
                            <button type="submit" className={styles.formbtn}>{isSubmitting ? 'Loading...' : 'CREATE ACCOUNT'}</button>
                        </div>
                        <p><BsFillLockFill /> I already have an account? <Link to='/login'>Login</Link></p>
                    </Form>
                </div>
            </div>
        )
}

const FormikSignUp = withFormik({
    mapPropsToValues() {
        return {
            name: '',
            email: '',
            phone: '',
            password: '',
            confirmPassword: ''
        }
    }, 
    validationSchema: Yup.object().shape({
        name: Yup.string('Name must be a string').min(5, 'Name must be 5 characters or longer').required('Name is required'),
        email: Yup.string().email('Email not valid').required('Email is required'),
        phone: Yup.number('Phone must be a number').min(11, 'Phone must a 11 digits').required('Phone is required'),
        password: Yup.string().min(5, 'Password must be 9 characters or longer').required('Password is required'),
        confirmPassword: Yup.string().min(5, 'Password must be 9 characters or longer').required('Confirm password is required')
    }),
    handleSubmit(values, {setSubmitting, resetForm, setErrors}){
        const configuration = {
            method: "post",
            url: "https://volunteer109.herokuapp.com/api/auth/register",
            data: {
              name: values.name,
              email: values.email,
              password: values.password,
              password_confirmation: values.confirmPassword
            },
            headers: { 'Content-Type': 'application/json' }
          };

          axios(configuration)
          .then((result) => {
              console.log(result);
              sessionStorage.setItem('token', JSON.stringify(result.data.data));
              resetForm();
              setSubmitting(false)
              window.location = "/dashboard";
            })
          .catch((error) => {console.log(error);})
    }
})(SignUp)


export default FormikSignUp


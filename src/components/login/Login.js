import React from 'react';
import axios from "axios";
import logo from '../../img/logo.png';
import {Link} from 'react-router-dom';
import { withFormik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { BsFillLockFill } from "react-icons/bs";
import styles from './Login.module.css';

const Login = ({errors, touched}) => {
        return (
            <div className={styles.body}>
                <div className={styles.header}></div>
                <div className={styles.formcontainer}>
                    <Form>
                        <img src={logo} />
                        <h1>Login with your NYV Account</h1>
                        <p>New to NYV? <Link to='/signup'>Sign up</Link></p>
                        <div className={styles.forminputs}>
                            <Field placeholder="email" className={styles.forminput} type="email" name="email"/>
                            {touched.email && errors.email && <p>{errors.email }</p>}
                        </div>
                        <div className={styles.forminputs}>
                            <Field placeholder="Password" className={styles.forminput} type="password" name="password" />
                            {touched.password && errors.password && <p>{errors.password }</p>}
                        </div>
                        <div className={styles.forminputs}>
                            <button type="submit" className={styles.formbtn}>Submit</button>
                        </div>
                        <p><BsFillLockFill /> Forgot your Password?</p>
                    </Form>
                </div>
            </div>
        )
}

const FormikLogin = withFormik({
    mapPropsToValues() {
        return {
            email: '',
            password: ''
        }
    }, 
    validationSchema: Yup.object().shape({
        email: Yup.string().email('Email not valid').required('Email is required'),
        password: Yup.string().min(5, 'Password must be 9 characters or longer').required('Password is required')
    }),
    handleSubmit(values){
        const configuration = {
            method: "post",
            url: "https://volunteer109.herokuapp.com/api/auth/login",
            data: {
              email: values.email,
              password: values.password
            },
            headers: { 'Content-Type': 'application/json' }
          };

          axios(configuration)
          .then((result) => {
             console.log(result.data.status)
             if(result.data.status == 'Success'){
                window.location = "/dashboard";
             }
            //   sessionStorage.setItem('token', JSON.stringify(result.data.data));
            //   resetForm();
            //   setSubmitting(false)
            })
          .catch((error) => {console.log(error);})
    }
})(Login)


export default FormikLogin;

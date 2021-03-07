import React from 'react';
import styles from './Editform.module.css';


class EditForm extends React.Component{
    state = {
        firstName: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
        email: "",
        emailError: "",
        gender: "",
        genderError: "",
        nationality: "",
        nationalityError: "",
        maritalStatus: "",
        maritalStatusError: "",
        language: "",
        languageError: "",
        nonFamily: "",
        nonFamilyError: "",
        volunteer: "",
        volunteerError: "",
        disability: "",
        disabilityError: "",
        phone: "",
        phoneError: "",
        currentAddress: "",
        currentAddressError: "",
        permanentAddress: "",
        permanentAddressError: "",
        qualification: "",
        qualificationError: "",
        skills: "",
        skillsError: "",
        experience: "",
        experienceError: ""
    };

    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox ? event.target.checked : event.target.value 
        });
    };

    validate = () => {
        let firstNameError = "";
        let lastNameError = "";
        let emailError = "";
        let genderError = "";
        let nationalityError = "";
        let maritalStatusError = "";
        let languageError = "";
        let nonFamilyError = "";
        let volunteerError = "";
        let disabilityError = "";
        let phoneError = "";
        let currentAddressError = "";
        let permanentAddressError = "";
        let qualificationError = "";
        let skillsError = "";
        let experienceError =  "";

        if(this.state.firstName === ""){
            firstNameError = "First Name cannot be blank";
        }

        if(this.state.lastName === ""){
            lastNameError = "Last Name cannot be blank";
        }

        if(this.state.email === ""){
            emailError = "Email cannot be blank";
        }

        if(this.state.gender === ""){
            genderError = "Please select an option";
        } 

        
        if(this.state.nationality === ""){
            nationalityError = "Nationality cannot be blank";
        } 

        if(this.state.language === ""){
            languageError = "Language cannot be blank";
        }

        if(this.state.phone === ""){
            phoneError = "Phone cannot be blank";
        }

        if(this.state.currentAddress === ""){
            currentAddressError = "Current Address cannot be blank";
        }

        if(this.state.permanentAddress === ""){
            permanentAddressError = "Permanent Address cannot be blank";
        }

        if(this.state.experience === ""){
            experienceError = "Experience cannot be blank";
        }

        if(firstNameError || lastNameError || emailError || genderError || nationalityError || languageError || phoneError || currentAddressError || permanentAddressError || experienceError){
            this.setState({firstNameError, lastNameError, emailError, genderError, nationalityError, languageError, phoneError, currentAddressError, permanentAddressError, experienceError});
            return false;
        }

        return true;
    }

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if(isValid){
            console.log(this.state);
        }
    };

    render(){
        return (
            <div className={styles.body}>
                <div className={styles.header}></div>
                <div className={styles.formcontainer}>
                <form onSubmit={this.handleSubmit}>
                    <h1>Edit Information</h1>
                    <div className={styles.forminputs}>
                        <label htmlFor="firstname">First Name</label>
                        <input className={styles.forminput} type="text" name="firstName" value={this.state.firstName} onChange={this.handleChange} />
                        <div style={{fontSize: "14px", color: "red", padding: "10px"}}>{this.state.firstNameError}</div>
                    </div>
                    <div className={styles.forminputs}>
                        <label htmlFor="lastname">Last Name</label>
                        <input className={styles.forminput} type="text" name="lastName" value={this.state.lastName} onChange={this.handleChange}/>
                        <div style={{fontSize: "14px", color: "red", padding: "10px"}}>{this.state.lastNameError}</div>
                    </div>
                    <div className={styles.forminputs}>
                        <label htmlFor="email">Email Address</label>
                        <input className={styles.forminput} type="email" name="email" value={this.state.email} onChange={this.handleChange}/>
                        <div style={{fontSize: "14px", color: "red", padding: "10px"}}>{this.state.emailError}</div>
                    </div>
                    <div className={styles.forminputsradio}>
                    <label>Gender</label>
                        <input className={styles.forminput} type="radio" name="gender" value="male" onChange={this.handleChange}/> <span>Male</span> <input className={styles.forminput} type="radio" name="gender" value="female" onChange={this.onChange}/> <span>Female</span>
                        <div style={{fontSize: "14px", color: "red", padding: "10px"}}>{this.state.genderError}</div>
                    </div>
                    <div className={styles.forminputs}>
                        <label htmlFor="nationality">Nationality</label>
                        <input className={styles.forminput} type="text" name="nationality" value={this.state.nationality} onChange={this.handleChange}/>
                        <div style={{fontSize: "14px", color: "red", padding: "10px"}}>{this.state.nationalityError}</div>
                    </div>
                    <div className={styles.forminputsradio} style={{marginBottom: "15px"}}>
                    <label>Marital Status</label>
                        <input className={styles.forminput} type="radio" name="maritalStatus" onChange={this.onChange} value={this.state.maritalStatus}/> <span>Single</span> <input className={styles.forminput} type="radio" name="maritalStatus" onChange={this.onChange} value={this.state.maritalStatus}/> <span>Married</span>
                        <div style={{fontSize: "14px", color: "red", padding: "10px"}}>{this.state.maritalStatus}</div>
                    </div>
                    <div className={styles.forminputs}>
                        <label htmlFor="language">Correspondence Language</label>
                        <input className={styles.forminput} type="text" name="language" value={this.state.language} onChange={this.handleChange}/>
                        <div style={{fontSize: "14px", color: "red", padding: "10px"}}>{this.state.languageError}</div>
                    </div>
                    <div className={styles.forminputsradio} style={{marginBottom: "15px"}}>
                        <label htmlFor="nonfamily">I Am Willing To Serve in a Non-family Duty Station</label>
                        <input className={styles.forminput} type="radio" name="nonfamily" value={this.state.nonFamily} onChange={this.handleChange}/> <span>Yes</span> <input className={styles.forminput} type="radio" name="nonfamily" id="nonfamily"/> <span>No</span>
                        <div style={{fontSize: "14px", color: "red", padding: "10px"}}>{this.state.nonFamilyError}</div>
                    </div>
                    <div className={styles.forminputsradio} style={{marginBottom: "15px"}}>
                        <label>I Am Interested In Serving as a Volunteer</label>
                        <input className={styles.forminput} type="radio" name="volunteer" value={this.state.volunteer} onChange={this.handleChange}/> <span>Yes</span> <input className={styles.forminput} type="radio" name="volunteer" value={this.state.volunteer} onChange={this.handleChange}/> <span>No</span>
                        <div style={{fontSize: "14px", color: "red", padding: "10px"}}>{this.state.volunteerError}</div>
                    </div>
                    <div className={styles.forminputsradio} style={{marginBottom: "15px"}}>
                        <label>Disbality(s)</label>
                        <input className={styles.forminput} type="radio" name="disability" value={this.state.disability} onChange={this.handleChange}/> <span>Yes</span> <input className={styles.forminput} type="radio" name="disability" value={this.state.disability} onChange={this.handleChange}/> <span>None</span>
                        <div style={{fontSize: "14px", color: "red", padding: "10px"}}>{this.state.disabilityError}</div>
                    </div>
                    <div className={styles.forminputs}>
                        <label htmlFor="mobilenumber">Mobile Number</label>
                        <input className={styles.forminput} type="tel" name="phone" value={this.state.phone} onChange={this.handleChange}/>
                        <div style={{fontSize: "14px", color: "red", padding: "10px"}}>{this.state.phoneError}</div>
                    </div>
                    <div className={styles.forminputs}>
                        <label htmlFor="currentaddress">Current Address</label>
                        <textarea id="currentaddress" name="currentAddress" value={this.state.currentAddress} onChange={this.handleChange}></textarea>
                        <div style={{fontSize: "14px", color: "red", padding: "10px"}}>{this.state.currentAddressError}</div>
                    </div>
                    <div className={styles.forminputs}>
                        <label htmlFor="permanentaddress">Permanent Address</label>
                        <textarea id="permanentaddress" name="permanentAddress" value={this.state.permanentAddress} onChange={this.handleChange}></textarea>
                        <div style={{fontSize: "14px", color: "red", padding: "10px"}}>{this.state.permanentAddressError}</div>
                    </div>
                    <div className={styles.forminputsselect}>
                        <label htmlFor="qualifications">Academic Qualifications</label>
                        <select onChange={this.handleChange} name="qualification">
                            <option value={this.state.qualification}>Bsc</option>
                            <option value={this.state.qualification}>Diploma</option>
                            <option value={this.state.qualification}>Msc</option>
                        </select>
                        <div style={{fontSize: "14px", color: "red", padding: "10px"}}>{this.state.qualification}</div>
                    </div>
                    <div className={styles.forminputsselect}>
                        <label htmlFor="skills">Computer/IT Skills</label>
                        <select onChange={this.handleChange} name="skills">
                            <option value={this.state.skills}>Poor</option>
                            <option value={this.state.skills}>Good</option>
                            <option value={this.state.skills}>Very Good</option>
                        </select>
                        <div style={{fontSize: "14px", color: "red", padding: "10px"}}>{this.state.skills}</div>
                    </div>
                    <div className={styles.forminputs}>
                        <label htmlFor="experience">Professional Experience</label>
                        <textarea name="experience" value={this.state.experience} onChange={this.handleChange}></textarea>
                        <div style={{fontSize: "14px", color: "red", padding: "10px"}}>{this.state.experienceError}</div>
                    </div>
                    <div className={styles.forminputs}>
                        <button type="submit" className={styles.formbtn}>Submit</button>
                    </div>
                </form>
                </div>
               
            </div>
        )
    }
}

export default EditForm;

import React, { useState } from "react";
import axios from "axios";
import styles from "./Editform.module.css";

const EditForm = () => {
  if (!sessionStorage.getItem("token")) {
    window.location = "/login";
  }

  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [ismarried, setIsmarried] = useState("");
  const [language, setLanguage] = useState("");
  const [nonfamily, setNonfamily] = useState("");
  const [volunteer, setVolunteer] = useState("");
  const [disability, setDisability] = useState("");
  const [phone, setPhone] = useState("");
  const [currentaddress, setCurrentaddress] = useState("");
  const [permanentaddress, setPermanentaddress] = useState("");
  const [qualification, setQualification] = useState("");
  const [itskills, setItskills] = useState("");
  const [experience, setExperience] = useState("");

  const handleChangeFirstName = (e) => setFirstName(e.target.value);
  const handleChangeLastName = (e) => setLastName(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangeGender = (e) => setGender(e.target.value);
  const handleChangeIsmarried = (e) => setIsmarried(e.target.value);
  const handleChangeLanguage = (e) => setLanguage(e.target.value);
  const handleChangeNonfamily = (e) => setNonfamily(e.target.value);
  const handleChangeVolunteer = (e) => setVolunteer(e.target.value);
  const handleChangeDisability = (e) => setDisability(e.target.value);
  const handleChangePhone = (e) => setPhone(e.target.value);
  const handleChangeCurrentaddress = (e) => setCurrentaddress(e.target.value);
  const handleChangePermanentaddress = (e) =>
    setPermanentaddress(e.target.value);
  const handleChangeQualification = (e) => setQualification(e.target.value);
  const handleChangeItskills = (e) => setItskills(e.target.value);
  const handleChangeExperience = (e) => setExperience(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(firstname);
    // console.log(lastname);
    // console.log(email);
    // console.log(gender);
    // console.log(ismarried);
    // console.log(language);
    // console.log(nonfamily);
    // console.log(volunteer);
    // console.log(disability);
    // console.log(phone);
    // console.log(currentaddress);
    // console.log(permanentaddress);
    // console.log(qualification);
    // console.log(itskills);
    // console.log(experience);

    let token = sessionStorage.getItem("token");
    token = JSON.parse(token);
    console.log(token.token);
    let myToken = token.token;

    const configuration = {
      method: "post",
      url: "https://volunteer109.herokuapp.com/api/user/profile",
      data: {
        firstname: firstname,
        lastname: lastname,
        gender: gender,
        marital_status: ismarried,
        correspondence_laguage: language,
        nonfamily_duty: nonfamily,
        serving_volunteer: volunteer,
        disability: disability,
        mobile_number: phone,
        current_address: currentaddress,
        permanent_address: permanentaddress,
        academic_qualifications: qualification,
        computer_skills: itskills,
        professional_experience: experience,
      },
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${myToken}`,
      },
    };

    axios(configuration)
      .then((result) => {
        console.log(result);
        // sessionStorage.setItem("token", JSON.stringify(result.data.data));
        // window.location = "/dashboard";
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className={styles.body}>
      <div className={styles.header}></div>
      <div className={styles.formcontainer}>
        <form onSubmit={handleSubmit}>
          <h1>Edit Information</h1>
          <div className={styles.forminputs}>
            <label htmlFor="firstname">First Name</label>
            <input
              className={styles.forminput}
              type="text"
              name="firstName"
              value={firstname}
              onChange={handleChangeFirstName}
            />
          </div>
          <div className={styles.forminputs}>
            <label htmlFor="lastname">Last Name</label>
            <input
              className={styles.forminput}
              type="text"
              name="lastName"
              value={lastname}
              onChange={handleChangeLastName}
            />
          </div>
          <div className={styles.forminputs}>
            <label htmlFor="email">Email Address</label>
            <input
              className={styles.forminput}
              type="email"
              name="email"
              value={email}
              onChange={handleChangeEmail}
            />
          </div>
          <div className={styles.forminputsradio} onChange={handleChangeGender}>
            <label>Gender</label>
            <input
              className={styles.forminput}
              type="radio"
              value="Male"
              name="gender"
            />{" "}
            <span>Male</span>{" "}
            <input
              className={styles.forminput}
              type="radio"
              value="Female"
              name="gender"
            />{" "}
            <span>Female</span>
          </div>
          <div
            className={styles.forminputsradio}
            style={{ marginBottom: "15px" }}
            onChange={handleChangeIsmarried}
          >
            <label>Marital Status</label>
            <input
              className={styles.forminput}
              type="radio"
              name="ismarried"
              value="Single"
            />{" "}
            <span>Single</span>{" "}
            <input
              className={styles.forminput}
              type="radio"
              name="ismarried"
              value="Married"
            />{" "}
            <span>Married</span>
          </div>
          <div className={styles.forminputs}>
            <label htmlFor="language">Correspondence Language</label>
            <input
              className={styles.forminput}
              type="text"
              value={language}
              onChange={handleChangeLanguage}
            />
          </div>
          <div
            className={styles.forminputsradio}
            style={{ marginBottom: "15px" }}
            onChange={handleChangeNonfamily}
          >
            <label htmlFor="nonfamily">
              I Am Willing To Serve in a Non-family Duty Station
            </label>
            <input
              className={styles.forminput}
              type="radio"
              name="nonfamily"
              value="Yes"
            />{" "}
            <span>Yes</span>{" "}
            <input
              className={styles.forminput}
              type="radio"
              name="nonfamily"
              value="No"
            />{" "}
            <span>No</span>
          </div>
          <div
            className={styles.forminputsradio}
            style={{ marginBottom: "15px" }}
            onChange={handleChangeVolunteer}
          >
            <label>I Am Interested In Serving as a Volunteer</label>
            <input
              className={styles.forminput}
              type="radio"
              name="volunteer"
              value="Yes"
            />{" "}
            <span>Yes</span>{" "}
            <input
              className={styles.forminput}
              type="radio"
              name="volunteer"
              value="No"
            />{" "}
            <span>No</span>
          </div>
          <div
            className={styles.forminputsradio}
            style={{ marginBottom: "15px" }}
            onChange={handleChangeDisability}
          >
            <label>Disbality(s)</label>
            <input
              className={styles.forminput}
              type="radio"
              name="disability"
              value="Yes"
            />{" "}
            <span>Yes</span>{" "}
            <input
              className={styles.forminput}
              type="radio"
              name="disability"
              value="None"
            />{" "}
            <span>None</span>
          </div>
          <div className={styles.forminputs}>
            <label>Mobile Number</label>
            <input
              className={styles.forminput}
              type="tel"
              name="phone"
              value={phone}
              onChange={handleChangePhone}
            />
          </div>
          <div className={styles.forminputs}>
            <label>Current Address</label>
            <textarea
              name="currentaddress"
              value={currentaddress}
              onChange={handleChangeCurrentaddress}
            ></textarea>
          </div>
          <div className={styles.forminputs}>
            <label>Permanent Address</label>
            <textarea
              name="permanentaddress"
              value={permanentaddress}
              onChange={handleChangePermanentaddress}
            ></textarea>
          </div>
          <div className={styles.forminputsselect}>
            <label>Academic Qualifications</label>
            <select
              onChange={handleChangeQualification}
              name="qualification"
              value={qualification}
            >
              <option value="Bsc">Bsc</option>
              <option value="Diploma">Diploma</option>
              <option value="Msc">Msc</option>
            </select>
          </div>
          <div className={styles.forminputsselect}>
            <label>Computer/IT Skills</label>
            <select onChange={handleChangeItskills} value={itskills}>
              <option value="Poor">Poor</option>
              <option value="Good">Good</option>
              <option value="Very Good">Very Good</option>
            </select>
          </div>
          <div className={styles.forminputs}>
            <label>Professional Experience</label>
            <textarea
              value={experience}
              onChange={handleChangeExperience}
            ></textarea>
          </div>
          <div className={styles.forminputs}>
            <button type="submit" className={styles.formbtn}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditForm;

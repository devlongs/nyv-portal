import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardContainer from "./dashboardContainer/DashboardContainer";
import DashboardNavbar from "./dashboardNavbar/DashboardNavbar";
import Footer from "../components/footer/Footer";

function Dashboard(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");


  if (!sessionStorage.getItem("token")) {
    window.location = "/login";
  }

  
  useEffect(() => {
    let token = sessionStorage.getItem("token");
    token = JSON.parse(token);
    console.log(token.token);
    let myToken = token.token;
    // console.log({e});
    // window.location = '/login';

    axios
      .get("https://volunteer109.herokuapp.com/api/me", {
        headers: {
          Authorization: `Bearer ${myToken}`,
          accept: "application/json",
        },
      })
      .then((res) => {
        setName(res.data.name);
        setEmail(res.data.email);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const dashboardfooterstyle = {
    position: "relative",
    bottom: 0,
  };


  return (
    <>
      <DashboardNavbar name={name} />
      <DashboardContainer email={email} />
      <Footer dashboardfooterstyle={dashboardfooterstyle} />
    </>
  );
}

export default Dashboard;

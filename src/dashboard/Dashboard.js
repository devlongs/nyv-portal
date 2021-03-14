import React, { useEffect, useState } from "react";
import axios from "axios";
import DashboardContainer from "./dashboardContainer/DashboardContainer";
import DashboardNavbar from "./dashboardNavbar/DashboardNavbar";
import Footer from "../components/footer/Footer";
import Loading from "../components/loading/Loading";

function Dashboard(props) {
  const [firstname, setFirstname] = useState("");
  const [isLoading, setLoading] = useState(true);

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
      .get("https://volunteer109.herokuapp.com/api/user/profile", {
        headers: {
          Authorization: `Bearer ${myToken}`,
          accept: "application/json",
        },
      })
      .then((res) => {
        setFirstname(res.data.firstname);
      })
      .then(() => setLoading(false))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const dashboardfooterstyle = {
    position: "relative",
    bottom: 0,
  };

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <DashboardNavbar name={firstname} />
      <DashboardContainer />
      <Footer dashboardfooterstyle={dashboardfooterstyle} />
    </>
  );
}

export default Dashboard;

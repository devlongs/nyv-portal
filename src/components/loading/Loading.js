import React from "react";
import { Ripple } from "react-awesome-spinners";

const Loading = () => (
  <div
    style={{
      height: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
    }}
  >
    <Ripple color="green" />
  </div>
);

export default Loading;

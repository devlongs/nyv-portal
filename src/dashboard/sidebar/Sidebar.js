import React from "react";
import { Link } from "react-router-dom";
import { BsPersonFill } from "react-icons/bs";
import { AiFillProfile } from "react-icons/ai";
import { BsFillBookmarksFill } from "react-icons/bs";
import { BsWrench } from "react-icons/bs";
import { BsBellFill } from "react-icons/bs";
import { BsBoxArrowUpRight } from "react-icons/bs";

import styles from "./Sidebar.module.css";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <ul>
        <li>
          <a href="#">
            <BsPersonFill /> My Profile
          </a>
        </li>
        <li>
          <Link to="/editform">
            <AiFillProfile /> Create Profile
          </Link>
        </li>
        <li>
          <a href="#">
            <BsBellFill /> Notifications
          </a>
        </li>
        <li>
          <Link to="/login" onClick={() => console.log("logout!")}>
            Log Out
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

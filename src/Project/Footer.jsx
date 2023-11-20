import React, { startTransition } from "react";
import AppBar from "@mui/material/AppBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faSnapchat,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

//import Toolbar from "@mui/material/Toolbar";
const Footer = () => {
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#4B0082" }}>
        <p style={{ backgroundColor: "#4B0082" }}>
          <h4>
            Email:freelancefinder099@gmail.com &emsp; &emsp;Contact: 9867895748
          </h4>
          <h5>
            Help and Support &emsp;&emsp;Copy Rights @2023 Freelancer Technology
          </h5>
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon
            icon={faFacebook}
            style={{ fontSize: "30px", color: "#1877f2", marginRight: "10px" }}
          />
          <FontAwesomeIcon
            icon={faSnapchat}
            style={{ fontSize: "30px", color: "#fffc00", marginRight: "10px" }}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ fontSize: "30px", color: "#bc2a8d" }}
          />
        </div>
      </AppBar>
    </div>
  );
};

export default Footer;

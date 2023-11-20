import React from "react";
import { Link } from "react-router-dom";
//import SideImageComponent from "./SideImageComponent";
//import { Typography } from "@mui/material";
const About = () => {
  return (
    <div>
      <nav>
        <Link to="/">
          <b>Back to HomePage</b>
        </Link>
      </nav>
      <div
        style={{
          //display: "flex",
          backgroundImage:
            'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSUepdozuI2CZ98vXt_sG9Z5P8NUFe2YbJNQ&usqp=CAU")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          color: "white",
          flexDirection: "row",
        }}
      >
        <center>
          <h4 style={{ color: "white" }}>Hire your Freelance Designers</h4>
          &emsp; &emsp; &emsp;{" "}
          <h5 style={{ color: " white " }}>
            Find the best freelancers for your next Project
          </h5>
        </center>
        <br></br>
      </div>
      <h3>
        <b> Payment Solutions</b>
      </h3>
      Streamline your spending with one team account and payment method to speed
      up budget approvals and project kickoffs.<br></br>
      <b>HOW IT WORKS</b>
      <br></br>
      &emsp;&emsp;Appoint an organizational Billing Manager<br></br>
      &emsp;&emsp;Subscribe to freelancers and automate purchases<br></br>
      &emsp;&emsp;Speed up workflows with one payment method:<br></br>
      &emsp;&emsp;Pay per Order: Credit Card or Debit<br></br>
      &emsp;&emsp;Team Balance: Wire, ACH, Credit Card (for US only)<br></br>
      &emsp;&emsp;Net Terms: Credit Card, Check, Wire, ACH<br></br>
      <center>
        {" "}
        <img
          style={{ width: "600px", height: "400px" }}
          src="https://png.pngtree.com/thumb_back/fw800/background/20221129/pngtree-a-corporate-professional-delivers-a-presentation-on-a-fresh-project-photo-image_42450432.jpg"
          alt=""
        ></img>
      </center>
      <h3>
        <b>Talent Lineup</b>
      </h3>
      Build a shared pool of freelancers who have earned your team’s trust or
      interest for quicker connections and ongoing work.
      <br></br>
      <b> HOW IT WORKS</b>
      <br></br>
      &emsp;&emsp;Save your favorite freelancers for every need<br></br>
      &emsp;&emsp;Give the whole team a single point of access<br></br>
      &emsp;&emsp;Instantly contact and manage talent<br></br>
      <p>
        We strive to be the premier platform where professionals go to connect,
        collaborate, and get work done. We believe that the best work is done in
        a flexible and secure environment. With transparency comes trust, and
        with a community that's built on meritocracy, people are eager to set
        aside differences in geography, politics and religion to share and
        profit from economic opportunities.
      </p>
      <img
        src="https://res.cloudinary.com/gurucom/image/upload/w_500,f_auto/static/homepage/about-us_2x_zsqk7c.jpg"
        alt=""
      ></img>
      <br></br>
      We believe in maximizing value and minimizing costs for all of our members
      so that you have a rewarding experience using the website. Our
      cost-effective platform provides all the tools and features you need to
      get work done successfully, while charging you the lowest fees in the
      freelance marketplace industry.
    </div>
  );
};

export default About;

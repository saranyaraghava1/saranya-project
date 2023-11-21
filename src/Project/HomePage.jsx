// import { Backdrop } from '@mui/material';
import "./Home.css";
import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
// import ReactPlayer from 'react-player';
const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="HomePage">
      <br></br>
      <div>
        <center>
          <h1 style={{ color: "white" }}>Welcome to Freelance finder</h1>
          <h2 style={{ color: "white" }}>
            Hire the best freelancers for any job, online.
          </h2>
        </center>
        <h1 className="front">
          How Can freelancers<br></br>
          Hello your Buisness?
        </h1>
        <p className="front-down">
          The Possibilities are endless.We have expert
        </p>
        <p className="front-down">
          {" "}
          freelancers who work in every technical,professional,
        </p>
        <p className="front-down">and creative field imaginable</p>
      </div>
      <div>
        <br></br>
        &emsp;&emsp; &emsp;
        <Button
          style={{ backgroundColor: "deeppink" }}
          className="find-freelance-button "
          onClick={() => navigate("Findfreelancer")}
          variant="contained"
          type="submit"
        >
          Find Freelancers
        </Button>
      </div>
      <div className="paragraph">
        <div>
          <p className="bottom-padding"></p>
        </div>

        <h3>Need something done?</h3>
        <p>
          Post a job It’s free and easy to post a job. Simply fill in a title,
          description and budget and competitive bids come within minutes.
        </p>
      </div>

      <div className="paragraph">
        <p>
          <h3>Choose freelancers</h3>
          No job is too big or too small. We've got freelancers for jobs of any
          size or budget, across 1800+ skills. No job is too complex. We can get
          it done!
        </p>
      </div>

      <div className="paragraph">
        <p>
          <h3 className="topic">Pay safely</h3>
          Only pay for work when it has been completed and you're 100% satisfied
          with the quality using our milestone payment system.
        </p>
      </div>

      <div className="paragraph">
        <p>
          <h3 className="topic">We’re here to help</h3>
          Our talented team of recruiters can help you find the best freelancer
          for the job and our technical co-pilots can even manage the project
          for you.
        </p>
      </div>

      <div className="paragraph">
        <p>
          <h3 style={{ textDecoration: "underline" }} className="topic">
            What's great about it?
          </h3>
        </p>
      </div>

      <div className="paragraph">
        <p>
          <h3 className="topic">Browse portfolios</h3>
          Find professionals you can trust by browsing their samples of previous
          work and reading their profile reviews.
        </p>
      </div>

      <div className="paragraph">
        <p>
          <h3 className="topic">Fast bids</h3>
          Receive obligation free quotes from our talented freelancers fast. 80%
          of projects get bid on within 60 seconds.
        </p>
      </div>

      <div className="paragraph">
        <p>
          <h3 className="topic">Quality work</h3>
          Freelancer.com has by far the largest pool of quality freelancers
          globally- over 70 million to choose from{" "}
        </p>
        <br></br>
      </div>
    </div>
  );
};

export default HomePage;
//     <>
//     <div>
//       {/* ReactPlayer as background video */}
//       {/* <ReactPlayer
//         url="https://youtu.be/9uRvv6CA6sQ?si=MVewNaua5OOEaCEj"
//         playing
//         loop
//         muted
//         width="100%"
//         height="100%"
//         style={{ position: "absolute", top: 0, left: 0 }}
//       /> */}
//       {/*<video autoPlay loop muted id="vedo">
//         <source
//           src="https://youtu.be/9uRvv6CA6sQ?si=MVewNaua5OOEaCEj "
//           type="video/mp4"
//         ></source>
//     </video>*/}

//       <div className="image">

//         <center>
//           <img
//             src="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/03/best-freelance-websites-1.webp"
//             alt=""
//           ></img>
//         </center>
//         <br></br>
//       </div>
//       <div className="paragraph">
//         <center>
//           <p>
//             Welcome to [Your Freelance Finder Platform] - Where Talent Meets
//             Opportunity!
//           </p>
//           <br></br>
//           <p>
//             Embark on a journey of limitless possibilities with [Your Freelance
//             Finder Platform], your gateway to a world of unparalleled talent and
//             opportunity. Unleash the power of collaboration as you navigate
//             through a curated network of skilled freelancers and visionary
//             clients. Our platform is more than just a marketplace; it's a
//             vibrant community where innovation thrives, and dreams are turned
//             into reality.
//           </p>
//           <br></br>
//           <p>
//             <center>
//               <img
//                 style={{ width: "900px", height: "500px" }}
//                 src="https://media.licdn.com/dms/image/D5612AQF-kIuqrCOJKw/article-cover_image-shrink_720_1280/0/1679072915989?e=2147483647&v=beta&t=h0etWTxeXusU8LdEMHRTf6_7_M1pANqrlJjdYIWiU5U"
//                 alt=""
//               ></img>
//             </center>
//           </p>
//          <p>
//             Discover a seamless and intuitive interface designed to simplify
//             your freelance experience. Whether you're a talented professional
//             searching for exciting projects or a business seeking top-tier
//             expertise, [Your Freelance Finder Platform] is your compass in the
//             ever-expanding landscape of freelance opportunities. With a diverse
//             pool of freelancers spanning across industries, finding the perfect
//             match for your project has never been this effortless.
//           </p>
//           <br></br>
//           <p>
//             At [Your Freelance Finder Platform], we prioritize transparency,
//             security, and excellence. Our robust screening process ensures that
//             only the best talents make it to our platform, giving you the
//             confidence to build your projects with the utmost skill and
//             proficiency. From graphic designers and writers to developers and
//             marketing experts, our talent pool is as diverse as your project
//             demands.
//           </p>

//         </center>
//       </div>
//     </div>
//     <nav>
//         <Link to="/home">HomePage</Link>
//     </nav>
//     </>

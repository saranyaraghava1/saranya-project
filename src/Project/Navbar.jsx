//NAVBAR.JSX//
// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import { Button } from "@mui/material";
// //import LoginPage from "./LoginPage";
// //import SignUp from "./SignUp";
// //import { Link } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
// function Navbar() {
//   const navigate = useNavigate();
//   return (
//     <div>
//       <AppBar position="static" sx={{ backgroundColor: "#4B0082" }}>
//         <Toolbar sx={{ justifyContent: "flex-end" }}>
//         <h2>SkillSynC💤</h2>
//           <Button
//             onClick={() => navigate("/")}
//             variant="text"
//             type="submit"
//             style={{ color: "white" }}
//           >
//             Home
//           </Button>
//           <Button
//             onClick={() => navigate("freelancing")}
//             variant="text"
//             type="submit"
//             style={{ color: "white" }}
//           >
//             Freelancing
//           </Button>
//           &emsp;
//           <Button
//             onClick={() => navigate("foryou")}
//             variant="text"
//             type="submit"
//             style={{ color: "white" }}
//           >
//             For You
//           </Button>
//           &emsp;
//           <Button
//             onClick={() => navigate("about")}
//             variant="text"
//             type="submit"
//             style={{ color: "white", marginRight: "700px" }}
//           >
//             About
//           </Button>
//           &emsp;
//           <Button
//             onClick={() => navigate("LoginPage")}
//             variant="contained"
//             color="secondary"
//             type="submit"
//           >
//             Login
//           </Button>
//           &emsp;
//           <Button
//             onClick={() => navigate("SignUp")}
//             variant="contained"
//             color="secondary"
//             type="submit"
//           >
//             SignUp
//           </Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }
// export default Navbar;

// components/NavBar.js
/*import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
*/

// import React from "react";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import { Button } from "@mui/material";
// // import LoginPage from "./LoginPage";
// //import SignUp from "./SignUp";
// //import { Link } from "react-router-dom";

// import { useNavigate } from "react-router-dom";
// function Navbar({navusername}) {
//   const navigate = useNavigate();
//   // const LogIn= LoginPage();
//   return (

//     <>
//         {navusername? (
//       <AppBar position="static" sx={{ backgroundColor: "darkblue" }}>
//         <Toolbar sx={{ justifyContent: "flex-end" }}>
//           <h2 style={{ fontStyle: "revert-layer" }}>SkillSynC💤</h2>&emsp;
//           <Button
//             onClick={() => navigate("/")}
//             variant="text"
//             type="submit"
//             style={{ color: "white" }}
//           >
//             Home
//           </Button>
//           <Button
//             onClick={() => navigate("freelancing")}
//             variant="text"
//             type="submit"
//             style={{ color: "white" }}
//           >
//             Freelancing
//           </Button>
//           &emsp;
//           <Button
//             onClick={() => navigate("foryou")}
//             variant="text"
//             type="submit"
//             style={{ color: "white" }}
//             >
//             For You
//           </Button>
//           &emsp;
//           <Button
//             onClick={() => navigate("about")}
//             variant="text"
//             type="submit"
//             style={{ color: "white", marginRight: "740px" }}
//           >
//             About
//           </Button>
//           &emsp;

//         </Toolbar>

//       </AppBar>)
//          :
//         (
//         <AppBar position="static" sx={{ backgroundColor: "darkblue" }}>
//         <Toolbar sx={{ justifyContent: "flex-end" }}>
//           <h2 style={{ fontStyle: "revert-layer" }}>SkillSynC💤</h2>&emsp;
//           <Button
//             onClick={() => navigate("/")}
//             variant="text"
//             type="submit"
//             style={{ color: "white" }}
//           >
//             Home
//           </Button>
//           <Button
//             onClick={() => navigate("freelancing")}
//             variant="text"
//             type="submit"
//             style={{ color: "white" }}
//           >
//             Freelancing
//           </Button>
//           &emsp;
//           <Button
//             onClick={() => navigate("foryou")}
//             variant="text"
//             type="submit"
//             style={{ color: "white" }}
//             >
//             For You
//           </Button>
//           &emsp;
//           <Button
//             onClick={() => navigate("about")}
//             variant="text"
//             type="submit"
//             style={{ color: "white", marginRight: "740px" }}
//           >
//             About
//           </Button>
//           &emsp;

//           <Button
//             onClick={() => navigate("LoginPage")}
//             variant="contained"
//             style={{ backgroundColor: "#6B3FA0" }}
//             type="submit"
//           >
//             Login
//           </Button>
//           &emsp;
//           <Button
//             onClick={() => navigate("SignUp")}
//             variant="contained"
//             type="submit"
//             style={{ backgroundColor: "#6B3FA0" }}
//           >
//             SignUp
//           </Button>
//         </Toolbar>

//       </AppBar>

//        ) }

//     </>

//   );
// };
// export default Navbar;

/*
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Navbar({ navusername }) {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    console.log("Logout");
  };
  return (
    <AppBar position="static" sx={{ backgroundColor: "darkblue" }}>
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <h2 style={{ fontStyle: "revert-layer" }}>SkillSynC💤</h2>&emsp;
        <Button
          onClick={() => navigate("/")}
          variant="text"
          type="submit"
          style={{ color: "white" }}
        >
          Home
        </Button>
        <Button
          onClick={() => navigate("freelancing")}
          variant="text"
          type="submit"
          style={{ color: "white" }}
        >
          Freelancing
        </Button>
        &emsp;
        <Button
          onClick={() => navigate("foryou")}
          variant="text"
          type="submit"
          style={{ color: "white" }}
        >
          For You
        </Button>
        &emsp;
        <Button
          onClick={() => navigate("about")}
          variant="text"
          type="submit"
          style={{ color: "white", marginRight: "740px" }}
        >
          About
        </Button>
        &emsp;

        {navusername ? (
          <>
            <Button
              onClick={handleLogout}
              variant="contained"
              style={{ backgroundColor: "#6B3FA0" }}
              type="submit"
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => navigate("LoginPage")}
              variant="contained"
              style={{ backgroundColor: "#6B3FA0" }}
              type="submit"
            >
              Login
            </Button>
            &emsp;
            <Button
              onClick={() => navigate("SignUp")}
              variant="contained"
              type="submit"
              style={{ backgroundColor: "#6B3FA0" }}
            >
              SignUp
            </Button>
           
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;*/
/*-----
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext"; // Import useAuth

function Navbar() {
  const navigate = useNavigate();
  const { authState, logout } = useAuth();
  const { isAuthenticated, username } = authState;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "darkblue" }}>
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <h2 style={{ fontStyle: "revert-layer" }}>SkillSynC💤</h2>&emsp;
        <Button onClick={() => navigate("/")} variant="text" type="submit" style={{ color: "white" }}>
          Home
        </Button>
        <Button
          onClick={() => navigate("freelancing")}
          variant="text"
          type="submit"
          style={{ color: "white" }}
        >
          Freelancing
        </Button>
        &emsp;
        <Button onClick={() => navigate("foryou")} variant="text" type="submit" style={{ color: "white" }}>
          For You
        </Button>
        &emsp;
        <Button
          onClick={() => navigate("about")}
          variant="text"
          type="submit"
          style={{ color: "white", marginRight: "740px" }}
        >
          About
        </Button>
        &emsp;

        {isAuthenticated ? (
          <>
            <p style={{ color: "white", marginRight: "10px" }}>Welcome, {username}!</p>
            <Button
              onClick={handleLogout}
              variant="contained"
              style={{ backgroundColor: "#6B3FA0" }}
              type="submit"
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => navigate("LoginPage")}
              variant="contained"
              style={{ backgroundColor: "#6B3FA0" }}
              type="submit"
            >
              Login
            </Button>
            &emsp;
            <Button
              onClick={() => navigate("SignUp")}
              variant="contained"
              type="submit"
              style={{ backgroundColor: "#6B3FA0" }}
            >
              SignUp
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;*/

import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Navbar() {
  const navigate = useNavigate();
  const { authState, logout } = useAuth();
  const { isAuthenticated, username } = authState;

  console.log("Username in Navbar:", username);

  const handleLogout = () => {
    logout();

    navigate("/");
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "darkblue" }}>
      <Toolbar sx={{ justifyContent: "flex-end" }}>
        <h2 style={{ fontStyle: "revert-layer" }}>SkillSynC💤</h2>&emsp;
        <Button
          onClick={() => navigate("/")}
          variant="text"
          type="submit"
          style={{ color: "white" }}
        >
          Home
        </Button>
        <Button
          onClick={() => navigate("freelancing")}
          variant="text"
          type="submit"
          style={{ color: "white" }}
        >
          Freelancing
        </Button>
        &emsp;
        <Button
          onClick={() => navigate("foryou")}
          variant="text"
          type="submit"
          style={{ color: "white" }}
        >
          For You
        </Button>
        &emsp;
        <Button
          onClick={() => navigate("about")}
          variant="text"
          type="submit"
          style={{ color: "white", marginRight: "450px" }}
        >
          About
        </Button>
        &emsp;
        {isAuthenticated ? (
          <>
            <p style={{ color: "white", marginRight: "10px" }}>
              Welcome,{username}!
            </p>
            <Button
              onClick={handleLogout}
              variant="contained"
              style={{ backgroundColor: "#6B3FA0" }}
              type="submit"
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              onClick={() => navigate("LoginPage")}
              variant="contained"
              style={{ backgroundColor: "#6B3FA0" }}
              type="submit"
            >
              Login
            </Button>
            &emsp;
            <Button
              onClick={() => navigate("SignUp")}
              variant="contained"
              type="submit"
              style={{ backgroundColor: "#6B3FA0" }}
            >
              SignUp
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

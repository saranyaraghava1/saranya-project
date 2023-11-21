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
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Button } from "@mui/material";
//import LoginPage from "./LoginPage";
//import SignUp from "./SignUp";
//import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: "#4B0082" }}>
        <Toolbar sx={{ justifyContent: "flex-end" }}>
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
            style={{ color: "white", marginRight: "550px" }}
          >
            About
          </Button>
          &emsp;
          <Button
            onClick={() => navigate("LoginPage")}
            variant="contained"
            color="secondary"
            type="submit"
          >
            Login
          </Button>
          &emsp;
          <Button
            onClick={() => navigate("SignUp")}
            variant="contained"
            color="secondary"
            type="submit"
          >
            SignUp
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Navbar;

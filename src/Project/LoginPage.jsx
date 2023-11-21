import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //const [showForm, setShowForm] = useState(false);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLRvHYO3WOyGtGknjW560G5YEOrcWCYU0_8A&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLRvHYO3WOyGtGknjW560G5YEOrcWCYU0_8A&usqp=CAU")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <br></br>
      <Paper
        elevation={3}
        style={{ padding: 60, maxWidth: 400, margin: "auto", marginTop: 50 }}
      >
        <div>
          <center>
            <Typography component="h3" variant="h3">
              Welcome
            </Typography>
            <p>Please Login to continue</p>
          </center>
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="password"
              label="Password"
              name="password"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />

            <div>
              <Button
                onClick={() => navigate("/")}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Login
              </Button>
            </div>
          </form>
          <center>
            <p>
              Don't have an account ? Please sign up to continue
              <nav>
                <Link to="/SignUp">SignUp</Link>
              </nav>
            </p>
          </center>
        </div>
      </Paper>
      <div>
        <br></br>
      </div>
    </div>
  );
};
export default LoginPage;

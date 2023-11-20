import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  //const [showForm, setShowForm] = useState(false);
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your authentication logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("data:image/jpeg;base64,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")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Paper
        elevation={3}
        style={{ padding: 60, maxWidth: 400, margin: "auto", marginTop: 50 }}
      >
        <div>
          <center>
            <Typography component="h3" variant="h3">
              Welcome
            </Typography>
            <p>Please sign up to continue</p>
          </center>
          <form onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              type="text"
              value={firstName}
              onChange={handleFirstNameChange}
              required
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              type="text"
              value={lastName}
              onChange={handleLastNameChange}
              required
            />
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

            <div
              style={{
                marginTop: 20,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Button
                onClick={() => navigate("/")}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Sign Up
              </Button>
            </div>
          </form>
          <center>
            <p>
              Already existing user ? Please login to continue
              <nav>
                <Link to="/Loginpage">Login</Link>
              </nav>
            </p>
          </center>
        </div>
      </Paper>
    </div>
  );
};
export default SignIn;

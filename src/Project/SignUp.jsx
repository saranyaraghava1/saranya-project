//SIGNUP.JSX//// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { TextField, Button, Typography } from "@mui/material";
// import Paper from "@mui/material/Paper";
// import { Link } from "react-router-dom";
// const SignIn = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   //const [showForm, setShowForm] = useState(false);
//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };
//   const handleFirstNameChange = (e) => {
//     setFirstName(e.target.value);
//   };
//   const handleLastNameChange = (e) => {
//     setLastName(e.target.value);
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your authentication logic here
//     console.log("Email:", email);
//     console.log("Password:", password);
//     console.log("First Name:", firstName);
//     console.log("Last Name:", lastName);
//   };

//   return (
//     <div
//       style={{
//         backgroundImage:'url("https://images.unsplash.com/photo-1462823985959-022de68638a2?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//       }}
//     >
//       <br></br>
//       <Paper
//         elevation={3}
//         style={{ padding: 60, maxWidth: 400, margin: "auto", marginTop: 50 }}
//       >
//         <div>
//           <center>
//             <Typography component="h3" variant="h3" >
//               Welcome
//             </Typography>
//             <p>Please sign up to continue</p>
//           </center>
//           <form onSubmit={handleSubmit}>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               id="firstName"
//               label="First Name"
//               name="firstName"
//               type="text"
//               value={firstName}
//               onChange={handleFirstNameChange}
//               inputRef={signIn.nameRef}
//               required

//             />

//             <TextField
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               type="email"
//               value={email}
//               onChange={handleEmailChange}
//                inputRef={signIn.mailRef}
//               required
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               id="password"
//               label="Password"
//               name="password"
//               type="password"
//               value={password}
//               onChange={handlePasswordChange}
//               inputRef={signIn.pwRef}
//               required
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               id="confirm-password"
//               label="onfirm-Password"
//               name="password"
//               type="password"
//               value={password}
//               onChange={handlePasswordChange}
//               inputRef={signIn.pwRef}
//               required
//             />

//             <div
//               style={{
//                 marginTop: 20,
//                 display: "flex",
//                 justifyContent: "space-between",
//               }}
//             >
//               <Button
//                 onClick={() => navigate("/")}
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 type="submit"
//               >
//                 Sign Up
//               </Button>
//             </div>
//           </form>
//           <center>
//             <p>
//               Already existing user ? Please login to continue
//               <nav>
//                 <Link to="/Loginpage">Login</Link>
//               </nav>
//             </p>
//           </center>
//         </div>
//       </Paper>
//       <div><br></br></div>
//     </div>
//   );
// };
// export default SignIn;

import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";
import useSignup from "./useSignup";

const SignUp = () => {
  const signIn = useSignup();

  return (
    <div>
      <Paper
        style={{
          backgroundImage:
            'url("https://images.pexels.com/photos/2693529/pexels-photo-2693529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
          backgroundSize: "cover",
        }}
      >
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "95vh",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              height: "500px",
              width: "480px",
            }}
          >
            <br></br>
            <center>
              <Typography component="h3" variant="h3">
                Welcome
              </Typography>
              <p>Please sign up to continue</p>
            </center>
            <br></br>
            <center>
              <Box>
                <br></br>
                <TextField
                  label="*userName"
                  size="small"
                  style={{ width: "350px" }}
                  inputRef={signIn.nameRef}
                />
              </Box>
              <Box>
                <br></br>
                <TextField
                  label="*Email"
                  size="small"
                  style={{ width: "350px" }}
                  inputRef={signIn.mailRef}
                />
              </Box>
              <Box>
                <br></br>
                <TextField
                  label="* Password"
                  size="small"
                  style={{ width: "350px" }}
                  type="password"
                  inputRef={signIn.pwRef}
                />
              </Box>
              <Box>
                <br></br>
                <TextField
                  label="*Confirm Password"
                  size="small"
                  style={{ width: "350px" }}
                  type="password"
                  inputRef={signIn.cpwRef}
                />
              </Box>
              <br></br>
              <Button
                variant="contained"
                style={{ width: "350px", marginTop: "12px" }}
                onClick={signIn.addNewUser}
              >
                Sign up
              </Button>
              <br></br>
              {signIn.error && (
                <Typography color="error" style={{ marginTop: "8px" }}>
                  {signIn.error}
                </Typography>
              )}
            </center>
          </div>
        </Container>
      </Paper>
    </div>
  );
};

export default SignUp;

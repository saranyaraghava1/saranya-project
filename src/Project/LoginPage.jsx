// import React, { useState } from "react";
// import { TextField, Button, Typography } from "@mui/material";
// import Paper from "@mui/material/Paper";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   //const [showForm, setShowForm] = useState(false);
//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your authentication logic here
//     console.log("Email:", email);
//     console.log("Password:", password);
//   };

//   return (
//     <div
//       style={{
//         backgroundImage:
//           'url("https://media.istockphoto.com/id/864471218/photo/purple-and-pink-sunset-light-on-the-island.jpg?s=612x612&w=0&k=20&c=m4eU-kmVQ7_MziSJhOUCGBggEtW26lCtOBN-qWWq8Pg=")',
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
//             <Typography component="h3" variant="h3">
//               Welcome
//             </Typography>
//             <p>Please Login to continue</p>
//           </center>
//           <form onSubmit={handleSubmit}>
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
//               required
//             />

//             <div>
//               <Button
//                 onClick={() => navigate("/")}
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 type="submit"
//               >
//                 Login
//               </Button>
//             </div>
//           </form>
//           <center>
//             <p>
//               Don't have an account ? Please sign up to continue
//               <nav>
//                 <Link to="/SignUp">SignUp</Link>
//               </nav>
//             </p>
//           </center>
//         </div>
//       </Paper>
//       <div><br></br></div>
//     </div>
//   );
// };
// export default LoginPage;

// import React, { useState } from "react";
// import { TextField, Button, Typography } from "@mui/material";
// import Paper from "@mui/material/Paper";
// import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import axios from "axios"; // Import axios

// const LoginPage = ({setNavusername}) => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navusername="";

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };
//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const usernameChange = (e) => {
//     setNavusername(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Check if the user exists by making a request to the server
//       const response = await axios.get(http://localhost:3000/users?email=${encodeURIComponent(email)});

//       const user = response.data[0];

//       if (user && user.password === password) {
//         console.log('Login successful:', user);
//         // Navigate to the home page or wherever you want
//         setNavusername(user.username);

//         navigate("/");
//       } else {
//         console.error('Invalid login credentials');
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//     }
//   };

//   return (
//     <div
//       style={{
//         backgroundImage:
//           'url("https://media.istockphoto.com/id/864471218/photo/purple-and-pink-sunset-light-on-the-island.jpg?s=612x612&w=0&k=20&c=m4eU-kmVQ7_MziSJhOUCGBggEtW26lCtOBN-qWWq8Pg=")',
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
//             <Typography component="h3" variant="h3">
//               Welcome
//             </Typography>
//             <p>Please Login to continue</p>
//           </center>
//           <form onSubmit={handleSubmit}>
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
//               required
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               id="username"
//               label="username"
//               name="username"
//               type="name"
//               value={navusername}
//               onChange={usernameChange}
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
//               required
//             />

//             <div>
//               <Button
//                 fullWidth
//                 variant="contained"
//                 color="primary"
//                 type="submit"
//               >
//                 Login
//               </Button>
//             </div>
//           </form>
//           <center>
//             <p>
//               Don't have an account? Please sign up to continue
//               <nav>
//                 <Link to="/SignUp">SignUp</Link>
//               </nav>
//             </p>
//           </center>
//         </div>
//       </Paper>
//       <div><br></br></div>
//     </div>
//   );
// };

// export default LoginPage;

/*------
import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios"; 

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [navusername, setNavUsername] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const usernameChange = (e) => {
    setNavUsername(e.target.value); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        http://localhost:3000/users?email=${encodeURIComponent(email)}
      );

      const user = response.data[0];

      if (user && user.password === password) {
        console.log("Login successful:", user);
        setNavUsername(user.username);

        navigate("/");
      } else {
        console.error("Invalid login credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://media.istockphoto.com/id/864471218/photo/purple-and-pink-sunset-light-on-the-island.jpg?s=612x612&w=0&k=20&c=m4eU-kmVQ7_MziSJhOUCGBggEtW26lCtOBN-qWWq8Pg=")',
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
              id="username"
              label="username"
              name="username"
              type="name"
              value={navusername}
              onChange={usernameChange}
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
              Don't have an account? Please sign up to continue
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

export default LoginPage;*/
/*
import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./AuthContext"; // Import useAuth

const LoginPage = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth(); // Access setAuth from useAuth
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        http://localhost:3000/users?email=${encodeURIComponent(email)}
      );

      const user = response.data[0];

      if (user && user.password === password) {
        console.log("Login successful:", user);

        // Call setAuth to update authentication state
        setAuth(user.username);

        // Navigate to the home page or wherever you want
        navigate("/");
      } else {
        console.error("Invalid login credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://media.istockphoto.com/id/864471218/photo/purple-and-pink-sunset-light-on-the-island.jpg?s=612x612&w=0&k=20&c=m4eU-kmVQ7_MziSJhOUCGBggEtW26lCtOBN-qWWq8Pg=")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <br />
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
              <Button fullWidth variant="contained" color="primary" type="submit">
                Login
              </Button>
            </div>
          </form>
          <center>
            <p>
              Don't have an account? Please sign up to continue
              <nav>
                <Link to="/SignUp">SignUp</Link>
              </nav>
            </p>
          </center>
        </div>
      </Paper>
      <div>
        <br />
      </div>
    </div>
  );
};

export default LoginPage;*/
/*
import React, { useState } from "react";
import { TextField, Button, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./AuthContext"; // Import useAuth

const LoginPage = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth(); // Access setAuth from useAuth
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        http://localhost:3000/users?email=${encodeURIComponent(email)}
      );

      const user = response.data[0];

      if (user && user.password === password) {
        console.log("Login successful:", user);

        // Call setAuth to update authentication state
        setAuth(user.username);

        // Navigate to the home page or wherever you want
        navigate("/");
      } else {
        console.error("Invalid login credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://media.istockphoto.com/id/864471218/photo/purple-and-pink-sunset-light-on-the-island.jpg?s=612x612&w=0&k=20&c=m4eU-kmVQ7_MziSJhOUCGBggEtW26lCtOBN-qWWq8Pg=")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <br />
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
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="username"
              label="username"
              name="username"
              type="username"
              value={username}
              onChange={handleUsernameChange}
              required
            />

            <div>
              <Button fullWidth variant="contained" color="primary" type="submit">
                Login
              </Button>
            </div>
          </form>
          <center>
            <p>
              Don't have an account? Please sign up to continue
              <nav>
                <Link to="/SignUp">SignUp</Link>
              </nav>
            </p>
          </center>
        </div>
      </Paper>
      <div>
        <br />
      </div>
    </div>
  );
};

export default LoginPage;*/

// import React, { useState } from "react";
// import { TextField, Button, Typography, Paper } from "@mui/material";
// import { useNavigate, Link } from "react-router-dom";
// import axios from "axios";
// import { useAuth } from "./AuthContext";

// const LoginPage = () => {
//   const navigate = useNavigate();
//   const { setAuth } = useAuth();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const [error, setError] = useState(null);

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleUsernameChange = (e) => {
//     setUsername(e.target.value);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.get(
//         http://localhost:3000/users?email=${encodeURIComponent(email)}
//       );

//       const user = response.data[0];

//       if (user && user.password === password) {
//         console.log("Login successful:", user);
//         setAuth(user.username);
//         navigate("/");
//       } else {
//         setError("Invalid login credentials");
//       }
//     } catch (error) {
//       console.error("Error during login:", error);
//       setError("Error during login. Please try again.");
//     }
//   };

//   return (
//     <div
//       style={{
//         backgroundImage: 'url("https://media.istockphoto.com/id/864471218/photo/purple-and-pink-sunset-light-on-the-island.jpg?s=612x612&w=0&k=20&c=m4eU-kmVQ7_MziSJhOUCGBggEtW26lCtOBN-qWWq8Pg=")',
//         backgroundRepeat: "no-repeat",
//         backgroundSize: "cover",
//       }}
//     >
//       <br />
//       <Paper
//         elevation={3}
//         style={{ padding: 60, maxWidth: 400, margin: "auto", marginTop: 50 }}
//       >
//         <div>
//           <center>
//             <Typography component="h3" variant="h3">
//               Welcome
//             </Typography>
//             <p>Please Login to continue</p>
//           </center>
//           <form onSubmit={handleSubmit}>
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
//               required
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               id="username"
//               label="username"
//               name="username"
//               type="text"
//               value={username}
//               onChange={handleUsernameChange}
//               required
//             />

//             {error && <div style={{ color: "red", textAlign: "center" }}>{error}</div>}

//             <div>
//               <Button fullWidth variant="contained" color="primary" type="submit">
//                 Login
//               </Button>
//             </div>
//           </form>
//           <center>
//             <p>
//               Don't have an account? Please sign up to continue
//               <Link to="/SignUp">SignUp</Link>
//             </p>
//           </center>
//         </div>
//       </Paper>
//       <div>
//         <br />
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        ` http://localhost:3000/users?email=${encodeURIComponent(email)}`
      );

      const user = response.data[0];

      if (user && user.password === password) {
        console.log("Login successful:", user);
        setAuth(user.name); // Set authentication state with the name
        navigate("/");
      } else {
        setError("Invalid login credentials");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("Error during login. Please try again.");
    }
  };

  return (
    <div
      style={{
        backgroundImage:
          'url("https://media.istockphoto.com/id/864471218/photo/purple-and-pink-sunset-light-on-the-island.jpg?s=612x612&w=0&k=20&c=m4eU-kmVQ7_MziSJhOUCGBggEtW26lCtOBN-qWWq8Pg=")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <br />
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

            {error && (
              <div style={{ color: "red", textAlign: "center" }}>{error}</div>
            )}

            <div>
              <Button
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
              Don't have an account? Please sign up to continue
              <Link to="/SignUp">SignUp</Link>
            </p>
          </center>
        </div>
      </Paper>
      <div>
        <br />
      </div>
    </div>
  );
};

export default LoginPage;

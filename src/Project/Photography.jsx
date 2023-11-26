import React, { useState } from "react";
import {
  Button,
  Paper,
  Typography,
  Avatar,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Checkbox,
  FormControlLabel,
} from "@mui/material";

const FreelancerDetails = ({
  name,
  experience,
  personsHired,
  imageUrl,
  biography,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const [hireDialogOpen, setHireDialogOpen] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  const handleHireNow = () => {
    setHireDialogOpen(true);
  };

  const handleConfirmHiring = () => {
    console.log("handleConfirmHiring function is called");
    console.log("termsChecked:", termsChecked);

    if (termsChecked) {
      console.log(`Congratulations! ${name} is hired!`);
      setHireDialogOpen(false);
    } else {
      console.log("Please accept the terms and conditions.");
    }
  };

  const handleDialogClose = () => {
    setHireDialogOpen(false);
  };

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item container xs={12} md={4} alignItems="center">
        <Avatar
          alt={name}
          src={imageUrl}
          sx={{ width: 80, height: 80, marginRight: 2 }}
        />
        <div>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle1">
            Experience: {experience} years
          </Typography>
          <Typography variant="subtitle1">
            Persons Hired: {personsHired}
          </Typography>
          <Button
            variant="contained"
            onClick={handleShowDetails}
            sx={{ marginTop: 2 }}
          >
            Show More Details
          </Button>
          &emsp;&emsp;
          <Button
            variant="contained"
            onClick={handleHireNow}
            sx={{ marginTop: 2 }}
          >
            Hire Now
          </Button>
        </div>
      </Grid>
      {showDetails && (
        <Grid item xs={12} md={8}>
          <Paper style={{ padding: 20, marginTop: 10 }}>
            <Typography variant="h6">Biography:</Typography>
            <Typography>{biography}</Typography>
          </Paper>
        </Grid>
      )}

      <Dialog open={hireDialogOpen} onClose={handleDialogClose}>
        <DialogTitle>Contact Details</DialogTitle>
        <DialogContent>
          {/* Add contact details here */}
          <FormControlLabel
            control={
              <Checkbox
                checked={termsChecked}
                onChange={(e) => setTermsChecked(e.target.checked)}
              />
            }
            label="I accept the terms and conditions"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button onClick={handleConfirmHiring}>Confirm Hiring</Button>
        </DialogActions>
      </Dialog>
    </Grid>
  );
};

const Photography = () => {
  return (
    <div>
      <FreelancerDetails
        name="Ganesh"
        experience={3}
        personsHired={10}
        imageUrl="data:image/jpeg;base64,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"
        biography={`📷 Welcome to Ganesh's Photography World! 🌟
        Hello there! I'm Ganesh, a passionate freelance photographer dedicated to capturing life's most precious moments through the lens. With 6 years of experience in the industry, I've had the privilege of working on a diverse range of projects, each one adding a unique touch to my portfolio.
        
        🔍 What Sets Me Apart:
        I believe in the power of visual storytelling. My approach goes beyond just taking pictures; it's about creating a narrative that resonates with emotions and memories. Whether it's a heartfelt portrait, a lively event, or a striking commercial project, I thrive on bringing out the essence of the moment.
        contact details:
        phone:9787986620
        email:
      `}
      />
      <FreelancerDetails
        name="Sophia Sen"
        experience={5}
        personsHired={15}
        imageUrl="data:image/jpeg;base64,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"
        biography={` 
        📷 Welcome to Fathima's Photography World! 🌟
        Hello there! I'm Fathima, a passionate freelance photographer dedicated to capturing life's most precious moments through the lens. With 6 years of experience in the industry, I've had the privilege of working on a diverse range of projects, each one adding a unique touch to my portfolio.
        
        🔍 What Sets Me Apart:
        I believe in the power of visual storytelling. My approach goes beyond just taking pictures; it's about creating a narrative that resonates with emotions and memories. Whether it's a heartfelt portrait, a lively event, or a striking commercial project, I thrive on bringing out the essence of the moment.
      `}
      />
      <FreelancerDetails
        name="Sowmiya"
        experience={5}
        personsHired={16}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSd3GXNy4ga0IH-9kLaZzR8z2sRchHyQgoDxA&usqp=CAU"
        biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FreelancerDetails
        name="Ram"
        experience={8}
        personsHired={18}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHEx2dIYi-BkXuF18vD4fJ_Yg6UOOUwq-eMA&usqp=CAU"
        biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FreelancerDetails
        name="Cathrine"
        experience={9}
        personsHired={18}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7RpOheyHjOwjM3bc5sJaHSHfIYZRGMus_fA&usqp=CAU"
        biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FreelancerDetails
        name="Karthik"
        experience={4}
        personsHired={8}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWRBp5EpsHIlHOiz5mnCtpbVFDS9gTSj0anw&usqp=CAU"
        biography=""
      />
      <FreelancerDetails
        name="Sowbiya"
        experience={2}
        personsHired={3}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtIJuko_WDfD5mwyqZI_P0YMTWoEQJUpwZtw&usqp=CAU"
        biography=""
      />
      <FreelancerDetails
        name="Yukesh"
        experience={9}
        personsHired={20}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR3e_XYDVnJs3zstvOGmq0RnCnhQrV7QBc5Q&usqp=CAU"
        biography=""
      />
      <FreelancerDetails
        name="Anita"
        experience={4}
        personsHired={10}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-hGVmsDLf0uLDv08zSdQ2r-HSWvr1-H46TCLttedrPwUSyNNXGWDcC2DegWJWZo8eG-Q&usqp=CAU"
        biography=""
      />
      <FreelancerDetails
        name="Sathya"
        experience={3}
        personsHired={8}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ1kMKPcV38gx2yhplhUhZDTLJo59DqioISY5lhUlsZxz0nzSeXUx7Djw-e_4uNcbgpXs&usqp=CAU"
        biography=""
      />
      <FreelancerDetails
        name="Guru"
        experience={6}
        personsHired={5}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwkVmX2W2sX7bkG6bkrL7BgF0qIjx4PZCDZQ&usqp=CAU"
        biography=""
      />
    </div>
  );
};

export default Photography;

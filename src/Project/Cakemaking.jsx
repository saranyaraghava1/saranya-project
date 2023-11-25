import React, { useState } from "react";
import { Button, Paper, Typography, Avatar } from "@mui/material";

const FreelancerDetails = ({
  name,
  experience,
  personsHired,
  imageUrl,
  biography,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 10 }}>
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
        </div>
      </div>

      <Button variant="contained" onClick={handleShowDetails}>
        Show More Details
      </Button>

      {showDetails && (
        <Paper style={{ padding: 20, marginTop: 10 }}>
          <Typography variant="h6">Biography:</Typography>
          <Typography>{biography}</Typography>
          {/* Add more details as needed */}
        </Paper>
      )}
    </div>
  );
};

const CakeMaking = () => {
  return (
    <div>
      <FreelancerDetails
        name="Venkat"
        experience={5}
        personsHired={18}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVZOPaqtunoCcGIwdabXsWa2D6yz8n2upTBg&usqp=CAU"
        biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FreelancerDetails
        name="Diya"
        experience={4}
        personsHired={9}
        imageUrl="https://media.gettyimages.com/id/875991918/photo/beautiful-student-learning-how-to-cook-at-a-gourmet-institute.jpg?s=612x612&w=gi&k=20&c=ZZsztECw7L3G4j9OEm-k8qUdwLPRlI3B5SosdnYa1S8="
        biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FreelancerDetails
        name="Rahman"
        experience={4}
        personsHired={9}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVuVgVm_7lzhovah78RWxiRA6Qu1vduc-5w&usqp=CAU"
        biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FreelancerDetails
        name="Ramya"
        experience={3}
        personsHired={10}
        imageUrl="https://media.gettyimages.com/id/1204096836/photo/happy-female-chef-cooking-at-home.jpg?s=612x612&w=0&k=20&c=bjNG4MJf3xvBf_tQoB3WQQnYOfSgVpgXI_FGE3CwmVY="
        biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <FreelancerDetails
        name="Samuel Paterson"
        experience={5}
        personsHired={18}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAnfOM4ipqS6eLh6OGXG2yMZW5fR6M32keYA&usqp=CAU"
        biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  );
};

export default CakeMaking;

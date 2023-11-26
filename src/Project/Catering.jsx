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
    if (termsChecked) {
      alert(`Congratulations! ${name} is hired!  `);
      setHireDialogOpen(false);
    } else {
      alert("Please accept the terms and conditions.");
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
            label={`Freelance Services Agreement
            This Freelance Services Agreement ("Agreement") is entered into between [Client Name], hereinafter referred to as the "Client," and [Freelancer Name], hereinafter referred to as the "Freelancer."
            
            1. Scope of Work:
            The Freelancer agrees to provide the following services to the Client: [Detailed description of the project, tasks, and deliverables].
            
            2. Payment:
            a. The Client agrees to pay the Freelancer a total fee of [Amount] for the completion of the agreed-upon services.
            b. Payment will be made as follows: [Specify payment schedule, e.g., milestone payments].
            c. Invoices will be submitted by the Freelancer, and payment is due within [number of days] days of receipt.
            
            3. Timeline:
            a. The project is expected to be completed by [Completion Date].
            b. Delays caused by unforeseen circumstances will be communicated promptly, and the parties will work together to adjust the timeline if necessary.
            
            4. Intellectual Property:
            a. The Freelancer retains the intellectual property rights to any pre-existing work.
            b. Upon full payment, the Client will have ownership rights to the final deliverables.
            
            5. Revisions and Modifications:
            a. [Number] rounds of revisions are included in the agreed-upon fee.
            b. Additional revisions will be charged at an hourly rate of [Hourly Rate].
            
            6. Confidentiality:
            Both parties agree to keep all project-related information confidential and not to disclose any sensitive information to third parties.
            
            7. Termination:
            a. Either party may terminate this Agreement with written notice if the other party breaches a material term.
            b. The Client agrees to pay for the work completed up to the termination date.
            
            8. Independent Contractor Status:
            The Freelancer is considered an independent contractor and is responsible for their own taxes and benefits.
            
            9. Liability:
            The Freelancer is not liable for any consequential, incidental, indirect, or special damages arising out of the project.
            
            10. Governing Law:
            This Agreement shall be governed by and construed in accordance with the laws of [Jurisdiction].
            
            11. Miscellaneous:
            a. Any modifications to this Agreement must be made in writing and agreed upon by both parties.
            b. This Agreement constitutes the entire understanding between the parties and supersedes any prior agreements.
            
            IN WITNESS WHEREOF, the parties hereto have executed this Freelance Services Agreement as of the Effective Date.`}
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

const Catering = () => {
  return (
    <div>
      <FreelancerDetails
        name="Venkat"
        experience={5}
        personsHired={18}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVZOPaqtunoCcGIwdabXsWa2D6yz8n2upTBg&usqp=CAU"
        biography={
          <div>
            `<h1>🍽 Venkat - Professional Catering Staff 🍽</h1>
            <p>
              ` Greetings! I'm Venkat, a passionate and experienced catering
              professional ready to bring a touch of culinary excellence to your
              special events.
            </p>
            <h1>👧About Me:</h1>
            <p>
              With over 8 years in the catering industry, I have had the
              pleasure of curating memorable dining experiences for a diverse
              range of events. From intimate gatherings to large-scale
              celebrations, my dedication to delivering delicious, visually
              stunning, and meticulously crafted dishes sets me apart.{" "}
            </p>
            <h1>😁Culinary Expertise:</h1>
            <p>
              I specialize in creating menus that not only cater to diverse
              palates but also align with the unique theme and atmosphere of
              your event. Whether you're planning a wedding, corporate event, or
              a private celebration, I pride myself on offering a bespoke
              culinary experience that leaves a lasting impression.
            </p>
            <h1>Services Offered:</h1>
            <p>
              {" "}
              🎉 Event Catering: Tailored menus for weddings, parties, and
              corporate functions. 🍲 Menu Customization: Flexible options to
              accommodate dietary preferences and restrictions. 👨‍🍳 Chef at Home:
              Elevate your private dinners with a personalized chef experience.
              📅 Meal Planning: Weekly or special occasion meal planning for
              your convenience.
            </p>
            <h1>Philosophy:</h1>
            <p>
              {" "}
              believe that good food has the power to elevate any occasion. My
              culinary philosophy revolves around using fresh, locally sourced
              ingredients to create dishes that not only satisfy the taste buds
              but also tell a story. Each event is a unique canvas, and I'm here
              to paint it with flavors that delight.
            </p>
            <h1>Why Choose Me:</h1>
            <p>
              {" "}
              ✨ Culinary Creativity: Innovative menus designed to impress and
              delight. 🤝 Client-Centric Approach: Your vision is my priority,
              and I'm dedicated to exceeding your expectations. 🌍
              Sustainability: Committed to eco-friendly practices and supporting
              local producers. Let's Create Culinary Magic Together: I am
              excited about the opportunity to collaborate with you and make
              your event an unforgettable gastronomic experience. Reach out, and
              let's start planning the perfect menu for your special day.
            </p>
            {/*<h1>🌼🌼Some of my best Work:🌼🌼</h1>*/}
            <img
              src="https://images.unsplash.com/photo-1637059395523-d5a35541d544?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGNhdGVyaW5nfGVufDB8fDB8fHww"
              alt=""
            ></img>
            <img
              src="https://plus.unsplash.com/premium_photo-1686360865541-ba8740d3c323?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNhdGVyaW5nfGVufDB8fDB8fHww"
              alt=""
            ></img>
            <h1>Contact Details:</h1>
            <p>
              {" "}
              📧 Venkat2022@gmail.com 📞 9787453520 Thank you for considering me
              as your catering professional. I look forward to bringing culinary
              excellence to your table! Bon Appétit! 🍾🍽
            </p>
          </div>
        }
      />
      <FreelancerDetails
        name="Diya"
        experience={4}
        personsHired={9}
        imageUrl="https://media.gettyimages.com/id/875991918/photo/beautiful-student-learning-how-to-cook-at-a-gourmet-institute.jpg?s=612x612&w=gi&k=20&c=ZZsztECw7L3G4j9OEm-k8qUdwLPRlI3B5SosdnYa1S8="
        biography={
          <div>
            `<h1>🍽 Diya - Professional Catering Staff 🍽</h1>
            <p>
              ` Greetings! I'm Diya, a passionate and experienced catering
              professional ready to bring a touch of culinary excellence to your
              special events.
            </p>
            <h1>👧About Me:</h1>
            <p>
              With over 8 years in the catering industry, I have had the
              pleasure of curating memorable dining experiences for a diverse
              range of events. From intimate gatherings to large-scale
              celebrations, my dedication to delivering delicious, visually
              stunning, and meticulously crafted dishes sets me apart.{" "}
            </p>
            <h1>😁Culinary Expertise:</h1>
            <p>
              I specialize in creating menus that not only cater to diverse
              palates but also align with the unique theme and atmosphere of
              your event. Whether you're planning a wedding, corporate event, or
              a private celebration, I pride myself on offering a bespoke
              culinary experience that leaves a lasting impression.
            </p>
            <h1>Services Offered:</h1>
            <p>
              {" "}
              🎉 Event Catering: Tailored menus for weddings, parties, and
              corporate functions. 🍲 Menu Customization: Flexible options to
              accommodate dietary preferences and restrictions. 👨‍🍳 Chef at Home:
              Elevate your private dinners with a personalized chef experience.
              📅 Meal Planning: Weekly or special occasion meal planning for
              your convenience.
            </p>
            <h1>Philosophy:</h1>
            <p>
              {" "}
              believe that good food has the power to elevate any occasion. My
              culinary philosophy revolves around using fresh, locally sourced
              ingredients to create dishes that not only satisfy the taste buds
              but also tell a story. Each event is a unique canvas, and I'm here
              to paint it with flavors that delight.
            </p>
            <h1>Why Choose Me:</h1>
            <p>
              {" "}
              ✨ Culinary Creativity: Innovative menus designed to impress and
              delight. 🤝 Client-Centric Approach: Your vision is my priority,
              and I'm dedicated to exceeding your expectations. 🌍
              Sustainability: Committed to eco-friendly practices and supporting
              local producers. Let's Create Culinary Magic Together: I am
              excited about the opportunity to collaborate with you and make
              your event an unforgettable gastronomic experience. Reach out, and
              let's start planning the perfect menu for your special day.
            </p>
            <h1>🌼🌼Some of my best Work:🌼🌼</h1>
            <img
              src="https://plus.unsplash.com/premium_photo-1687697860893-43a4079df35f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0ZXJpbmd8ZW58MHx8MHx8fDA%3D"
              alt=""
            ></img>
            <img
              src="https://plus.unsplash.com/premium_photo-1686360865541-ba8740d3c323?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNhdGVyaW5nfGVufDB8fDB8fHww"
              alt=""
            ></img>
            <h1>Contact Details:</h1>
            <p>
              {" "}
              📧 DiyaShree@gmail.com 📞 9787453520 Thank you for considering me
              as your catering professional. I look forward to bringing culinary
              excellence to your table! Bon Appétit! 🍾🍽
            </p>
          </div>
        }
      />
      <FreelancerDetails
        name="Rahman"
        experience={5}
        personsHired={9}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVVuVgVm_7lzhovah78RWxiRA6Qu1vduc-5w&usqp=CAU"
        biography={
          <div>
            `<h1>🍽 Rahman - Professional Catering Staff 🍽</h1>
            <p>
              ` Greetings! I'm Rahman, a passionate and experienced catering
              professional ready to bring a touch of culinary excellence to your
              special events.
            </p>
            <h1>👧About Me:</h1>
            <p>
              With over 8 years in the catering industry, I have had the
              pleasure of curating memorable dining experiences for a diverse
              range of events. From intimate gatherings to large-scale
              celebrations, my dedication to delivering delicious, visually
              stunning, and meticulously crafted dishes sets me apart.{" "}
            </p>
            <h1>😁Culinary Expertise:</h1>
            <p>
              I specialize in creating menus that not only cater to diverse
              palates but also align with the unique theme and atmosphere of
              your event. Whether you're planning a wedding, corporate event, or
              a private celebration, I pride myself on offering a bespoke
              culinary experience that leaves a lasting impression.
            </p>
            <h1>Services Offered:</h1>
            <p>
              {" "}
              🎉 Event Catering: Tailored menus for weddings, parties, and
              corporate functions. 🍲 Menu Customization: Flexible options to
              accommodate dietary preferences and restrictions. 👨‍🍳 Chef at Home:
              Elevate your private dinners with a personalized chef experience.
              📅 Meal Planning: Weekly or special occasion meal planning for
              your convenience.
            </p>
            <h1>Philosophy:</h1>
            <p>
              {" "}
              believe that good food has the power to elevate any occasion. My
              culinary philosophy revolves around using fresh, locally sourced
              ingredients to create dishes that not only satisfy the taste buds
              but also tell a story. Each event is a unique canvas, and I'm here
              to paint it with flavors that delight.
            </p>
            <h1>Why Choose Me:</h1>
            <p>
              {" "}
              ✨ Culinary Creativity: Innovative menus designed to impress and
              delight. 🤝 Client-Centric Approach: Your vision is my priority,
              and I'm dedicated to exceeding your expectations. 🌍
              Sustainability: Committed to eco-friendly practices and supporting
              local producers. Let's Create Culinary Magic Together: I am
              excited about the opportunity to collaborate with you and make
              your event an unforgettable gastronomic experience. Reach out, and
              let's start planning the perfect menu for your special day.
            </p>
            <h1>🌼🌼Some of my best Work:🌼🌼</h1>
            <img
              src="https://plus.unsplash.com/premium_photo-1687697860893-43a4079df35f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0ZXJpbmd8ZW58MHx8MHx8fDA%3D"
              alt=""
            ></img>
            <img
              src="https://plus.unsplash.com/premium_photo-1686360865541-ba8740d3c323?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNhdGVyaW5nfGVufDB8fDB8fHww"
              alt=""
            ></img>
            <h1>Contact Details:</h1>
            <p>
              {" "}
              📧 Rahman1220@gmail.com 📞 9787453520 Thank you for considering me
              as your catering professional. I look forward to bringing culinary
              excellence to your table! Bon Appétit! 🍾🍽
            </p>
          </div>
        }
      />
      <FreelancerDetails
        name="Ramya"
        experience={3}
        personsHired={10}
        imageUrl="https://media.gettyimages.com/id/1204096836/photo/happy-female-chef-cooking-at-home.jpg?s=612x612&w=0&k=20&c=bjNG4MJf3xvBf_tQoB3WQQnYOfSgVpgXI_FGE3CwmVY="
        biography={
          <div>
            `<h1>🍽 Ramya - Professional Catering Staff 🍽</h1>
            <p>
              ` Greetings! I'm Ramya, a passionate and experienced catering
              professional ready to bring a touch of culinary excellence to your
              special events.
            </p>
            <h1>👧About Me:</h1>
            <p>
              With over 8 years in the catering industry, I have had the
              pleasure of curating memorable dining experiences for a diverse
              range of events. From intimate gatherings to large-scale
              celebrations, my dedication to delivering delicious, visually
              stunning, and meticulously crafted dishes sets me apart.{" "}
            </p>
            <h1>😁Culinary Expertise:</h1>
            <p>
              I specialize in creating menus that not only cater to diverse
              palates but also align with the unique theme and atmosphere of
              your event. Whether you're planning a wedding, corporate event, or
              a private celebration, I pride myself on offering a bespoke
              culinary experience that leaves a lasting impression.
            </p>
            <h1>Services Offered:</h1>
            <p>
              {" "}
              🎉 Event Catering: Tailored menus for weddings, parties, and
              corporate functions. 🍲 Menu Customization: Flexible options to
              accommodate dietary preferences and restrictions. 👨‍🍳 Chef at Home:
              Elevate your private dinners with a personalized chef experience.
              📅 Meal Planning: Weekly or special occasion meal planning for
              your convenience.
            </p>
            <h1>Philosophy:</h1>
            <p>
              {" "}
              believe that good food has the power to elevate any occasion. My
              culinary philosophy revolves around using fresh, locally sourced
              ingredients to create dishes that not only satisfy the taste buds
              but also tell a story. Each event is a unique canvas, and I'm here
              to paint it with flavors that delight.
            </p>
            <h1>Why Choose Me:</h1>
            <p>
              {" "}
              ✨ Culinary Creativity: Innovative menus designed to impress and
              delight. 🤝 Client-Centric Approach: Your vision is my priority,
              and I'm dedicated to exceeding your expectations. 🌍
              Sustainability: Committed to eco-friendly practices and supporting
              local producers. Let's Create Culinary Magic Together: I am
              excited about the opportunity to collaborate with you and make
              your event an unforgettable gastronomic experience. Reach out, and
              let's start planning the perfect menu for your special day.
            </p>
            <h1>🌼🌼Some of my best Work:🌼🌼</h1>
            <img
              src="https://plus.unsplash.com/premium_photo-1687697860893-43a4079df35f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0ZXJpbmd8ZW58MHx8MHx8fDA%3D"
              alt=""
            ></img>
            <img
              src="https://plus.unsplash.com/premium_photo-1686360865541-ba8740d3c323?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNhdGVyaW5nfGVufDB8fDB8fHww"
              alt=""
            ></img>
            <h1>Contact Details:</h1>
            <p>
              {" "}
              📧 Ramyaravi@gmail.com 📞 9787453520 Thank you for considering me
              as your catering professional. I look forward to bringing culinary
              excellence to your table! Bon Appétit! 🍾🍽
            </p>
          </div>
        }
      />

      <FreelancerDetails
        name="Samuel Paterson"
        experience={9}
        personsHired={18}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAnfOM4ipqS6eLh6OGXG2yMZW5fR6M32keYA&usqp=CAU"
        biography={
          <div>
            `<h1>🍽 Samuel Paterson - Professional Catering Staff 🍽</h1>
            <p>
              ` Greetings! I'm Samuel Paterson, a passionate and experienced
              catering professional ready to bring a touch of culinary
              excellence to your special events.
            </p>
            <h1>👧About Me:</h1>
            <p>
              With over 8 years in the catering industry, I have had the
              pleasure of curating memorable dining experiences for a diverse
              range of events. From intimate gatherings to large-scale
              celebrations, my dedication to delivering delicious, visually
              stunning, and meticulously crafted dishes sets me apart.{" "}
            </p>
            <h1>😁Culinary Expertise:</h1>
            <p>
              I specialize in creating menus that not only cater to diverse
              palates but also align with the unique theme and atmosphere of
              your event. Whether you're planning a wedding, corporate event, or
              a private celebration, I pride myself on offering a bespoke
              culinary experience that leaves a lasting impression.
            </p>
            <h1>Services Offered:</h1>
            <p>
              {" "}
              🎉 Event Catering: Tailored menus for weddings, parties, and
              corporate functions. 🍲 Menu Customization: Flexible options to
              accommodate dietary preferences and restrictions. 👨‍🍳 Chef at Home:
              Elevate your private dinners with a personalized chef experience.
              📅 Meal Planning: Weekly or special occasion meal planning for
              your convenience.
            </p>
            <h1>Philosophy:</h1>
            <p>
              {" "}
              believe that good food has the power to elevate any occasion. My
              culinary philosophy revolves around using fresh, locally sourced
              ingredients to create dishes that not only satisfy the taste buds
              but also tell a story. Each event is a unique canvas, and I'm here
              to paint it with flavors that delight.
            </p>
            <h1>Why Choose Me:</h1>
            <p>
              {" "}
              ✨ Culinary Creativity: Innovative menus designed to impress and
              delight. 🤝 Client-Centric Approach: Your vision is my priority,
              and I'm dedicated to exceeding your expectations. 🌍
              Sustainability: Committed to eco-friendly practices and supporting
              local producers. Let's Create Culinary Magic Together: I am
              excited about the opportunity to collaborate with you and make
              your event an unforgettable gastronomic experience. Reach out, and
              let's start planning the perfect menu for your special day.
            </p>
            <h1>🌼🌼Some of my best Work:🌼🌼</h1>
            <img
              src="https://plus.unsplash.com/premium_photo-1687697860893-43a4079df35f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0ZXJpbmd8ZW58MHx8MHx8fDA%3D"
              alt=""
            ></img>
            <img
              src="https://plus.unsplash.com/premium_photo-1686360865541-ba8740d3c323?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNhdGVyaW5nfGVufDB8fDB8fHww"
              alt=""
            ></img>
            <h1>Contact Details:</h1>
            <p>
              {" "}
              📧 Samuel Paterson@gmail.com 📞 9787453520 Thank you for
              considering me as your catering professional. I look forward to
              bringing culinary excellence to your table! Bon Appétit! 🍾🍽
            </p>
          </div>
        }
      />
      <FreelancerDetails
        name="Kadhir"
        experience={2}
        personsHired={4}
        imageUrl="https://img.freepik.com/free-photo/happy-young-waiter-holding-glass-champagne-towel_171337-5290.jpg?size=626&ext=jpg&ga=GA1.1.1032690890.1700198058&semt=ais"
        biography={
          <div>
            `<h1>🍽 Kadhir - Professional Catering Staff 🍽</h1>
            <p>
              ` Greetings! I'm Kadhir, a passionate and experienced catering
              professional ready to bring a touch of culinary excellence to your
              special events.
            </p>
            <h1>👧About Me:</h1>
            <p>
              With over 8 years in the catering industry, I have had the
              pleasure of curating memorable dining experiences for a diverse
              range of events. From intimate gatherings to large-scale
              celebrations, my dedication to delivering delicious, visually
              stunning, and meticulously crafted dishes sets me apart.{" "}
            </p>
            <h1>😁Culinary Expertise:</h1>
            <p>
              I specialize in creating menus that not only cater to diverse
              palates but also align with the unique theme and atmosphere of
              your event. Whether you're planning a wedding, corporate event, or
              a private celebration, I pride myself on offering a bespoke
              culinary experience that leaves a lasting impression.
            </p>
            <h1>Services Offered:</h1>
            <p>
              {" "}
              🎉 Event Catering: Tailored menus for weddings, parties, and
              corporate functions. 🍲 Menu Customization: Flexible options to
              accommodate dietary preferences and restrictions. 👨‍🍳 Chef at Home:
              Elevate your private dinners with a personalized chef experience.
              📅 Meal Planning: Weekly or special occasion meal planning for
              your convenience.
            </p>
            <h1>Philosophy:</h1>
            <p>
              {" "}
              believe that good food has the power to elevate any occasion. My
              culinary philosophy revolves around using fresh, locally sourced
              ingredients to create dishes that not only satisfy the taste buds
              but also tell a story. Each event is a unique canvas, and I'm here
              to paint it with flavors that delight.
            </p>
            <h1>Why Choose Me:</h1>
            <p>
              {" "}
              ✨ Culinary Creativity: Innovative menus designed to impress and
              delight. 🤝 Client-Centric Approach: Your vision is my priority,
              and I'm dedicated to exceeding your expectations. 🌍
              Sustainability: Committed to eco-friendly practices and supporting
              local producers. Let's Create Culinary Magic Together: I am
              excited about the opportunity to collaborate with you and make
              your event an unforgettable gastronomic experience. Reach out, and
              let's start planning the perfect menu for your special day.
            </p>
            <h1>🌼🌼Some of my best Work:🌼🌼</h1>
            <img
              src="https://plus.unsplash.com/premium_photo-1687697860893-43a4079df35f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0ZXJpbmd8ZW58MHx8MHx8fDA%3D"
              alt=""
            ></img>
            <img
              src="https://plus.unsplash.com/premium_photo-1686360865541-ba8740d3c323?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNhdGVyaW5nfGVufDB8fDB8fHww"
              alt=""
            ></img>
            <h1>Contact Details:</h1>
            <p>
              {" "}
              📧 Kadhir7775@gmail.com 📞 9787453520 Thank you for considering me
              as your catering professional. I look forward to bringing culinary
              excellence to your table! Bon Appétit! 🍾🍽
            </p>
          </div>
        }
      />
      <FreelancerDetails
        name="Anand"
        experience={6}
        personsHired={9}
        imageUrl="https://img.freepik.com/free-photo/we-serve-best-cakes_637285-7884.jpg?size=626&ext=jpg&ga=GA1.1.1032690890.1700198058&semt=ais"
        biography={
          <div>
            `<h1>🍽 Anand - Professional Catering Staff 🍽</h1>
            <p>
              ` Greetings! I'm Anand, a passionate and experienced catering
              professional ready to bring a touch of culinary excellence to your
              special events.
            </p>
            <h1>👧About Me:</h1>
            <p>
              With over 8 years in the catering industry, I have had the
              pleasure of curating memorable dining experiences for a diverse
              range of events. From intimate gatherings to large-scale
              celebrations, my dedication to delivering delicious, visually
              stunning, and meticulously crafted dishes sets me apart.{" "}
            </p>
            <h1>😁Culinary Expertise:</h1>
            <p>
              I specialize in creating menus that not only cater to diverse
              palates but also align with the unique theme and atmosphere of
              your event. Whether you're planning a wedding, corporate event, or
              a private celebration, I pride myself on offering a bespoke
              culinary experience that leaves a lasting impression.
            </p>
            <h1>Services Offered:</h1>
            <p>
              {" "}
              🎉 Event Catering: Tailored menus for weddings, parties, and
              corporate functions. 🍲 Menu Customization: Flexible options to
              accommodate dietary preferences and restrictions. 👨‍🍳 Chef at Home:
              Elevate your private dinners with a personalized chef experience.
              📅 Meal Planning: Weekly or special occasion meal planning for
              your convenience.
            </p>
            <h1>Philosophy:</h1>
            <p>
              {" "}
              believe that good food has the power to elevate any occasion. My
              culinary philosophy revolves around using fresh, locally sourced
              ingredients to create dishes that not only satisfy the taste buds
              but also tell a story. Each event is a unique canvas, and I'm here
              to paint it with flavors that delight.
            </p>
            <h1>Why Choose Me:</h1>
            <p>
              {" "}
              ✨ Culinary Creativity: Innovative menus designed to impress and
              delight. 🤝 Client-Centric Approach: Your vision is my priority,
              and I'm dedicated to exceeding your expectations. 🌍
              Sustainability: Committed to eco-friendly practices and supporting
              local producers. Let's Create Culinary Magic Together: I am
              excited about the opportunity to collaborate with you and make
              your event an unforgettable gastronomic experience. Reach out, and
              let's start planning the perfect menu for your special day.
            </p>
            <h1>🌼🌼Some of my best Work:🌼🌼</h1>
            <img
              src="https://plus.unsplash.com/premium_photo-1687697860893-43a4079df35f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0ZXJpbmd8ZW58MHx8MHx8fDA%3D"
              alt=""
            ></img>
            <img
              src="https://plus.unsplash.com/premium_photo-1686360865541-ba8740d3c323?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNhdGVyaW5nfGVufDB8fDB8fHww"
              alt=""
            ></img>
            <h1>Contact Details:</h1>
            <p>
              {" "}
              📧 Anand2012@gmail.com 📞 9787453520 Thank you for considering me
              as your catering professional. I look forward to bringing culinary
              excellence to your table! Bon Appétit! 🍾🍽
            </p>
          </div>
        }
      />
      <FreelancerDetails
        name="Blessy Santina"
        experience={4}
        personsHired={3}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiK2Tjk6TXKaEaDud1VZYUDAtxUoGTGKF6sw&usqp=CAU"
        biography={
          <div>
            `<h1>🍽 Blessy Santina - Professional Catering Staff 🍽</h1>
            <p>
              ` Greetings! I'm Blessy Santina, a passionate and experienced
              catering professional ready to bring a touch of culinary
              excellence to your special events.
            </p>
            <h1>👧About Me:</h1>
            <p>
              With over 8 years in the catering industry, I have had the
              pleasure of curating memorable dining experiences for a diverse
              range of events. From intimate gatherings to large-scale
              celebrations, my dedication to delivering delicious, visually
              stunning, and meticulously crafted dishes sets me apart.{" "}
            </p>
            <h1>😁Culinary Expertise:</h1>
            <p>
              I specialize in creating menus that not only cater to diverse
              palates but also align with the unique theme and atmosphere of
              your event. Whether you're planning a wedding, corporate event, or
              a private celebration, I pride myself on offering a bespoke
              culinary experience that leaves a lasting impression.
            </p>
            <h1>Services Offered:</h1>
            <p>
              {" "}
              🎉 Event Catering: Tailored menus for weddings, parties, and
              corporate functions. 🍲 Menu Customization: Flexible options to
              accommodate dietary preferences and restrictions. 👨‍🍳 Chef at Home:
              Elevate your private dinners with a personalized chef experience.
              📅 Meal Planning: Weekly or special occasion meal planning for
              your convenience.
            </p>
            <h1>Philosophy:</h1>
            <p>
              {" "}
              believe that good food has the power to elevate any occasion. My
              culinary philosophy revolves around using fresh, locally sourced
              ingredients to create dishes that not only satisfy the taste buds
              but also tell a story. Each event is a unique canvas, and I'm here
              to paint it with flavors that delight.
            </p>
            <h1>Why Choose Me:</h1>
            <p>
              {" "}
              ✨ Culinary Creativity: Innovative menus designed to impress and
              delight. 🤝 Client-Centric Approach: Your vision is my priority,
              and I'm dedicated to exceeding your expectations. 🌍
              Sustainability: Committed to eco-friendly practices and supporting
              local producers. Let's Create Culinary Magic Together: I am
              excited about the opportunity to collaborate with you and make
              your event an unforgettable gastronomic experience. Reach out, and
              let's start planning the perfect menu for your special day.
            </p>
            <h1>🌼🌼Some of my best Work:🌼🌼</h1>
            <img
              src="https://plus.unsplash.com/premium_photo-1687697860893-43a4079df35f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2F0ZXJpbmd8ZW58MHx8MHx8fDA%3D"
              alt=""
            ></img>
            <img
              src="https://plus.unsplash.com/premium_photo-1686360865541-ba8740d3c323?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGNhdGVyaW5nfGVufDB8fDB8fHww"
              alt=""
            ></img>
            <h1>Contact Details:</h1>
            <p>
              {" "}
              📧 Blessy Santina@gmail.com 📞 6385857970 Thank you for
              considering me as your catering professional. I look forward to
              bringing culinary excellence to your table! Bon Appétit! 🍾🍽
            </p>
          </div>
        }
      />
    </div>
  );
};

export default Catering;

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

const DigitalMarketing = () => {
  return (
    <div>
      <FreelancerDetails
        name="Fathima"
        experience={6}
        personsHired={3}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYHW3Vy1-oeLGeE7xoybQzImGHBOLp2zkekg&usqp=CAU"
        biography={
          <div>
            <h1>🚀Fathima - Digital Marketing Expert🚀</h1>
            <p>
              👋Hello, fellow enthusiasts! I'm Fathima, a dedicated digital
              marketing professional with a passion for driving online success
              and helping businesses thrive in the digital realm.
            </p>
            <h1>👨‍💻About Me:</h1>
            <p>
              I've immersed myself in the dynamic world of digital marketing,
              leveraging my skills to navigate the ever-evolving landscape of
              SEO, social media, and online advertising. My journey began with a
              fascination for the limitless possibilities of digital platforms,
              and it has evolved into a mission to empower businesses through
              strategic and effective marketing strategies.
            </p>
            <h1>😎My Approach:</h1>
            <p>
              I believe in the power of data-driven decisions and the art of
              storytelling in the digital space. Each campaign I undertake is a
              tailored approach to complement the unique goals and identity of
              the brands I work with.
            </p>
            <h1>Experience and Skills:</h1>
            <p>
              With a background in digital marketing, I have honed my skills
              through years of hands-on experience and staying at the forefront
              of industry trends. From crafting compelling content to optimizing
              conversion funnels, I've had the privilege of contributing to the
              success of various online campaigns.
            </p>
            <h1>📊Services:</h1>
            <p>
              Whether you're looking to boost your online presence, increase
              brand awareness, or drive conversions, I offer a range of digital
              marketing services tailored to meet your unique business needs.
              From SEO strategies to social media management, I am dedicated to
              bringing your brand to the forefront of the digital landscape.
            </p>
            <h1>🚀Philosophy:</h1>
            <p>
              My philosophy is simple: digital marketing should be a catalyst
              for business growth and brand elevation. I strive to create
              impactful and measurable results for my clients, ensuring that
              their online presence not only meets but exceeds their
              expectations.
            </p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJEARYg9wSSgqdlyNtBnZqKudne25dKykiQ&usqp=CAU"
              alt=""
            ></img>
            &emsp;&emsp;
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyiIWiqz-x47qeDKxIesZnF3W8Ob01B26kiw&usqp=CAU"
              alt=""
            ></img>
            <p>
              Let's Elevate Your Brand Together: I am excited to be part of your
              digital journey, and I invite you to collaborate with me.
              Together, let's elevate your brand and achieve online success.
              Your business is unique, and I am here to help you tell its story
              effectively. Thank you for considering me as your digital
              marketing partner. I can't wait to contribute to your digital
              success story! With passion and pixels, Lakshman 🚀📈
            </p>
            <h1>Contact Details:</h1>
            <p> 📧 Fathima@gmail.com 📞 9787453520</p>
          </div>
        }
      />
      <FreelancerDetails
        name="Lakshman"
        experience={7}
        personsHired={6}
        imageUrl="https://c1.wallpaperflare.com/preview/843/478/443/entrepreneurship-business-mindset-professional-corporate-man.jpg"
        biography={
          <div>
            <h1>🚀Lakshman- Digital Marketing Expert🚀</h1>
            <p>
              👋Hello, fellow enthusiasts! I'm Fathima, a dedicated digital
              marketing professional with a passion for driving online success
              and helping businesses thrive in the digital realm.
            </p>
            <h1>👨‍💻About Me:</h1>
            <p>
              I've immersed myself in the dynamic world of digital marketing,
              leveraging my skills to navigate the ever-evolving landscape of
              SEO, social media, and online advertising. My journey began with a
              fascination for the limitless possibilities of digital platforms,
              and it has evolved into a mission to empower businesses through
              strategic and effective marketing strategies.
            </p>
            <h1>😎My Approach:</h1>
            <p>
              I believe in the power of data-driven decisions and the art of
              storytelling in the digital space. Each campaign I undertake is a
              tailored approach to complement the unique goals and identity of
              the brands I work with.
            </p>
            <h1>Experience and Skills:</h1>
            <p>
              With a background in digital marketing, I have honed my skills
              through years of hands-on experience and staying at the forefront
              of industry trends. From crafting compelling content to optimizing
              conversion funnels, I've had the privilege of contributing to the
              success of various online campaigns.
            </p>
            <h1>📊Services:</h1>
            <p>
              Whether you're looking to boost your online presence, increase
              brand awareness, or drive conversions, I offer a range of digital
              marketing services tailored to meet your unique business needs.
              From SEO strategies to social media management, I am dedicated to
              bringing your brand to the forefront of the digital landscape.
            </p>
            <h1>🚀Philosophy:</h1>
            <p>
              My philosophy is simple: digital marketing should be a catalyst
              for business growth and brand elevation. I strive to create
              impactful and measurable results for my clients, ensuring that
              their online presence not only meets but exceeds their
              expectations.
            </p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJEARYg9wSSgqdlyNtBnZqKudne25dKykiQ&usqp=CAU"
              alt=""
            ></img>
            &emsp;&emsp;
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyiIWiqz-x47qeDKxIesZnF3W8Ob01B26kiw&usqp=CAU"
              alt=""
            ></img>
            <p>
              Let's Elevate Your Brand Together: I am excited to be part of your
              digital journey, and I invite you to collaborate with me.
              Together, let's elevate your brand and achieve online success.
              Your business is unique, and I am here to help you tell its story
              effectively. Thank you for considering me as your digital
              marketing partner. I can't wait to contribute to your digital
              success story! With passion and pixels, Lakshman 🚀📈
            </p>
            <h1>Contact Details:</h1>
            <p> 📧 Lakshman@gmail.com 📞 9787453520</p>
          </div>
        }
      />
      <FreelancerDetails
        FreelancerDetails
        name="Saranya"
        experience={3}
        personsHired={2}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsAVFxR2aiSy7nifq0aiIod98FGa_AGRYPTA&usqp=CAU"
        biography={
          <div>
            <h1>🚀Saranya - Digital Marketing Expert🚀</h1>
            <p>
              👋Hello, fellow enthusiasts! I'm Fathima, a dedicated digital
              marketing professional with a passion for driving online success
              and helping businesses thrive in the digital realm.
            </p>
            <h1>👨‍💻About Me:</h1>
            <p>
              I've immersed myself in the dynamic world of digital marketing,
              leveraging my skills to navigate the ever-evolving landscape of
              SEO, social media, and online advertising. My journey began with a
              fascination for the limitless possibilities of digital platforms,
              and it has evolved into a mission to empower businesses through
              strategic and effective marketing strategies.
            </p>
            <h1>😎My Approach:</h1>
            <p>
              I believe in the power of data-driven decisions and the art of
              storytelling in the digital space. Each campaign I undertake is a
              tailored approach to complement the unique goals and identity of
              the brands I work with.
            </p>
            <h1>Experience and Skills:</h1>
            <p>
              With a background in digital marketing, I have honed my skills
              through years of hands-on experience and staying at the forefront
              of industry trends. From crafting compelling content to optimizing
              conversion funnels, I've had the privilege of contributing to the
              success of various online campaigns.
            </p>
            <h1>📊Services:</h1>
            <p>
              Whether you're looking to boost your online presence, increase
              brand awareness, or drive conversions, I offer a range of digital
              marketing services tailored to meet your unique business needs.
              From SEO strategies to social media management, I am dedicated to
              bringing your brand to the forefront of the digital landscape.
            </p>
            <h1>🚀Philosophy:</h1>
            <p>
              My philosophy is simple: digital marketing should be a catalyst
              for business growth and brand elevation. I strive to create
              impactful and measurable results for my clients, ensuring that
              their online presence not only meets but exceeds their
              expectations.
            </p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJEARYg9wSSgqdlyNtBnZqKudne25dKykiQ&usqp=CAU"
              alt=""
            ></img>
            &emsp;&emsp;
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyiIWiqz-x47qeDKxIesZnF3W8Ob01B26kiw&usqp=CAU"
              alt=""
            ></img>
            <p>
              Let's Elevate Your Brand Together: I am excited to be part of your
              digital journey, and I invite you to collaborate with me.
              Together, let's elevate your brand and achieve online success.
              Your business is unique, and I am here to help you tell its story
              effectively. Thank you for considering me as your digital
              marketing partner. I can't wait to contribute to your digital
              success story! With passion and pixels, Lakshman 🚀📈
            </p>
            <h1>Contact Details:</h1>
            <p> 📧 Saranyaraghavan2020@gmail.com 📞 9787453520</p>
          </div>
        }
      />
      `
      <FreelancerDetails
        name="Krish"
        experience={10}
        personsHired={12}
        imageUrl="data:image/jpeg;base64,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"
        biography={
          <div>
            <h1>🚀Krish - Digital Marketing Expert🚀</h1>
            <p>
              👋Hello, fellow enthusiasts! I'm Fathima, a dedicated digital
              marketing professional with a passion for driving online success
              and helping businesses thrive in the digital realm.
            </p>
            <h1>👨‍💻About Me:</h1>
            <p>
              I've immersed myself in the dynamic world of digital marketing,
              leveraging my skills to navigate the ever-evolving landscape of
              SEO, social media, and online advertising. My journey began with a
              fascination for the limitless possibilities of digital platforms,
              and it has evolved into a mission to empower businesses through
              strategic and effective marketing strategies.
            </p>
            <h1>😎My Approach:</h1>
            <p>
              I believe in the power of data-driven decisions and the art of
              storytelling in the digital space. Each campaign I undertake is a
              tailored approach to complement the unique goals and identity of
              the brands I work with.
            </p>
            <h1>Experience and Skills:</h1>
            <p>
              With a background in digital marketing, I have honed my skills
              through years of hands-on experience and staying at the forefront
              of industry trends. From crafting compelling content to optimizing
              conversion funnels, I've had the privilege of contributing to the
              success of various online campaigns.
            </p>
            <h1>📊Services:</h1>
            <p>
              Whether you're looking to boost your online presence, increase
              brand awareness, or drive conversions, I offer a range of digital
              marketing services tailored to meet your unique business needs.
              From SEO strategies to social media management, I am dedicated to
              bringing your brand to the forefront of the digital landscape.
            </p>
            <h1>🚀Philosophy:</h1>
            <p>
              My philosophy is simple: digital marketing should be a catalyst
              for business growth and brand elevation. I strive to create
              impactful and measurable results for my clients, ensuring that
              their online presence not only meets but exceeds their
              expectations.
            </p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJEARYg9wSSgqdlyNtBnZqKudne25dKykiQ&usqp=CAU"
              alt=""
            ></img>
            &emsp;&emsp;
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyiIWiqz-x47qeDKxIesZnF3W8Ob01B26kiw&usqp=CAU"
              alt=""
            ></img>
            <p>
              Let's Elevate Your Brand Together: I am excited to be part of your
              digital journey, and I invite you to collaborate with me.
              Together, let's elevate your brand and achieve online success.
              Your business is unique, and I am here to help you tell its story
              effectively. Thank you for considering me as your digital
              marketing partner. I can't wait to contribute to your digital
              success story! With passion and pixels, Lakshman 🚀📈
            </p>
            <h1>Contact Details:</h1>
            <p> 📧 Krish@gmail.com 📞 9787453520</p>
          </div>
        }
      />
      <FreelancerDetails
        name="Lavanya"
        experience={5}
        personsHired={6}
        imageUrl="https://media.istockphoto.com/id/1528491760/photo/young-businesswoman-posing-by-window.webp?b=1&s=170667a&w=0&k=20&c=4cx34JvWH-1F-NVzfmgwHEvkupIBYO_6GBjV_SI5oYY="
        biography={
          <div>
            <h1>🚀Lavanya - Digital Marketing Expert🚀</h1>
            <p>
              👋Hello, fellow enthusiasts! I'm Fathima, a dedicated digital
              marketing professional with a passion for driving online success
              and helping businesses thrive in the digital realm.
            </p>
            <h1>👨‍💻About Me:</h1>
            <p>
              I've immersed myself in the dynamic world of digital marketing,
              leveraging my skills to navigate the ever-evolving landscape of
              SEO, social media, and online advertising. My journey began with a
              fascination for the limitless possibilities of digital platforms,
              and it has evolved into a mission to empower businesses through
              strategic and effective marketing strategies.
            </p>
            <h1>😎My Approach:</h1>
            <p>
              I believe in the power of data-driven decisions and the art of
              storytelling in the digital space. Each campaign I undertake is a
              tailored approach to complement the unique goals and identity of
              the brands I work with.
            </p>
            <h1>Experience and Skills:</h1>
            <p>
              With a background in digital marketing, I have honed my skills
              through years of hands-on experience and staying at the forefront
              of industry trends. From crafting compelling content to optimizing
              conversion funnels, I've had the privilege of contributing to the
              success of various online campaigns.
            </p>
            <h1>📊Services:</h1>
            <p>
              Whether you're looking to boost your online presence, increase
              brand awareness, or drive conversions, I offer a range of digital
              marketing services tailored to meet your unique business needs.
              From SEO strategies to social media management, I am dedicated to
              bringing your brand to the forefront of the digital landscape.
            </p>
            <h1>🚀Philosophy:</h1>
            <p>
              My philosophy is simple: digital marketing should be a catalyst
              for business growth and brand elevation. I strive to create
              impactful and measurable results for my clients, ensuring that
              their online presence not only meets but exceeds their
              expectations.
            </p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJEARYg9wSSgqdlyNtBnZqKudne25dKykiQ&usqp=CAU"
              alt=""
            ></img>
            &emsp;&emsp;
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyiIWiqz-x47qeDKxIesZnF3W8Ob01B26kiw&usqp=CAU"
              alt=""
            ></img>
            <p>
              Let's Elevate Your Brand Together: I am excited to be part of your
              digital journey, and I invite you to collaborate with me.
              Together, let's elevate your brand and achieve online success.
              Your business is unique, and I am here to help you tell its story
              effectively. Thank you for considering me as your digital
              marketing partner. I can't wait to contribute to your digital
              success story! With passion and pixels, Lakshman 🚀📈
            </p>
            <h1>Contact Details:</h1>
            <p> 📧 Lavanya@gmail.com 📞 9787453520</p>
          </div>
        }
      />
      <FreelancerDetails
        name="Arun"
        experience={8}
        personsHired={12}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl4Vq1z4ba6WaurOpX1OD8XZqto7plXtfI4A&usqp=CAU"
        biography={
          <div>
            <h1>🚀Arun - Digital Marketing Expert🚀</h1>
            <p>
              👋Hello, fellow enthusiasts! I'm Fathima, a dedicated digital
              marketing professional with a passion for driving online success
              and helping businesses thrive in the digital realm.
            </p>
            <h1>👨‍💻About Me:</h1>
            <p>
              I've immersed myself in the dynamic world of digital marketing,
              leveraging my skills to navigate the ever-evolving landscape of
              SEO, social media, and online advertising. My journey began with a
              fascination for the limitless possibilities of digital platforms,
              and it has evolved into a mission to empower businesses through
              strategic and effective marketing strategies.
            </p>
            <h1>😎My Approach:</h1>
            <p>
              I believe in the power of data-driven decisions and the art of
              storytelling in the digital space. Each campaign I undertake is a
              tailored approach to complement the unique goals and identity of
              the brands I work with.
            </p>
            <h1>Experience and Skills:</h1>
            <p>
              With a background in digital marketing, I have honed my skills
              through years of hands-on experience and staying at the forefront
              of industry trends. From crafting compelling content to optimizing
              conversion funnels, I've had the privilege of contributing to the
              success of various online campaigns.
            </p>
            <h1>📊Services:</h1>
            <p>
              Whether you're looking to boost your online presence, increase
              brand awareness, or drive conversions, I offer a range of digital
              marketing services tailored to meet your unique business needs.
              From SEO strategies to social media management, I am dedicated to
              bringing your brand to the forefront of the digital landscape.
            </p>
            <h1>🚀Philosophy:</h1>
            <p>
              My philosophy is simple: digital marketing should be a catalyst
              for business growth and brand elevation. I strive to create
              impactful and measurable results for my clients, ensuring that
              their online presence not only meets but exceeds their
              expectations.
            </p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJEARYg9wSSgqdlyNtBnZqKudne25dKykiQ&usqp=CAU"
              alt=""
            ></img>
            &emsp;&emsp;
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyiIWiqz-x47qeDKxIesZnF3W8Ob01B26kiw&usqp=CAU"
              alt=""
            ></img>
            <p>
              Let's Elevate Your Brand Together: I am excited to be part of your
              digital journey, and I invite you to collaborate with me.
              Together, let's elevate your brand and achieve online success.
              Your business is unique, and I am here to help you tell its story
              effectively. Thank you for considering me as your digital
              marketing partner. I can't wait to contribute to your digital
              success story! With passion and pixels, Lakshman 🚀📈
            </p>
            <h1>Contact Details:</h1>
            <p> 📧 Arun@gmail.com 📞 9787453520</p>
          </div>
        }
      />
      <FreelancerDetails
        name="Rohan"
        experience={2}
        personsHired={3}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvlWl1VPG3Dowiggl8F9ndtWzwSkLd21ceSQ&usqp=CAU"
        biography={
          <div>
            <h1>🚀Rohan- Digital Marketing Expert🚀</h1>
            <p>
              👋Hello, fellow enthusiasts! I'm Fathima, a dedicated digital
              marketing professional with a passion for driving online success
              and helping businesses thrive in the digital realm.
            </p>
            <h1>👨‍💻About Me:</h1>
            <p>
              I've immersed myself in the dynamic world of digital marketing,
              leveraging my skills to navigate the ever-evolving landscape of
              SEO, social media, and online advertising. My journey began with a
              fascination for the limitless possibilities of digital platforms,
              and it has evolved into a mission to empower businesses through
              strategic and effective marketing strategies.
            </p>
            <h1>😎My Approach:</h1>
            <p>
              I believe in the power of data-driven decisions and the art of
              storytelling in the digital space. Each campaign I undertake is a
              tailored approach to complement the unique goals and identity of
              the brands I work with.
            </p>
            <h1>Experience and Skills:</h1>
            <p>
              With a background in digital marketing, I have honed my skills
              through years of hands-on experience and staying at the forefront
              of industry trends. From crafting compelling content to optimizing
              conversion funnels, I've had the privilege of contributing to the
              success of various online campaigns.
            </p>
            <h1>📊Services:</h1>
            <p>
              Whether you're looking to boost your online presence, increase
              brand awareness, or drive conversions, I offer a range of digital
              marketing services tailored to meet your unique business needs.
              From SEO strategies to social media management, I am dedicated to
              bringing your brand to the forefront of the digital landscape.
            </p>
            <h1>🚀Philosophy:</h1>
            <p>
              My philosophy is simple: digital marketing should be a catalyst
              for business growth and brand elevation. I strive to create
              impactful and measurable results for my clients, ensuring that
              their online presence not only meets but exceeds their
              expectations.
            </p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJEARYg9wSSgqdlyNtBnZqKudne25dKykiQ&usqp=CAU"
              alt=""
            ></img>
            &emsp;&emsp;
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyiIWiqz-x47qeDKxIesZnF3W8Ob01B26kiw&usqp=CAU"
              alt=""
            ></img>
            <p>
              Let's Elevate Your Brand Together: I am excited to be part of your
              digital journey, and I invite you to collaborate with me.
              Together, let's elevate your brand and achieve online success.
              Your business is unique, and I am here to help you tell its story
              effectively. Thank you for considering me as your digital
              marketing partner. I can't wait to contribute to your digital
              success story! With passion and pixels, Lakshman 🚀📈
            </p>
            <h1>Contact Details:</h1>
            <p> 📧 Rohan@gmail.com 📞 9787453520</p>
          </div>
        }
      />
      <FreelancerDetails
        name="Yamini"
        experience={3}
        personsHired={6}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROXpWGCD_DONtzKqfjBsN5_OTlP_aMB48uBw&usqp=CAU"
        biography={
          <div>
            <h1>🚀Yamini - Digital Marketing Expert🚀</h1>
            <p>
              👋Hello, fellow enthusiasts! I'm Fathima, a dedicated digital
              marketing professional with a passion for driving online success
              and helping businesses thrive in the digital realm.
            </p>
            <h1>👨‍💻About Me:</h1>
            <p>
              I've immersed myself in the dynamic world of digital marketing,
              leveraging my skills to navigate the ever-evolving landscape of
              SEO, social media, and online advertising. My journey began with a
              fascination for the limitless possibilities of digital platforms,
              and it has evolved into a mission to empower businesses through
              strategic and effective marketing strategies.
            </p>
            <h1>😎My Approach:</h1>
            <p>
              I believe in the power of data-driven decisions and the art of
              storytelling in the digital space. Each campaign I undertake is a
              tailored approach to complement the unique goals and identity of
              the brands I work with.
            </p>
            <h1>Experience and Skills:</h1>
            <p>
              With a background in digital marketing, I have honed my skills
              through years of hands-on experience and staying at the forefront
              of industry trends. From crafting compelling content to optimizing
              conversion funnels, I've had the privilege of contributing to the
              success of various online campaigns.
            </p>
            <h1>📊Services:</h1>
            <p>
              Whether you're looking to boost your online presence, increase
              brand awareness, or drive conversions, I offer a range of digital
              marketing services tailored to meet your unique business needs.
              From SEO strategies to social media management, I am dedicated to
              bringing your brand to the forefront of the digital landscape.
            </p>
            <h1>🚀Philosophy:</h1>
            <p>
              My philosophy is simple: digital marketing should be a catalyst
              for business growth and brand elevation. I strive to create
              impactful and measurable results for my clients, ensuring that
              their online presence not only meets but exceeds their
              expectations.
            </p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJEARYg9wSSgqdlyNtBnZqKudne25dKykiQ&usqp=CAU"
              alt=""
            ></img>
            &emsp;&emsp;
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyiIWiqz-x47qeDKxIesZnF3W8Ob01B26kiw&usqp=CAU"
              alt=""
            ></img>
            <p>
              Let's Elevate Your Brand Together: I am excited to be part of your
              digital journey, and I invite you to collaborate with me.
              Together, let's elevate your brand and achieve online success.
              Your business is unique, and I am here to help you tell its story
              effectively. Thank you for considering me as your digital
              marketing partner. I can't wait to contribute to your digital
              success story! With passion and pixels, Lakshman 🚀📈
            </p>
            <h1>Contact Details:</h1>
            <p> 📧 Yamini@gmail.com 📞 9787453520</p>
          </div>
        }
      />
      <FreelancerDetails
        name="Prith kayon"
        experience={5}
        personsHired={3}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqO5IJZ5BCZZmFzVPSyC15yahhYf6mcrv2nQ&usqp=CAU"
        biography={
          <div>
            <h1>🚀Prith Keyon - Digital Marketing Expert🚀</h1>
            <p>
              👋Hello, fellow enthusiasts! I'm Fathima, a dedicated digital
              marketing professional with a passion for driving online success
              and helping businesses thrive in the digital realm.
            </p>
            <h1>👨‍💻About Me:</h1>
            <p>
              I've immersed myself in the dynamic world of digital marketing,
              leveraging my skills to navigate the ever-evolving landscape of
              SEO, social media, and online advertising. My journey began with a
              fascination for the limitless possibilities of digital platforms,
              and it has evolved into a mission to empower businesses through
              strategic and effective marketing strategies.
            </p>
            <h1>😎My Approach:</h1>
            <p>
              I believe in the power of data-driven decisions and the art of
              storytelling in the digital space. Each campaign I undertake is a
              tailored approach to complement the unique goals and identity of
              the brands I work with.
            </p>
            <h1>Experience and Skills:</h1>
            <p>
              With a background in digital marketing, I have honed my skills
              through years of hands-on experience and staying at the forefront
              of industry trends. From crafting compelling content to optimizing
              conversion funnels, I've had the privilege of contributing to the
              success of various online campaigns.
            </p>
            <h1>📊Services:</h1>
            <p>
              Whether you're looking to boost your online presence, increase
              brand awareness, or drive conversions, I offer a range of digital
              marketing services tailored to meet your unique business needs.
              From SEO strategies to social media management, I am dedicated to
              bringing your brand to the forefront of the digital landscape.
            </p>
            <h1>🚀Philosophy:</h1>
            <p>
              My philosophy is simple: digital marketing should be a catalyst
              for business growth and brand elevation. I strive to create
              impactful and measurable results for my clients, ensuring that
              their online presence not only meets but exceeds their
              expectations.
            </p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJEARYg9wSSgqdlyNtBnZqKudne25dKykiQ&usqp=CAU"
              alt=""
            ></img>
            &emsp;&emsp;
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyiIWiqz-x47qeDKxIesZnF3W8Ob01B26kiw&usqp=CAU"
              alt=""
            ></img>
            <p>
              Let's Elevate Your Brand Together: I am excited to be part of your
              digital journey, and I invite you to collaborate with me.
              Together, let's elevate your brand and achieve online success.
              Your business is unique, and I am here to help you tell its story
              effectively. Thank you for considering me as your digital
              marketing partner. I can't wait to contribute to your digital
              success story! With passion and pixels, Lakshman 🚀📈
            </p>
            <h1>Contact Details:</h1>
            <p> 📧 PrithKayon@gmail.com 📞 9787453520</p>
          </div>
        }
      />
    </div>
  );
};

export default DigitalMarketing;

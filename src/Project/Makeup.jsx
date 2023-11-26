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

const Makeup = () => {
  return (
    <div>
      <FreelancerDetails
        name="Gayathri"
        experience={7}
        personsHired={23}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDvznohFzqK2txYpBOW1TFWM1NA8bzJKPCw&usqp=CAU"
        biography={
          <div>
            `<h1>🌈Rahav - Professional Makeup Artist🌈</h1>
            <p>
              ` 👋Hello, beautiful souls! I'm Gayathiri, a passionate makeup
              artist with a flair for creating stunning looks that enhance and
              celebrate the unique beauty in each individual.`
            </p>
            <h1>👧About Me:</h1>
            <p>
              Born and raised in a world of colors, textures, and creativity, I
              discovered my love for makeup at a young age. My journey began as
              an exploration of self-expression, and it soon transformed into a
              lifelong pursuit of helping others feel confident and empowered
              through the art of makeup.{" "}
            </p>
            <h1>😁My Approach:</h1>
            <p>
              I believe in the power of makeup to not only enhance external
              beauty but also to boost inner confidence. Each stroke of my brush
              is a celebration of individuality, and I take pride in tailoring
              my work to complement the features and personalities of my
              clients.
            </p>
            <h1>Experience and Training:</h1>
            <p>
              {" "}
              With a background in professional makeup artistry, I have honed my
              skills through extensive training and hands-on experience. From
              glamorous bridal looks to avant-garde editorial styles, I have had
              the privilege of working across a diverse range of projects, each
              contributing to my growth as an artist.
            </p>
            <h1>📸Services:</h1>
            <p>
              {" "}
              Whether you're preparing for a special occasion, a photoshoot, or
              just want to treat yourself to a makeover, I offer a range of
              services tailored to meet your unique needs. From flawless
              foundation application to creative eye looks, I am dedicated to
              bringing your vision to life.
            </p>
            <h1>⛷Philosophy:</h1>
            <p>
              {" "}
              My philosophy is simple: makeup should be a source of joy and
              empowerment. I strive to create a comfortable and enjoyable
              experience for my clients, ensuring that they not only look
              fabulous but also feel confident in their own skin.
            </p>
            <h1>🌼🌼Some of my best Work:🌼🌼</h1>
            <img
              src="https://5.imimg.com/data5/OP/JI/CR/ANDROID-78215502/product-jpeg-500x500.jpg"
              alt=""
            ></img>
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2022/9/RG/SP/ZA/41710084/picsart-22-09-12-15-48-29-884-500x500.jpg"
              alt=""
            ></img>
            <p>
              {" "}
              Let's Create Beauty Together: I am thrilled to be on this artistic
              journey, and I invite you to join me. Let's collaborate to bring
              out the best version of yourself through the transformative magic
              of makeup. Your story is unique, and I am here to help you tell it
              with style. Thank you for considering me as your makeup artist. I
              can't wait to be a part of your beauty story! With love and
              lipstick, Gayathiri 💄✨`
            </p>
          </div>
        }
      />
      <FreelancerDetails
        name="Rahav"
        experience={5}
        personsHired={8}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0CAh6vjmXC_NnP96-C26pcOL7TzthrNXPeg&usqp=CAU"
        biography={
          <div>
            `<h1>🌈Rahav - Professional Makeup Artist🌈</h1>
            <p>
              ` 👋Hello, beautiful souls! I'm Gayathiri, a passionate makeup
              artist with a flair for creating stunning looks that enhance and
              celebrate the unique beauty in each individual.`
            </p>
            <h1>👧About Me:</h1>
            <p>
              Born and raised in a world of colors, textures, and creativity, I
              discovered my love for makeup at a young age. My journey began as
              an exploration of self-expression, and it soon transformed into a
              lifelong pursuit of helping others feel confident and empowered
              through the art of makeup.{" "}
            </p>
            <h1>😁My Approach:</h1>
            <p>
              I believe in the power of makeup to not only enhance external
              beauty but also to boost inner confidence. Each stroke of my brush
              is a celebration of individuality, and I take pride in tailoring
              my work to complement the features and personalities of my
              clients.
            </p>
            <h1>Experience and Training:</h1>
            <p>
              {" "}
              With a background in professional makeup artistry, I have honed my
              skills through extensive training and hands-on experience. From
              glamorous bridal looks to avant-garde editorial styles, I have had
              the privilege of working across a diverse range of projects, each
              contributing to my growth as an artist.
            </p>
            <h1>📸Services:</h1>
            <p>
              {" "}
              Whether you're preparing for a special occasion, a photoshoot, or
              just want to treat yourself to a makeover, I offer a range of
              services tailored to meet your unique needs. From flawless
              foundation application to creative eye looks, I am dedicated to
              bringing your vision to life.
            </p>
            <h1>⛷Philosophy:</h1>
            <p>
              {" "}
              My philosophy is simple: makeup should be a source of joy and
              empowerment. I strive to create a comfortable and enjoyable
              experience for my clients, ensuring that they not only look
              fabulous but also feel confident in their own skin.
            </p>
            <h1>🌼🌼Some of my best Work:🌼🌼</h1>
            <img
              src="https://5.imimg.com/data5/OP/JI/CR/ANDROID-78215502/product-jpeg-500x500.jpg"
              alt=""
            ></img>
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2022/9/RG/SP/ZA/41710084/picsart-22-09-12-15-48-29-884-500x500.jpg"
              alt=""
            ></img>
            <p>
              {" "}
              Let's Create Beauty Together: I am thrilled to be on this artistic
              journey, and I invite you to join me. Let's collaborate to bring
              out the best version of yourself through the transformative magic
              of makeup. Your story is unique, and I am here to help you tell it
              with style. Thank you for considering me as your makeup artist. I
              can't wait to be a part of your beauty story! With love and
              lipstick, Gayathiri 💄✨`
            </p>
          </div>
        }
      />
      <FreelancerDetails
        name="Lincy Vinnet"
        experience={5}
        personsHired={18}
        imageUrl="data:image/jpeg;base64,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"
        biography={
          <div>
            `<h1>🌈Lincy Vinnet - Professional Makeup Artist🌈</h1>
            <p>
              ` 👋Hello, beautiful souls! I'm Gayathiri, a passionate makeup
              artist with a flair for creating stunning looks that enhance and
              celebrate the unique beauty in each individual.`
            </p>
            <h1>👧About Me:</h1>
            <p>
              Born and raised in a world of colors, textures, and creativity, I
              discovered my love for makeup at a young age. My journey began as
              an exploration of self-expression, and it soon transformed into a
              lifelong pursuit of helping others feel confident and empowered
              through the art of makeup.{" "}
            </p>
            <h1>😁My Approach:</h1>
            <p>
              I believe in the power of makeup to not only enhance external
              beauty but also to boost inner confidence. Each stroke of my brush
              is a celebration of individuality, and I take pride in tailoring
              my work to complement the features and personalities of my
              clients.
            </p>
            <h1>Experience and Training:</h1>
            <p>
              {" "}
              With a background in professional makeup artistry, I have honed my
              skills through extensive training and hands-on experience. From
              glamorous bridal looks to avant-garde editorial styles, I have had
              the privilege of working across a diverse range of projects, each
              contributing to my growth as an artist.
            </p>
            <h1>📸Services:</h1>
            <p>
              {" "}
              Whether you're preparing for a special occasion, a photoshoot, or
              just want to treat yourself to a makeover, I offer a range of
              services tailored to meet your unique needs. From flawless
              foundation application to creative eye looks, I am dedicated to
              bringing your vision to life.
            </p>
            <h1>⛷Philosophy:</h1>
            <p>
              {" "}
              My philosophy is simple: makeup should be a source of joy and
              empowerment. I strive to create a comfortable and enjoyable
              experience for my clients, ensuring that they not only look
              fabulous but also feel confident in their own skin.
            </p>
            <h1>🌼🌼Some of my best Work:🌼🌼</h1>
            <img
              src="https://5.imimg.com/data5/OP/JI/CR/ANDROID-78215502/product-jpeg-500x500.jpg"
              alt=""
            ></img>
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2022/9/RG/SP/ZA/41710084/picsart-22-09-12-15-48-29-884-500x500.jpg"
              alt=""
            ></img>
            <p>
              {" "}
              Let's Create Beauty Together: I am thrilled to be on this artistic
              journey, and I invite you to join me. Let's collaborate to bring
              out the best version of yourself through the transformative magic
              of makeup. Your story is unique, and I am here to help you tell it
              with style. Thank you for considering me as your makeup artist. I
              can't wait to be a part of your beauty story! With love and
              lipstick, Lincy Vinnet💄✨`
            </p>
          </div>
        }
      />
      <FreelancerDetails
        name="Harish"
        experience={5}
        personsHired={18}
        imageUrl="https://img.freepik.com/premium-photo/male-makeup-artist-staying-dark-background-holding-professional-brush-shadows-palette-looking-camera_118342-33410.jpg?w=2000"
        biography={
          <div>
            `<h1>🌈Harish- Professional Makeup Artist🌈</h1>
            <p>
              ` 👋Hello, beautiful souls! I'm Gayathiri, a passionate makeup
              artist with a flair for creating stunning looks that enhance and
              celebrate the unique beauty in each individual.`
            </p>
            <h1>👧About Me:</h1>
            <p>
              Born and raised in a world of colors, textures, and creativity, I
              discovered my love for makeup at a young age. My journey began as
              an exploration of self-expression, and it soon transformed into a
              lifelong pursuit of helping others feel confident and empowered
              through the art of makeup.{" "}
            </p>
            <h1>😁My Approach:</h1>
            <p>
              I believe in the power of makeup to not only enhance external
              beauty but also to boost inner confidence. Each stroke of my brush
              is a celebration of individuality, and I take pride in tailoring
              my work to complement the features and personalities of my
              clients.
            </p>
            <h1>Experience and Training:</h1>
            <p>
              {" "}
              With a background in professional makeup artistry, I have honed my
              skills through extensive training and hands-on experience. From
              glamorous bridal looks to avant-garde editorial styles, I have had
              the privilege of working across a diverse range of projects, each
              contributing to my growth as an artist.
            </p>
            <h1>📸Services:</h1>
            <p>
              {" "}
              Whether you're preparing for a special occasion, a photoshoot, or
              just want to treat yourself to a makeover, I offer a range of
              services tailored to meet your unique needs. From flawless
              foundation application to creative eye looks, I am dedicated to
              bringing your vision to life.
            </p>
            <h1>⛷Philosophy:</h1>
            <p>
              {" "}
              My philosophy is simple: makeup should be a source of joy and
              empowerment. I strive to create a comfortable and enjoyable
              experience for my clients, ensuring that they not only look
              fabulous but also feel confident in their own skin.
            </p>
            <h1>🌼🌼Some of my best Work:🌼🌼</h1>
            <img
              src="https://5.imimg.com/data5/OP/JI/CR/ANDROID-78215502/product-jpeg-500x500.jpg"
              alt=""
            ></img>
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2022/9/RG/SP/ZA/41710084/picsart-22-09-12-15-48-29-884-500x500.jpg"
              alt=""
            ></img>
            <p>
              {" "}
              Let's Create Beauty Together: I am thrilled to be on this artistic
              journey, and I invite you to join me. Let's collaborate to bring
              out the best version of yourself through the transformative magic
              of makeup. Your story is unique, and I am here to help you tell it
              with style. Thank you for considering me as your makeup artist. I
              can't wait to be a part of your beauty story! With love and
              lipstick, Harish💄✨`
            </p>
          </div>
        }
      />

      <FreelancerDetails
        name="Swetha Roy"
        experience={5}
        personsHired={18}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTghIEayUUw8_qpOd1t_Qawsn2xMShITMpO8A&usqp=CAU"
        biography={
          <div>
            `<h1>🌈Swetha Roy - Professional Makeup Artist🌈</h1>
            <p>
              ` 👋Hello, beautiful souls! I'm Gayathiri, a passionate makeup
              artist with a flair for creating stunning looks that enhance and
              celebrate the unique beauty in each individual.`
            </p>
            <h1>👧About Me:</h1>
            <p>
              Born and raised in a world of colors, textures, and creativity, I
              discovered my love for makeup at a young age. My journey began as
              an exploration of self-expression, and it soon transformed into a
              lifelong pursuit of helping others feel confident and empowered
              through the art of makeup.{" "}
            </p>
            <h1>😁My Approach:</h1>
            <p>
              I believe in the power of makeup to not only enhance external
              beauty but also to boost inner confidence. Each stroke of my brush
              is a celebration of individuality, and I take pride in tailoring
              my work to complement the features and personalities of my
              clients.
            </p>
            <h1>Experience and Training:</h1>
            <p>
              {" "}
              With a background in professional makeup artistry, I have honed my
              skills through extensive training and hands-on experience. From
              glamorous bridal looks to avant-garde editorial styles, I have had
              the privilege of working across a diverse range of projects, each
              contributing to my growth as an artist.
            </p>
            <h1>📸Services:</h1>
            <p>
              {" "}
              Whether you're preparing for a special occasion, a photoshoot, or
              just want to treat yourself to a makeover, I offer a range of
              services tailored to meet your unique needs. From flawless
              foundation application to creative eye looks, I am dedicated to
              bringing your vision to life.
            </p>
            <h1>⛷Philosophy:</h1>
            <p>
              {" "}
              My philosophy is simple: makeup should be a source of joy and
              empowerment. I strive to create a comfortable and enjoyable
              experience for my clients, ensuring that they not only look
              fabulous but also feel confident in their own skin.
            </p>
            <h1>🌼🌼Some of my best Work:🌼🌼</h1>
            <img
              src="https://5.imimg.com/data5/OP/JI/CR/ANDROID-78215502/product-jpeg-500x500.jpg"
              alt=""
            ></img>
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2022/9/RG/SP/ZA/41710084/picsart-22-09-12-15-48-29-884-500x500.jpg"
              alt=""
            ></img>
            <p>
              {" "}
              Let's Create Beauty Together: I am thrilled to be on this artistic
              journey, and I invite you to join me. Let's collaborate to bring
              out the best version of yourself through the transformative magic
              of makeup. Your story is unique, and I am here to help you tell it
              with style. Thank you for considering me as your makeup artist. I
              can't wait to be a part of your beauty story! With love and
              lipstick, Swetha Roy 💄✨`
            </p>
          </div>
        }
      />
      <FreelancerDetails
        name="Ankita"
        experience={4}
        personsHired={10}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSie147gvWFtrEAu4-pKtvRJVDpGQT8qBvohmSkJ8xm-fZ1eFSDib7Xu9OsQy6Ifz7iIsI&usqp=CAU"
        biography={
          <div>
            `<h1>🌈 Ankita- Professional Makeup Artist🌈</h1>
            <p>
              ` 👋Hello, beautiful souls! I'm Gayathiri, a passionate makeup
              artist with a flair for creating stunning looks that enhance and
              celebrate the unique beauty in each individual.`
            </p>
            <h1>👧About Me:</h1>
            <p>
              Born and raised in a world of colors, textures, and creativity, I
              discovered my love for makeup at a young age. My journey began as
              an exploration of self-expression, and it soon transformed into a
              lifelong pursuit of helping others feel confident and empowered
              through the art of makeup.{" "}
            </p>
            <h1>😁My Approach:</h1>
            <p>
              I believe in the power of makeup to not only enhance external
              beauty but also to boost inner confidence. Each stroke of my brush
              is a celebration of individuality, and I take pride in tailoring
              my work to complement the features and personalities of my
              clients.
            </p>
            <h1>Experience and Training:</h1>
            <p>
              {" "}
              With a background in professional makeup artistry, I have honed my
              skills through extensive training and hands-on experience. From
              glamorous bridal looks to avant-garde editorial styles, I have had
              the privilege of working across a diverse range of projects, each
              contributing to my growth as an artist.
            </p>
            <h1>📸Services:</h1>
            <p>
              {" "}
              Whether you're preparing for a special occasion, a photoshoot, or
              just want to treat yourself to a makeover, I offer a range of
              services tailored to meet your unique needs. From flawless
              foundation application to creative eye looks, I am dedicated to
              bringing your vision to life.
            </p>
            <h1>⛷Philosophy:</h1>
            <p>
              {" "}
              My philosophy is simple: makeup should be a source of joy and
              empowerment. I strive to create a comfortable and enjoyable
              experience for my clients, ensuring that they not only look
              fabulous but also feel confident in their own skin.
            </p>
            <h1>🌼🌼Some of my best Work:🌼🌼</h1>
            <img
              src="https://5.imimg.com/data5/OP/JI/CR/ANDROID-78215502/product-jpeg-500x500.jpg"
              alt=""
            ></img>
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2022/9/RG/SP/ZA/41710084/picsart-22-09-12-15-48-29-884-500x500.jpg"
              alt=""
            ></img>
            <p>
              {" "}
              Let's Create Beauty Together: I am thrilled to be on this artistic
              journey, and I invite you to join me. Let's collaborate to bring
              out the best version of yourself through the transformative magic
              of makeup. Your story is unique, and I am here to help you tell it
              with style. Thank you for considering me as your makeup artist. I
              can't wait to be a part of your beauty story! With love and
              lipstick, Ankita 💄✨`
            </p>
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
            `<h1>🌈 Rohan- Professional Makeup Artist🌈</h1>
            <p>
              ` 👋Hello, beautiful souls! I'm Gayathiri, a passionate makeup
              artist with a flair for creating stunning looks that enhance and
              celebrate the unique beauty in each individual.`
            </p>
            <h1>👧About Me:</h1>
            <p>
              Born and raised in a world of colors, textures, and creativity, I
              discovered my love for makeup at a young age. My journey began as
              an exploration of self-expression, and it soon transformed into a
              lifelong pursuit of helping others feel confident and empowered
              through the art of makeup.{" "}
            </p>
            <h1>😁My Approach:</h1>
            <p>
              I believe in the power of makeup to not only enhance external
              beauty but also to boost inner confidence. Each stroke of my brush
              is a celebration of individuality, and I take pride in tailoring
              my work to complement the features and personalities of my
              clients.
            </p>
            <h1>Experience and Training:</h1>
            <p>
              {" "}
              With a background in professional makeup artistry, I have honed my
              skills through extensive training and hands-on experience. From
              glamorous bridal looks to avant-garde editorial styles, I have had
              the privilege of working across a diverse range of projects, each
              contributing to my growth as an artist.
            </p>
            <h1>📸Services:</h1>
            <p>
              {" "}
              Whether you're preparing for a special occasion, a photoshoot, or
              just want to treat yourself to a makeover, I offer a range of
              services tailored to meet your unique needs. From flawless
              foundation application to creative eye looks, I am dedicated to
              bringing your vision to life.
            </p>
            <h1>⛷Philosophy:</h1>
            <p>
              {" "}
              My philosophy is simple: makeup should be a source of joy and
              empowerment. I strive to create a comfortable and enjoyable
              experience for my clients, ensuring that they not only look
              fabulous but also feel confident in their own skin.
            </p>
            <h1>🌼🌼Some of my best Work:🌼🌼</h1>
            <img
              src="https://5.imimg.com/data5/OP/JI/CR/ANDROID-78215502/product-jpeg-500x500.jpg"
              alt=""
            ></img>
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2022/9/RG/SP/ZA/41710084/picsart-22-09-12-15-48-29-884-500x500.jpg"
              alt=""
            ></img>
            <p>
              {" "}
              Let's Create Beauty Together: I am thrilled to be on this artistic
              journey, and I invite you to join me. Let's collaborate to bring
              out the best version of yourself through the transformative magic
              of makeup. Your story is unique, and I am here to help you tell it
              with style. Thank you for considering me as your makeup artist. I
              can't wait to be a part of your beauty story! With love and
              lipstick, Rohan 💄✨`
            </p>
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
            `<h1>🌈Yamini - Professional Makeup Artist🌈</h1>
            <p>
              ` 👋Hello, beautiful souls! I'm Gayathiri, a passionate makeup
              artist with a flair for creating stunning looks that enhance and
              celebrate the unique beauty in each individual.`
            </p>
            <h1>👧About Me:</h1>
            <p>
              Born and raised in a world of colors, textures, and creativity, I
              discovered my love for makeup at a young age. My journey began as
              an exploration of self-expression, and it soon transformed into a
              lifelong pursuit of helping others feel confident and empowered
              through the art of makeup.{" "}
            </p>
            <h1>😁My Approach:</h1>
            <p>
              I believe in the power of makeup to not only enhance external
              beauty but also to boost inner confidence. Each stroke of my brush
              is a celebration of individuality, and I take pride in tailoring
              my work to complement the features and personalities of my
              clients.
            </p>
            <h1>Experience and Training:</h1>
            <p>
              {" "}
              With a background in professional makeup artistry, I have honed my
              skills through extensive training and hands-on experience. From
              glamorous bridal looks to avant-garde editorial styles, I have had
              the privilege of working across a diverse range of projects, each
              contributing to my growth as an artist.
            </p>
            <h1>📸Services:</h1>
            <p>
              {" "}
              Whether you're preparing for a special occasion, a photoshoot, or
              just want to treat yourself to a makeover, I offer a range of
              services tailored to meet your unique needs. From flawless
              foundation application to creative eye looks, I am dedicated to
              bringing your vision to life.
            </p>
            <h1>⛷Philosophy:</h1>
            <p>
              {" "}
              My philosophy is simple: makeup should be a source of joy and
              empowerment. I strive to create a comfortable and enjoyable
              experience for my clients, ensuring that they not only look
              fabulous but also feel confident in their own skin.
            </p>
            <h1>🌼🌼Some of my best Work:🌼🌼</h1>
            <img
              src="https://5.imimg.com/data5/OP/JI/CR/ANDROID-78215502/product-jpeg-500x500.jpg"
              alt=""
            ></img>
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2022/9/RG/SP/ZA/41710084/picsart-22-09-12-15-48-29-884-500x500.jpg"
              alt=""
            ></img>
            <p>
              {" "}
              Let's Create Beauty Together: I am thrilled to be on this artistic
              journey, and I invite you to join me. Let's collaborate to bring
              out the best version of yourself through the transformative magic
              of makeup. Your story is unique, and I am here to help you tell it
              with style. Thank you for considering me as your makeup artist. I
              can't wait to be a part of your beauty story! With love and
              lipstick, Yamini💄✨`
            </p>
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
            `<h1>🌈 Prith kayon - Professional Makeup Artist🌈</h1>
            <p>
              ` 👋Hello, beautiful souls! I'm Gayathiri, a passionate makeup
              artist with a flair for creating stunning looks that enhance and
              celebrate the unique beauty in each individual.`
            </p>
            <h1>👧About Me:</h1>
            <p>
              Born and raised in a world of colors, textures, and creativity, I
              discovered my love for makeup at a young age. My journey began as
              an exploration of self-expression, and it soon transformed into a
              lifelong pursuit of helping others feel confident and empowered
              through the art of makeup.{" "}
            </p>
            <h1>😁My Approach:</h1>
            <p>
              I believe in the power of makeup to not only enhance external
              beauty but also to boost inner confidence. Each stroke of my brush
              is a celebration of individuality, and I take pride in tailoring
              my work to complement the features and personalities of my
              clients.
            </p>
            <h1>Experience and Training:</h1>
            <p>
              {" "}
              With a background in professional makeup artistry, I have honed my
              skills through extensive training and hands-on experience. From
              glamorous bridal looks to avant-garde editorial styles, I have had
              the privilege of working across a diverse range of projects, each
              contributing to my growth as an artist.
            </p>
            <h1>📸Services:</h1>
            <p>
              {" "}
              Whether you're preparing for a special occasion, a photoshoot, or
              just want to treat yourself to a makeover, I offer a range of
              services tailored to meet your unique needs. From flawless
              foundation application to creative eye looks, I am dedicated to
              bringing your vision to life.
            </p>
            <h1>⛷Philosophy:</h1>
            <p>
              {" "}
              My philosophy is simple: makeup should be a source of joy and
              empowerment. I strive to create a comfortable and enjoyable
              experience for my clients, ensuring that they not only look
              fabulous but also feel confident in their own skin.
            </p>
            <h1>🌼🌼Some of my best Work:🌼🌼</h1>
            <img
              src="https://5.imimg.com/data5/OP/JI/CR/ANDROID-78215502/product-jpeg-500x500.jpg"
              alt=""
            ></img>
            <img
              src="https://5.imimg.com/data5/SELLER/Default/2022/9/RG/SP/ZA/41710084/picsart-22-09-12-15-48-29-884-500x500.jpg"
              alt=""
            ></img>
            <p>
              {" "}
              Let's Create Beauty Together: I am thrilled to be on this artistic
              journey, and I invite you to join me. Let's collaborate to bring
              out the best version of yourself through the transformative magic
              of makeup. Your story is unique, and I am here to help you tell it
              with style. Thank you for considering me as your makeup artist. I
              can't wait to be a part of your beauty story! With love and
              lipstick, Prith kayon💄✨`
            </p>
          </div>
        }
      />
    </div>
  );
};

export default Makeup;

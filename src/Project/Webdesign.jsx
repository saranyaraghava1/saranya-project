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
const Webdesign = () => {
  return (
    <div>
      <FreelancerDetails
        name="Sneha"
        experience={5}
        personsHired={6}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQNwU5wbDwTvH3YT9LyiEn-eSPqQIPMBUC-g&usqp=CAU"
        biography={
          <div>
            <h1> 🌐 Sneha - Web Designer Extraordinaire 💻 </h1>
            <p>
              Greetings! I'm Sneha, a dedicated web designer with a passion for
              crafting visually stunning and user-friendly digital experiences.
            </p>
            <h6>About Me</h6>
            <p>
              With a keen eye for design and [X] years of experience, I've had
              the pleasure of working on a variety of projects, from sleek
              corporate websites to vibrant e-commerce platforms.
            </p>
            <h6>Design Expertise</h6>
            <p>
              🎨 UI/UX Design: Creating intuitive and engaging user interfaces
              for a seamless browsing experience.
            </p>
            <p>
              🖌️ Visual Design: Developing visually appealing graphics and
              layouts that align with brand aesthetics.
            </p>
            <p>
              💡 Wireframing: Translating ideas into wireframes to plan and
              structure website designs effectively.
            </p>
            <h6>Services Offered</h6>
            <p>
              🌐 Website Design: Crafting responsive and modern websites
              tailored to your brand.
            </p>
            <p>
              🎨 Landing Page Design: Captivating and conversion-focused landing
              page designs to drive results.
            </p>
            <p>
              🖼️ Graphic Design: Designing eye-catching visuals for web and
              social media platforms.
            </p>

            <h6>Why Choose Me</h6>
            <p>
              🎨 Creative Solutions: Tailoring designs to meet the unique needs
              of each project.
            </p>
            <img
              src="https://media.istockphoto.com/id/1224339524/photo/responsive-devices-on-home-desktop-showing-web-design-website.jpg?b=1&s=612x612&w=0&k=20&c=F36D39cRg9wb3MpPyoL45uj8psANKib2hmNExDCKOGM="
              alt=""
            ></img>
            <img
              src="https://i.pinimg.com/736x/f2/22/0a/f2220a3a9f775f9c640ce3eceb517f8d.jpg"
              alt=""
            ></img>
            <img
              src="https://img.freepik.com/photos-premium/prise-vue-aerienne-du-train-photographie-du-viaduc_950002-172700.jpg"
              alt=""
            ></img>
            <p>
              🤝 Collaboration: Open communication and a collaborative design
              process to bring your vision to life.
            </p>
            <p>
              🚀 Innovation: Staying updated with the latest design trends and
              technologies to keep your web presence modern and fresh.
            </p>
            <h6>Let's Design Your Digital Presence</h6>
            <p>
              I'm excited about the opportunity to collaborate with you and
              create a visually stunning and effective web presence for your
              brand. Whether you need a new website, a redesign, or custom
              graphics, let's work together to make your digital vision a
              reality.
            </p>
            <p>📧 RahulDesigns@gmail.com </p>
            <p>📞 795-555-5678 </p>
            <p>🌐 RahulWebDesigns.com</p>
            <h6>Thank you for considering me as your web designer.</h6>
            <p>
              I look forward to turning your ideas into visually captivating
              designs!
            </p>
            <p>Happy Designing! 🌐🎨</p>
          </div>
        }
      />
      <FreelancerDetails
        name="Swathi"
        experience={5}
        personsHired={5}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2mI1UXyKNAewAZ9aPFu1OfH_moGvmR5HX5A&usqp=CAU"
        biography={
          <div>
            <h1> 🌐 Swathi - Web Designer Extraordinaire 💻 </h1>
            <p>
              Greetings! I'm Swathi, a dedicated web designer with a passion for
              crafting visually stunning and user-friendly digital experiences.
            </p>
            <h6>About Me</h6>
            <p>
              With a keen eye for design and [X] years of experience, I've had
              the pleasure of working on a variety of projects, from sleek
              corporate websites to vibrant e-commerce platforms.
            </p>
            <h6>Design Expertise</h6>
            <p>
              🎨 UI/UX Design: Creating intuitive and engaging user interfaces
              for a seamless browsing experience.
            </p>
            <p>
              🖌️ Visual Design: Developing visually appealing graphics and
              layouts that align with brand aesthetics.
            </p>
            <p>
              💡 Wireframing: Translating ideas into wireframes to plan and
              structure website designs effectively.
            </p>
            <h6>Services Offered</h6>
            <p>
              🌐 Website Design: Crafting responsive and modern websites
              tailored to your brand.
            </p>
            <p>
              🎨 Landing Page Design: Captivating and conversion-focused landing
              page designs to drive results.
            </p>
            <p>
              🖼️ Graphic Design: Designing eye-catching visuals for web and
              social media platforms.
            </p>

            <h6>Why Choose Me</h6>
            <p>
              🎨 Creative Solutions: Tailoring designs to meet the unique needs
              of each project.
            </p>
            <img
              src="https://media.istockphoto.com/id/1224339524/photo/responsive-devices-on-home-desktop-showing-web-design-website.jpg?b=1&s=612x612&w=0&k=20&c=F36D39cRg9wb3MpPyoL45uj8psANKib2hmNExDCKOGM="
              alt=""
            ></img>
            <img
              src="https://i.pinimg.com/736x/f2/22/0a/f2220a3a9f775f9c640ce3eceb517f8d.jpg"
              alt=""
            ></img>
            <img
              src="https://img.freepik.com/photos-premium/prise-vue-aerienne-du-train-photographie-du-viaduc_950002-172700.jpg"
              alt=""
            ></img>
            <p>
              🤝 Collaboration: Open communication and a collaborative design
              process to bring your vision to life.
            </p>
            <p>
              🚀 Innovation: Staying updated with the latest design trends and
              technologies to keep your web presence modern and fresh.
            </p>
            <h6>Let's Design Your Digital Presence</h6>
            <p>
              I'm excited about the opportunity to collaborate with you and
              create a visually stunning and effective web presence for your
              brand. Whether you need a new website, a redesign, or custom
              graphics, let's work together to make your digital vision a
              reality.
            </p>
            <p>📧 RahulDesigns@gmail.com </p>
            <p>📞 795-555-5678 </p>
            <p>🌐 RahulWebDesigns.com</p>
            <h6>Thank you for considering me as your web designer.</h6>
            <p>
              I look forward to turning your ideas into visually captivating
              designs!
            </p>
            <p>Happy Designing! 🌐🎨</p>
          </div>
        }
      />
      <FreelancerDetails
        name="SriRam"
        experience={3}
        personsHired={2}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs8ekz3bc7ZwPtIK8kQd9hs9cafBEM0r5ipQ&usqp=CAU"
        biography={
          <div>
            <h1> 🌐 Sriram - Web Designer Extraordinaire 💻 </h1>
            <p>
              Greetings! I'm Sriram, a dedicated web designer with a passion for
              crafting visually stunning and user-friendly digital experiences.
            </p>
            <h6>About Me</h6>
            <p>
              With a keen eye for design and [X] years of experience, I've had
              the pleasure of working on a variety of projects, from sleek
              corporate websites to vibrant e-commerce platforms.
            </p>
            <h6>Design Expertise</h6>
            <p>
              🎨 UI/UX Design: Creating intuitive and engaging user interfaces
              for a seamless browsing experience.
            </p>
            <p>
              🖌️ Visual Design: Developing visually appealing graphics and
              layouts that align with brand aesthetics.
            </p>
            <p>
              💡 Wireframing: Translating ideas into wireframes to plan and
              structure website designs effectively.
            </p>
            <h6>Services Offered</h6>
            <p>
              🌐 Website Design: Crafting responsive and modern websites
              tailored to your brand.
            </p>
            <p>
              🎨 Landing Page Design: Captivating and conversion-focused landing
              page designs to drive results.
            </p>
            <p>
              🖼️ Graphic Design: Designing eye-catching visuals for web and
              social media platforms.
            </p>

            <h6>Why Choose Me</h6>
            <p>
              🎨 Creative Solutions: Tailoring designs to meet the unique needs
              of each project.
            </p>
            <img
              src="https://media.istockphoto.com/id/1224339524/photo/responsive-devices-on-home-desktop-showing-web-design-website.jpg?b=1&s=612x612&w=0&k=20&c=F36D39cRg9wb3MpPyoL45uj8psANKib2hmNExDCKOGM="
              alt=""
            ></img>
            <img
              src="https://i.pinimg.com/736x/f2/22/0a/f2220a3a9f775f9c640ce3eceb517f8d.jpg"
              alt=""
            ></img>
            <img
              src="https://img.freepik.com/photos-premium/prise-vue-aerienne-du-train-photographie-du-viaduc_950002-172700.jpg"
              alt=""
            ></img>
            <p>
              🤝 Collaboration: Open communication and a collaborative design
              process to bring your vision to life.
            </p>
            <p>
              🚀 Innovation: Staying updated with the latest design trends and
              technologies to keep your web presence modern and fresh.
            </p>
            <h6>Let's Design Your Digital Presence</h6>
            <p>
              I'm excited about the opportunity to collaborate with you and
              create a visually stunning and effective web presence for your
              brand. Whether you need a new website, a redesign, or custom
              graphics, let's work together to make your digital vision a
              reality.
            </p>
            <p>📧 WebDesigns@gmail.com </p>
            <p>📞 795-555-5678 </p>
            <p>🌐 RahulWebDesigns.com</p>
            <h6>Thank you for considering me as your web designer.</h6>
            <p>
              I look forward to turning your ideas into visually captivating
              designs!
            </p>
            <p>Happy Designing! 🌐🎨</p>
          </div>
        }
      />
      <FreelancerDetails
        name="Preethi"
        experience={5}
        personsHired={8}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTneQflKaRfaRgRcz_TsXjwhtcHU3ePlddNlw9geE1WY82cDpzV_97mXOE4xObuwPcFqho&usqp=CAU"
        biography={
          <div>
            <h1> 🌐 Preethi - Web Designer Extraordinaire 💻 </h1>
            <p>
              Greetings! I'm Preethi, a dedicated web designer with a passion
              for crafting visually stunning and user-friendly digital
              experiences.
            </p>
            <h6>About Me</h6>
            <p>
              With a keen eye for design and [X] years of experience, I've had
              the pleasure of working on a variety of projects, from sleek
              corporate websites to vibrant e-commerce platforms.
            </p>
            <h6>Design Expertise</h6>
            <p>
              🎨 UI/UX Design: Creating intuitive and engaging user interfaces
              for a seamless browsing experience.
            </p>
            <p>
              🖌️ Visual Design: Developing visually appealing graphics and
              layouts that align with brand aesthetics.
            </p>
            <p>
              💡 Wireframing: Translating ideas into wireframes to plan and
              structure website designs effectively.
            </p>
            <h6>Services Offered</h6>
            <p>
              🌐 Website Design: Crafting responsive and modern websites
              tailored to your brand.
            </p>
            <p>
              🎨 Landing Page Design: Captivating and conversion-focused landing
              page designs to drive results.
            </p>
            <p>
              🖼️ Graphic Design: Designing eye-catching visuals for web and
              social media platforms.
            </p>

            <h6>Why Choose Me</h6>
            <p>
              🎨 Creative Solutions: Tailoring designs to meet the unique needs
              of each project.
            </p>
            <img
              src="https://media.istockphoto.com/id/1224339524/photo/responsive-devices-on-home-desktop-showing-web-design-website.jpg?b=1&s=612x612&w=0&k=20&c=F36D39cRg9wb3MpPyoL45uj8psANKib2hmNExDCKOGM="
              alt=""
            ></img>
            <img
              src="https://i.pinimg.com/736x/f2/22/0a/f2220a3a9f775f9c640ce3eceb517f8d.jpg"
              alt=""
            ></img>
            <img
              src="https://img.freepik.com/photos-premium/prise-vue-aerienne-du-train-photographie-du-viaduc_950002-172700.jpg"
              alt=""
            ></img>
            <p>
              🤝 Collaboration: Open communication and a collaborative design
              process to bring your vision to life.
            </p>
            <p>
              🚀 Innovation: Staying updated with the latest design trends and
              technologies to keep your web presence modern and fresh.
            </p>
            <h6>Let's Design Your Digital Presence</h6>
            <p>
              I'm excited about the opportunity to collaborate with you and
              create a visually stunning and effective web presence for your
              brand. Whether you need a new website, a redesign, or custom
              graphics, let's work together to make your digital vision a
              reality.
            </p>
            <p>📧 RahulDesigns@gmail.com </p>
            <p>📞 795-555-5678 </p>
            <p>🌐 RahulWebDesigns.com</p>
            <h6>Thank you for considering me as your web designer.</h6>
            <p>
              I look forward to turning your ideas into visually captivating
              designs!
            </p>
            <p>Happy Designing! 🌐🎨</p>
          </div>
        }
      />
      <FreelancerDetails
        name="Rahul"
        experience={5}
        personsHired={7}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxxQpcVr5YAq5NlBLayI9hBgZBhzvqLiegVw&usqp=CAU"
        biography={
          <div>
            <h1> 🌐 Rhaul - Web Designer Extraordinaire 💻 </h1>
            <p>
              Greetings! I'm Rahul, a dedicated web designer with a passion for
              crafting visually stunning and user-friendly digital experiences.
            </p>
            <h6>About Me</h6>
            <p>
              With a keen eye for design and [X] years of experience, I've had
              the pleasure of working on a variety of projects, from sleek
              corporate websites to vibrant e-commerce platforms.
            </p>
            <h6>Design Expertise</h6>
            <p>
              🎨 UI/UX Design: Creating intuitive and engaging user interfaces
              for a seamless browsing experience.
            </p>
            <p>
              🖌️ Visual Design: Developing visually appealing graphics and
              layouts that align with brand aesthetics.
            </p>
            <p>
              💡 Wireframing: Translating ideas into wireframes to plan and
              structure website designs effectively.
            </p>
            <h6>Services Offered</h6>
            <p>
              🌐 Website Design: Crafting responsive and modern websites
              tailored to your brand.
            </p>
            <p>
              🎨 Landing Page Design: Captivating and conversion-focused landing
              page designs to drive results.
            </p>
            <p>
              🖼️ Graphic Design: Designing eye-catching visuals for web and
              social media platforms.
            </p>

            <h6>Why Choose Me</h6>
            <p>
              🎨 Creative Solutions: Tailoring designs to meet the unique needs
              of each project.
            </p>
            <img
              src="https://media.istockphoto.com/id/1224339524/photo/responsive-devices-on-home-desktop-showing-web-design-website.jpg?b=1&s=612x612&w=0&k=20&c=F36D39cRg9wb3MpPyoL45uj8psANKib2hmNExDCKOGM="
              alt=""
            ></img>
            <img
              src="https://i.pinimg.com/736x/f2/22/0a/f2220a3a9f775f9c640ce3eceb517f8d.jpg"
              alt=""
            ></img>
            <img
              src="https://img.freepik.com/photos-premium/prise-vue-aerienne-du-train-photographie-du-viaduc_950002-172700.jpg"
              alt=""
            ></img>
            <p>
              🤝 Collaboration: Open communication and a collaborative design
              process to bring your vision to life.
            </p>
            <p>
              🚀 Innovation: Staying updated with the latest design trends and
              technologies to keep your web presence modern and fresh.
            </p>
            <h6>Let's Design Your Digital Presence</h6>
            <p>
              I'm excited about the opportunity to collaborate with you and
              create a visually stunning and effective web presence for your
              brand. Whether you need a new website, a redesign, or custom
              graphics, let's work together to make your digital vision a
              reality.
            </p>
            <p>📧 RahulDesigns@gmail.com </p>
            <p>📞 795-555-5678 </p>
            <p>🌐 RahulWebDesigns.com</p>
            <h6>Thank you for considering me as your web designer.</h6>
            <p>
              I look forward to turning your ideas into visually captivating
              designs!
            </p>
            <p>Happy Designing! 🌐🎨</p>
          </div>
        }
      />

      <FreelancerDetails
        name="Prasad"
        experience={6}
        personsHired={9}
        imageUrl="https://img.freepik.com/premium-photo/man-using-laptop-isolated-white-background_53876-19550.jpg"
        biography={
          <div>
            <h1> 🌐Prasad- Web Designer Extraordinaire 💻 </h1>
            <p>
              Greetings! I'm Prasad, a dedicated web designer with a passion for
              crafting visually stunning and user-friendly digital experiences.
            </p>
            <h6>About Me</h6>
            <p>
              With a keen eye for design and [X] years of experience, I've had
              the pleasure of working on a variety of projects, from sleek
              corporate websites to vibrant e-commerce platforms.
            </p>
            <h6>Design Expertise</h6>
            <p>
              🎨 UI/UX Design: Creating intuitive and engaging user interfaces
              for a seamless browsing experience.
            </p>
            <p>
              🖌️ Visual Design: Developing visually appealing graphics and
              layouts that align with brand aesthetics.
            </p>
            <p>
              💡 Wireframing: Translating ideas into wireframes to plan and
              structure website designs effectively.
            </p>
            <h6>Services Offered</h6>
            <p>
              🌐 Website Design: Crafting responsive and modern websites
              tailored to your brand.
            </p>
            <p>
              🎨 Landing Page Design: Captivating and conversion-focused landing
              page designs to drive results.
            </p>
            <p>
              🖼️ Graphic Design: Designing eye-catching visuals for web and
              social media platforms.
            </p>

            <h6>Why Choose Me</h6>
            <p>
              🎨 Creative Solutions: Tailoring designs to meet the unique needs
              of each project.
            </p>
            <img
              src="https://media.istockphoto.com/id/1224339524/photo/responsive-devices-on-home-desktop-showing-web-design-website.jpg?b=1&s=612x612&w=0&k=20&c=F36D39cRg9wb3MpPyoL45uj8psANKib2hmNExDCKOGM="
              alt=""
            ></img>
            <img
              src="https://i.pinimg.com/736x/f2/22/0a/f2220a3a9f775f9c640ce3eceb517f8d.jpg"
              alt=""
            ></img>
            <img
              src="https://img.freepik.com/photos-premium/prise-vue-aerienne-du-train-photographie-du-viaduc_950002-172700.jpg"
              alt=""
            ></img>
            <p>
              🤝 Collaboration: Open communication and a collaborative design
              process to bring your vision to life.
            </p>
            <p>
              🚀 Innovation: Staying updated with the latest design trends and
              technologies to keep your web presence modern and fresh.
            </p>
            <h6>Let's Design Your Digital Presence</h6>
            <p>
              I'm excited about the opportunity to collaborate with you and
              create a visually stunning and effective web presence for your
              brand. Whether you need a new website, a redesign, or custom
              graphics, let's work together to make your digital vision a
              reality.
            </p>
            <p>📧 RahulDesigns@gmail.com </p>
            <p>📞 795-555-5678 </p>
            <p>🌐 RahulWebDesigns.com</p>
            <h6>Thank you for considering me as your web designer.</h6>
            <p>
              I look forward to turning your ideas into visually captivating
              designs!
            </p>
            <p>Happy Designing! 🌐🎨</p>
          </div>
        }
      />
      <FreelancerDetails
        name="Aravind"
        experience={3}
        personsHired={2}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEABOjjXvNkjGnfPztNqNitNBu4KaTdA0eZw&usqp=CAU"
        biography={
          <div>
            <h1> 🌐 Aravind- Web Designer Extraordinaire 💻 </h1>
            <p>
              Greetings! I'm Aravind, a dedicated web designer with a passion
              for crafting visually stunning and user-friendly digital
              experiences.
            </p>
            <h6>About Me</h6>
            <p>
              With a keen eye for design and [X] years of experience, I've had
              the pleasure of working on a variety of projects, from sleek
              corporate websites to vibrant e-commerce platforms.
            </p>
            <h6>Design Expertise</h6>
            <p>
              🎨 UI/UX Design: Creating intuitive and engaging user interfaces
              for a seamless browsing experience.
            </p>
            <p>
              🖌️ Visual Design: Developing visually appealing graphics and
              layouts that align with brand aesthetics.
            </p>
            <p>
              💡 Wireframing: Translating ideas into wireframes to plan and
              structure website designs effectively.
            </p>
            <h6>Services Offered</h6>
            <p>
              🌐 Website Design: Crafting responsive and modern websites
              tailored to your brand.
            </p>
            <p>
              🎨 Landing Page Design: Captivating and conversion-focused landing
              page designs to drive results.
            </p>
            <p>
              🖼️ Graphic Design: Designing eye-catching visuals for web and
              social media platforms.
            </p>

            <h6>Why Choose Me</h6>
            <p>
              🎨 Creative Solutions: Tailoring designs to meet the unique needs
              of each project.
            </p>
            <img
              src="https://media.istockphoto.com/id/1224339524/photo/responsive-devices-on-home-desktop-showing-web-design-website.jpg?b=1&s=612x612&w=0&k=20&c=F36D39cRg9wb3MpPyoL45uj8psANKib2hmNExDCKOGM="
              alt=""
            ></img>
            <img
              src="https://i.pinimg.com/736x/f2/22/0a/f2220a3a9f775f9c640ce3eceb517f8d.jpg"
              alt=""
            ></img>
            <img
              src="https://img.freepik.com/photos-premium/prise-vue-aerienne-du-train-photographie-du-viaduc_950002-172700.jpg"
              alt=""
            ></img>
            <p>
              🤝 Collaboration: Open communication and a collaborative design
              process to bring your vision to life.
            </p>
            <p>
              🚀 Innovation: Staying updated with the latest design trends and
              technologies to keep your web presence modern and fresh.
            </p>
            <h6>Let's Design Your Digital Presence</h6>
            <p>
              I'm excited about the opportunity to collaborate with you and
              create a visually stunning and effective web presence for your
              brand. Whether you need a new website, a redesign, or custom
              graphics, let's work together to make your digital vision a
              reality.
            </p>
            <p>📧 RahulDesigns@gmail.com </p>
            <p>📞 795-555-5678 </p>
            <p>🌐 RahulWebDesigns.com</p>
            <h6>Thank you for considering me as your web designer.</h6>
            <p>
              I look forward to turning your ideas into visually captivating
              designs!
            </p>
            <p>Happy Designing! 🌐🎨</p>
          </div>
        }
      />
      <FreelancerDetails
        name="Harshitha"
        experience={3}
        personsHired={7}
        imageUrl="data:image/jpeg;base64,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"
        biography={
          <div>
            <h1> 🌐 Harshitha - Web Designer Extraordinaire 💻 </h1>
            <p>
              Greetings! I'm Harshitha, a dedicated web designer with a passion
              for crafting visually stunning and user-friendly digital
              experiences.
            </p>
            <h6>About Me</h6>
            <p>
              With a keen eye for design and [X] years of experience, I've had
              the pleasure of working on a variety of projects, from sleek
              corporate websites to vibrant e-commerce platforms.
            </p>
            <h6>Design Expertise</h6>
            <p>
              🎨 UI/UX Design: Creating intuitive and engaging user interfaces
              for a seamless browsing experience.
            </p>
            <p>
              🖌️ Visual Design: Developing visually appealing graphics and
              layouts that align with brand aesthetics.
            </p>
            <p>
              💡 Wireframing: Translating ideas into wireframes to plan and
              structure website designs effectively.
            </p>
            <h6>Services Offered</h6>
            <p>
              🌐 Website Design: Crafting responsive and modern websites
              tailored to your brand.
            </p>
            <p>
              🎨 Landing Page Design: Captivating and conversion-focused landing
              page designs to drive results.
            </p>
            <p>
              🖼️ Graphic Design: Designing eye-catching visuals for web and
              social media platforms.
            </p>

            <h6>Why Choose Me</h6>
            <p>
              🎨 Creative Solutions: Tailoring designs to meet the unique needs
              of each project.
            </p>
            <img
              src="https://media.istockphoto.com/id/1224339524/photo/responsive-devices-on-home-desktop-showing-web-design-website.jpg?b=1&s=612x612&w=0&k=20&c=F36D39cRg9wb3MpPyoL45uj8psANKib2hmNExDCKOGM="
              alt=""
            ></img>
            <img
              src="https://i.pinimg.com/736x/f2/22/0a/f2220a3a9f775f9c640ce3eceb517f8d.jpg"
              alt=""
            ></img>
            <img
              src="https://img.freepik.com/photos-premium/prise-vue-aerienne-du-train-photographie-du-viaduc_950002-172700.jpg"
              alt=""
            ></img>
            <p>
              🤝 Collaboration: Open communication and a collaborative design
              process to bring your vision to life.
            </p>
            <p>
              🚀 Innovation: Staying updated with the latest design trends and
              technologies to keep your web presence modern and fresh.
            </p>
            <h6>Let's Design Your Digital Presence</h6>
            <p>
              I'm excited about the opportunity to collaborate with you and
              create a visually stunning and effective web presence for your
              brand. Whether you need a new website, a redesign, or custom
              graphics, let's work together to make your digital vision a
              reality.
            </p>
            <p>📧 RahulDesigns@gmail.com </p>
            <p>📞 795-555-5678 </p>
            <p>🌐 RahulWebDesigns.com</p>
            <h6>Thank you for considering me as your web designer.</h6>
            <p>
              I look forward to turning your ideas into visually captivating
              designs!
            </p>
            <p>Happy Designing! 🌐🎨</p>
          </div>
        }
      />
      <FreelancerDetails
        name="Yogith"
        experience={4}
        personsHired={6}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_-TheciWFgp1Yp0N9Fk-9nzHO6af70y14FbQpL0N444DkuYfX9ewZtW-sdWaoI5OxQQ&usqp=CAU"
        biography={
          <div>
            <h1> 🌐 Yogith - Web Designer Extraordinaire 💻 </h1>
            <p>
              Greetings! I'm Yogith, a dedicated web designer with a passion for
              crafting visually stunning and user-friendly digital experiences.
            </p>
            <h6>About Me</h6>
            <p>
              With a keen eye for design and [X] years of experience, I've had
              the pleasure of working on a variety of projects, from sleek
              corporate websites to vibrant e-commerce platforms.
            </p>
            <h6>Design Expertise</h6>
            <p>
              🎨 UI/UX Design: Creating intuitive and engaging user interfaces
              for a seamless browsing experience.
            </p>
            <p>
              🖌️ Visual Design: Developing visually appealing graphics and
              layouts that align with brand aesthetics.
            </p>
            <p>
              💡 Wireframing: Translating ideas into wireframes to plan and
              structure website designs effectively.
            </p>
            <h6>Services Offered</h6>
            <p>
              🌐 Website Design: Crafting responsive and modern websites
              tailored to your brand.
            </p>
            <p>
              🎨 Landing Page Design: Captivating and conversion-focused landing
              page designs to drive results.
            </p>
            <p>
              🖼️ Graphic Design: Designing eye-catching visuals for web and
              social media platforms.
            </p>

            <h6>Why Choose Me</h6>
            <p>
              🎨 Creative Solutions: Tailoring designs to meet the unique needs
              of each project.
            </p>
            <img
              src="https://media.istockphoto.com/id/1224339524/photo/responsive-devices-on-home-desktop-showing-web-design-website.jpg?b=1&s=612x612&w=0&k=20&c=F36D39cRg9wb3MpPyoL45uj8psANKib2hmNExDCKOGM="
              alt=""
            ></img>
            <img
              src="https://i.pinimg.com/736x/f2/22/0a/f2220a3a9f775f9c640ce3eceb517f8d.jpg"
              alt=""
            ></img>
            <img
              src="https://img.freepik.com/photos-premium/prise-vue-aerienne-du-train-photographie-du-viaduc_950002-172700.jpg"
              alt=""
            ></img>
            <p>
              🤝 Collaboration: Open communication and a collaborative design
              process to bring your vision to life.
            </p>
            <p>
              🚀 Innovation: Staying updated with the latest design trends and
              technologies to keep your web presence modern and fresh.
            </p>
            <h6>Let's Design Your Digital Presence</h6>
            <p>
              I'm excited about the opportunity to collaborate with you and
              create a visually stunning and effective web presence for your
              brand. Whether you need a new website, a redesign, or custom
              graphics, let's work together to make your digital vision a
              reality.
            </p>
            <p>📧 RahulDesigns@gmail.com </p>
            <p>📞 795-555-5678 </p>
            <p>🌐 RahulWebDesigns.com</p>
            <h6>Thank you for considering me as your web designer.</h6>
            <p>
              I look forward to turning your ideas into visually captivating
              designs!
            </p>
            <p>Happy Designing! 🌐🎨</p>
          </div>
        }
      />
      <FreelancerDetails
        name="Zelsi"
        experience={3}
        personsHired={4}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPaTZgEjw_Z4oX5omk7fTyJKpt6mLZp5EEugP5SPBcFx6YTqT7NEVSipCrdG8VxndbPmM&usqp=CAU"
        biography={
          <div>
            <h1> 🌐 Zelsi - Web Designer Extraordinaire 💻 </h1>
            <p>
              Greetings! I'm Zelsi, a dedicated web designer with a passion for
              crafting visually stunning and user-friendly digital experiences.
            </p>
            <h6>About Me</h6>
            <p>
              With a keen eye for design and [X] years of experience, I've had
              the pleasure of working on a variety of projects, from sleek
              corporate websites to vibrant e-commerce platforms.
            </p>
            <h6>Design Expertise</h6>
            <p>
              🎨 UI/UX Design: Creating intuitive and engaging user interfaces
              for a seamless browsing experience.
            </p>
            <p>
              🖌️ Visual Design: Developing visually appealing graphics and
              layouts that align with brand aesthetics.
            </p>
            <p>
              💡 Wireframing: Translating ideas into wireframes to plan and
              structure website designs effectively.
            </p>
            <h6>Services Offered</h6>
            <p>
              🌐 Website Design: Crafting responsive and modern websites
              tailored to your brand.
            </p>
            <p>
              🎨 Landing Page Design: Captivating and conversion-focused landing
              page designs to drive results.
            </p>
            <p>
              🖼️ Graphic Design: Designing eye-catching visuals for web and
              social media platforms.
            </p>

            <h6>Why Choose Me</h6>
            <p>
              🎨 Creative Solutions: Tailoring designs to meet the unique needs
              of each project.
            </p>
            <img
              src="https://media.istockphoto.com/id/1224339524/photo/responsive-devices-on-home-desktop-showing-web-design-website.jpg?b=1&s=612x612&w=0&k=20&c=F36D39cRg9wb3MpPyoL45uj8psANKib2hmNExDCKOGM="
              alt=""
            ></img>
            <img
              src="https://i.pinimg.com/736x/f2/22/0a/f2220a3a9f775f9c640ce3eceb517f8d.jpg"
              alt=""
            ></img>
            <img
              src="https://img.freepik.com/photos-premium/prise-vue-aerienne-du-train-photographie-du-viaduc_950002-172700.jpg"
              alt=""
            ></img>
            <p>
              🤝 Collaboration: Open communication and a collaborative design
              process to bring your vision to life.
            </p>
            <p>
              🚀 Innovation: Staying updated with the latest design trends and
              technologies to keep your web presence modern and fresh.
            </p>
            <h6>Let's Design Your Digital Presence</h6>
            <p>
              I'm excited about the opportunity to collaborate with you and
              create a visually stunning and effective web presence for your
              brand. Whether you need a new website, a redesign, or custom
              graphics, let's work together to make your digital vision a
              reality.
            </p>
            <p>📧 RahulDesigns@gmail.com </p>
            <p>📞 795-555-5678 </p>
            <p>🌐 RahulWebDesigns.com</p>
            <h6>Thank you for considering me as your web designer.</h6>
            <p>
              I look forward to turning your ideas into visually captivating
              designs!
            </p>
            <p>Happy Designing! 🌐🎨</p>
          </div>
        }
      />
      <FreelancerDetails
        name="Sowrav"
        experience={5}
        personsHired={9}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKaMSbzi0bpN_wZaURB13vCm5S3Pt5-1OCvw&usqp=CAU"
        biography={
          <div>
            <h1> 🌐 Sowrav - Web Designer Extraordinaire 💻 </h1>
            <p>
              Greetings! I'm Sowrav, a dedicated web designer with a passion for
              crafting visually stunning and user-friendly digital experiences.
            </p>
            <h6>About Me</h6>
            <p>
              With a keen eye for design and [X] years of experience, I've had
              the pleasure of working on a variety of projects, from sleek
              corporate websites to vibrant e-commerce platforms.
            </p>
            <h6>Design Expertise</h6>
            <p>
              🎨 UI/UX Design: Creating intuitive and engaging user interfaces
              for a seamless browsing experience.
            </p>
            <p>
              🖌️ Visual Design: Developing visually appealing graphics and
              layouts that align with brand aesthetics.
            </p>
            <p>
              💡 Wireframing: Translating ideas into wireframes to plan and
              structure website designs effectively.
            </p>
            <h6>Services Offered</h6>
            <p>
              🌐 Website Design: Crafting responsive and modern websites
              tailored to your brand.
            </p>
            <p>
              🎨 Landing Page Design: Captivating and conversion-focused landing
              page designs to drive results.
            </p>
            <p>
              🖼️ Graphic Design: Designing eye-catching visuals for web and
              social media platforms.
            </p>

            <h6>Why Choose Me</h6>
            <p>
              🎨 Creative Solutions: Tailoring designs to meet the unique needs
              of each project.
            </p>
            <img
              src="https://media.istockphoto.com/id/1224339524/photo/responsive-devices-on-home-desktop-showing-web-design-website.jpg?b=1&s=612x612&w=0&k=20&c=F36D39cRg9wb3MpPyoL45uj8psANKib2hmNExDCKOGM="
              alt=""
            ></img>
            <img
              src="https://i.pinimg.com/736x/f2/22/0a/f2220a3a9f775f9c640ce3eceb517f8d.jpg"
              alt=""
            ></img>
            <img
              src="https://img.freepik.com/photos-premium/prise-vue-aerienne-du-train-photographie-du-viaduc_950002-172700.jpg"
              alt=""
            ></img>
            <p>
              🤝 Collaboration: Open communication and a collaborative design
              process to bring your vision to life.
            </p>
            <p>
              🚀 Innovation: Staying updated with the latest design trends and
              technologies to keep your web presence modern and fresh.
            </p>
            <h6>Let's Design Your Digital Presence</h6>
            <p>
              I'm excited about the opportunity to collaborate with you and
              create a visually stunning and effective web presence for your
              brand. Whether you need a new website, a redesign, or custom
              graphics, let's work together to make your digital vision a
              reality.
            </p>
            <p>📧 RahulDesigns@gmail.com </p>
            <p>📞 795-555-5678 </p>
            <p>🌐 RahulWebDesigns.com</p>
            <h6>Thank you for considering me as your web designer.</h6>
            <p>
              I look forward to turning your ideas into visually captivating
              designs!
            </p>
            <p>Happy Designing! 🌐🎨</p>
          </div>
        }
      />
    </div>
  );
};

export default Webdesign;

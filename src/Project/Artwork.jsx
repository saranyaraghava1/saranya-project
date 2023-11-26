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

const Artwork = () => {
  return (
    <div>
      <FreelancerDetails
        name="Santhosh"
        experience={2}
        personsHired={14}
        imageUrl="https://images.unsplash.com/photo-1529066792305-5e4efa40fde9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0aXN0fGVufDB8fDB8fHww"
        biography={
          <div>
            <h1> 🎨 Santhosh - Creative Artist </h1>
            <p>
              Greetings! I'm Santhosh, a passionate artwork professional with a
              love for bringing creativity to life through visual expressions.
            </p>
            <h5>About Me</h5>
            <p>
              With a rich background in the world of art, I've dedicated my
              skills to transforming ideas into captivating visual masterpieces.
              My artistic journey has been a blend of traditional techniques and
              modern innovation, creating a unique signature for each project.
            </p>
            <h5>Artistic Expertise</h5>
            <p>
              🎨 Illustrations: Proficient in both digital and traditional
              illustration methods. 🖼️ Painting: Acrylics, watercolors, and
              mixed media creations.
            </p>
            <p>
              🎭 Graphic Design: Crafting visually appealing designs for various
              purposes. ✨ Art Direction: Providing creative direction to bring
              visions to life.
            </p>
            <h5>Services Offered</h5>
            <p>
              🖌️ Custom Artworks: Tailored creations for personal or business
              use.
            </p>
            <p>
              🎨 Logo Design: Crafting unique and memorable logos that represent
              your brand. 🌈 Artistic Consultation: Collaborative sessions to
              bring your artistic visions to reality.
            </p>
            <p>
              🎨 Portraits: Immortalize special moments with personalized
              portraits. 🖋️ Digital Art: Creating modern and vibrant digital
              artworks.
            </p>
            <h5>Philosophy</h5>
            <p>
              I believe that art has the power to evoke emotions, tell stories,
              and create connections. Each stroke of my brush or click of my pen
              is infused with passion and dedication to delivering artworks that
              resonate with your vision.
            </p>
            <h5>Why Choose Me</h5>
            <p>
              🎨 Unique Creations: Every artwork is a one-of-a-kind masterpiece.
            </p>
            <img
              src="https://i.ytimg.com/vi/Pg_J0FEtADo/maxresdefault.jpg"
              alt=""
            ></img>

            <img
              src="https://images.nightcafe.studio/jobs/CxNT89Cv84uutcvSWgYm/CxNT89Cv84uutcvSWgYm--grid.jpg?tr=w-1600,c-at_max"
              alt=""
            ></img>
            <p>
              🤝 Collaboration: Open communication and a collaborative artistic
              process. ✨ Innovation: Embracing new techniques and styles to
              keep the artwork fresh and modern.
            </p>
            <h5>Let's Create Art Together</h5>
            <p>
              I'm thrilled to be on this artistic journey, and I invite you to
              join me. Whether you're looking for a personalized artwork, a logo
              that speaks volumes, or creative direction for your project, let's
              collaborate and bring your vision to life.
            </p>
            <p>📧 CreativeArt@gmail.com </p>
            <p>📞 795-555-1234 </p>
            <p>🌐 AanyaArtworks.com</p>
            <h5>Thank you for considering me as your artwork professional.</h5>
            <p>
              I look forward to turning your ideas into stunning visual
              expressions!
            </p>
            <p>Happy Creating! 🎨✨</p>
          </div>
        }
      />
      <FreelancerDetails
        name="Catherine"
        experience={5}
        personsHired={27}
        imageUrl="https://images.unsplash.com/photo-1611244419377-b0a760c19719?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        biography={
          <div>
            <h1> 🎨 Catherine- Creative Artist </h1>
            <p>
              Greetings! I'm Catherine, a passionate artwork professional with a
              love for bringing creativity to life through visual expressions.
            </p>
            <h5>About Me</h5>
            <p>
              With a rich background in the world of art, I've dedicated my
              skills to transforming ideas into captivating visual masterpieces.
              My artistic journey has been a blend of traditional techniques and
              modern innovation, creating a unique signature for each project.
            </p>
            <h5>Artistic Expertise</h5>
            <p>
              🎨 Illustrations: Proficient in both digital and traditional
              illustration methods. 🖼️ Painting: Acrylics, watercolors, and
              mixed media creations.
            </p>
            <p>
              🎭 Graphic Design: Crafting visually appealing designs for various
              purposes. ✨ Art Direction: Providing creative direction to bring
              visions to life.
            </p>
            <h5>Services Offered</h5>
            <p>
              🖌️ Custom Artworks: Tailored creations for personal or business
              use.
            </p>
            <p>
              🎨 Logo Design: Crafting unique and memorable logos that represent
              your brand. 🌈 Artistic Consultation: Collaborative sessions to
              bring your artistic visions to reality.
            </p>
            <p>
              🎨 Portraits: Immortalize special moments with personalized
              portraits. 🖋️ Digital Art: Creating modern and vibrant digital
              artworks.
            </p>
            <h5>Philosophy</h5>
            <p>
              I believe that art has the power to evoke emotions, tell stories,
              and create connections. Each stroke of my brush or click of my pen
              is infused with passion and dedication to delivering artworks that
              resonate with your vision.
            </p>
            <h5>Why Choose Me</h5>
            <p>
              🎨 Unique Creations: Every artwork is a one-of-a-kind masterpiece.
            </p>
            <img
              src="https://i.ytimg.com/vi/Pg_J0FEtADo/maxresdefault.jpg"
              alt=""
            ></img>

            <img
              src="https://images.nightcafe.studio/jobs/CxNT89Cv84uutcvSWgYm/CxNT89Cv84uutcvSWgYm--grid.jpg?tr=w-1600,c-at_max"
              alt=""
            ></img>
            <p>
              🤝 Collaboration: Open communication and a collaborative artistic
              process. ✨ Innovation: Embracing new techniques and styles to
              keep the artwork fresh and modern.
            </p>
            <h5>Let's Create Art Together</h5>
            <p>
              I'm thrilled to be on this artistic journey, and I invite you to
              join me. Whether you're looking for a personalized artwork, a logo
              that speaks volumes, or creative direction for your project, let's
              collaborate and bring your vision to life.
            </p>
            <p>📧 CreativeArt@gmail.com </p>
            <p>📞 795-555-1234 </p>
            <p>🌐 AanyaArtworks.com</p>
            <h5>Thank you for considering me as your artwork professional.</h5>
            <p>
              I look forward to turning your ideas into stunning visual
              expressions!
            </p>
            <p>Happy Creating! 🎨✨</p>
          </div>
        }
      />
      <FreelancerDetails
        name="Preethi"
        experience={2}
        personsHired={8}
        imageUrl="https://media.istockphoto.com/id/1474847847/photo/asian-woman-blogger-outdoors.webp?b=1&s=170667a&w=0&k=20&c=Xyjl_w5W-S-tYg1k3Wf-B4qLHrYoa2NkQV0Klgcn2kc="
        biography={
          <div>
            <h1> 🎨 Preethi - Creative Artist </h1>
            <p>
              Greetings! I'm Preethi, a passionate artwork professional with a
              love for bringing creativity to life through visual expressions.
            </p>
            <h5>About Me</h5>
            <p>
              With a rich background in the world of art, I've dedicated my
              skills to transforming ideas into captivating visual masterpieces.
              My artistic journey has been a blend of traditional techniques and
              modern innovation, creating a unique signature for each project.
            </p>
            <h5>Artistic Expertise</h5>
            <p>
              🎨 Illustrations: Proficient in both digital and traditional
              illustration methods. 🖼️ Painting: Acrylics, watercolors, and
              mixed media creations.
            </p>
            <p>
              🎭 Graphic Design: Crafting visually appealing designs for various
              purposes. ✨ Art Direction: Providing creative direction to bring
              visions to life.
            </p>
            <h5>Services Offered</h5>
            <p>
              🖌️ Custom Artworks: Tailored creations for personal or business
              use.
            </p>
            <p>
              🎨 Logo Design: Crafting unique and memorable logos that represent
              your brand. 🌈 Artistic Consultation: Collaborative sessions to
              bring your artistic visions to reality.
            </p>
            <p>
              🎨 Portraits: Immortalize special moments with personalized
              portraits. 🖋️ Digital Art: Creating modern and vibrant digital
              artworks.
            </p>
            <h5>Philosophy</h5>
            <p>
              I believe that art has the power to evoke emotions, tell stories,
              and create connections. Each stroke of my brush or click of my pen
              is infused with passion and dedication to delivering artworks that
              resonate with your vision.
            </p>
            <h5>Why Choose Me</h5>
            <p>
              🎨 Unique Creations: Every artwork is a one-of-a-kind masterpiece.
            </p>
            <img
              src="https://i.ytimg.com/vi/Pg_J0FEtADo/maxresdefault.jpg"
              alt=""
            ></img>

            <img
              src="https://images.nightcafe.studio/jobs/CxNT89Cv84uutcvSWgYm/CxNT89Cv84uutcvSWgYm--grid.jpg?tr=w-1600,c-at_max"
              alt=""
            ></img>
            <p>
              🤝 Collaboration: Open communication and a collaborative artistic
              process. ✨ Innovation: Embracing new techniques and styles to
              keep the artwork fresh and modern.
            </p>
            <h5>Let's Create Art Together</h5>
            <p>
              I'm thrilled to be on this artistic journey, and I invite you to
              join me. Whether you're looking for a personalized artwork, a logo
              that speaks volumes, or creative direction for your project, let's
              collaborate and bring your vision to life.
            </p>
            <p>📧 CreativeArt@gmail.com </p>
            <p>📞 795-555-1234 </p>
            <p>🌐 AanyaArtworks.com</p>
            <h5>Thank you for considering me as your artwork professional.</h5>
            <p>
              I look forward to turning your ideas into stunning visual
              expressions!
            </p>
            <p>Happy Creating! 🎨✨</p>
          </div>
        }
      />
      <FreelancerDetails
        name="Rashmi"
        experience={8}
        personsHired={21}
        imageUrl="https://images.unsplash.com/photo-1551180452-aea351b23949?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ0aXN0fGVufDB8fDB8fHww"
        biography={
          <div>
            <h1> 🎨 Rashmi- Creative Artist </h1>
            <p>
              Greetings! I'm Rashmi,a passionate artwork professional with a
              love for bringing creativity to life through visual expressions.
            </p>
            <h5>About Me</h5>
            <p>
              With a rich background in the world of art, I've dedicated my
              skills to transforming ideas into captivating visual masterpieces.
              My artistic journey has been a blend of traditional techniques and
              modern innovation, creating a unique signature for each project.
            </p>
            <h5>Artistic Expertise</h5>
            <p>
              🎨 Illustrations: Proficient in both digital and traditional
              illustration methods. 🖼️ Painting: Acrylics, watercolors, and
              mixed media creations.
            </p>
            <p>
              🎭 Graphic Design: Crafting visually appealing designs for various
              purposes. ✨ Art Direction: Providing creative direction to bring
              visions to life.
            </p>
            <h5>Services Offered</h5>
            <p>
              🖌️ Custom Artworks: Tailored creations for personal or business
              use.
            </p>
            <p>
              🎨 Logo Design: Crafting unique and memorable logos that represent
              your brand. 🌈 Artistic Consultation: Collaborative sessions to
              bring your artistic visions to reality.
            </p>
            <p>
              🎨 Portraits: Immortalize special moments with personalized
              portraits. 🖋️ Digital Art: Creating modern and vibrant digital
              artworks.
            </p>
            <h5>Philosophy</h5>
            <p>
              I believe that art has the power to evoke emotions, tell stories,
              and create connections. Each stroke of my brush or click of my pen
              is infused with passion and dedication to delivering artworks that
              resonate with your vision.
            </p>
            <h5>Why Choose Me</h5>
            <p>
              🎨 Unique Creations: Every artwork is a one-of-a-kind masterpiece.
            </p>
            <img
              src="https://i.ytimg.com/vi/Pg_J0FEtADo/maxresdefault.jpg"
              alt=""
            ></img>

            <img
              src="https://images.nightcafe.studio/jobs/CxNT89Cv84uutcvSWgYm/CxNT89Cv84uutcvSWgYm--grid.jpg?tr=w-1600,c-at_max"
              alt=""
            ></img>
            <p>
              🤝 Collaboration: Open communication and a collaborative artistic
              process. ✨ Innovation: Embracing new techniques and styles to
              keep the artwork fresh and modern.
            </p>
            <h5>Let's Create Art Together</h5>
            <p>
              I'm thrilled to be on this artistic journey, and I invite you to
              join me. Whether you're looking for a personalized artwork, a logo
              that speaks volumes, or creative direction for your project, let's
              collaborate and bring your vision to life.
            </p>
            <p>📧 CreativeArt@gmail.com </p>
            <p>📞 795-555-1234 </p>
            <p>🌐 AanyaArtworks.com</p>
            <h5>Thank you for considering me as your artwork professional.</h5>
            <p>
              I look forward to turning your ideas into stunning visual
              expressions!
            </p>
            <p>Happy Creating! 🎨✨</p>
          </div>
        }
      />
      <FreelancerDetails
        name="Yaswanth"
        experience={5}
        personsHired={20}
        imageUrl="https://media.istockphoto.com/id/1415537841/photo/asian-graphic-designer-working-in-office-artist-creative-designer-illustrator-graphic-skill.webp?b=1&s=170667a&w=0&k=20&c=nGiCN1ZsKYIiMT6KzP2u2EWCGDvxIw114qZrKbPbMik="
        biography={
          <div>
            <h1> 🎨 Yaswanth - Creative Artist </h1>
            <p>
              Greetings! I'm Yaswanth, a passionate artwork professional with a
              love for bringing creativity to life through visual expressions.
            </p>
            <h5>About Me</h5>
            <p>
              With a rich background in the world of art, I've dedicated my
              skills to transforming ideas into captivating visual masterpieces.
              My artistic journey has been a blend of traditional techniques and
              modern innovation, creating a unique signature for each project.
            </p>
            <h5>Artistic Expertise</h5>
            <p>
              🎨 Illustrations: Proficient in both digital and traditional
              illustration methods. 🖼️ Painting: Acrylics, watercolors, and
              mixed media creations.
            </p>
            <p>
              🎭 Graphic Design: Crafting visually appealing designs for various
              purposes. ✨ Art Direction: Providing creative direction to bring
              visions to life.
            </p>
            <h5>Services Offered</h5>
            <p>
              🖌️ Custom Artworks: Tailored creations for personal or business
              use.
            </p>
            <p>
              🎨 Logo Design: Crafting unique and memorable logos that represent
              your brand. 🌈 Artistic Consultation: Collaborative sessions to
              bring your artistic visions to reality.
            </p>
            <p>
              🎨 Portraits: Immortalize special moments with personalized
              portraits. 🖋️ Digital Art: Creating modern and vibrant digital
              artworks.
            </p>
            <h5>Philosophy</h5>
            <p>
              I believe that art has the power to evoke emotions, tell stories,
              and create connections. Each stroke of my brush or click of my pen
              is infused with passion and dedication to delivering artworks that
              resonate with your vision.
            </p>
            <h5>Why Choose Me</h5>
            <p>
              🎨 Unique Creations: Every artwork is a one-of-a-kind masterpiece.
            </p>
            <img
              src="https://i.ytimg.com/vi/Pg_J0FEtADo/maxresdefault.jpg"
              alt=""
            ></img>

            <img
              src="https://images.nightcafe.studio/jobs/CxNT89Cv84uutcvSWgYm/CxNT89Cv84uutcvSWgYm--grid.jpg?tr=w-1600,c-at_max"
              alt=""
            ></img>
            <p>
              🤝 Collaboration: Open communication and a collaborative artistic
              process. ✨ Innovation: Embracing new techniques and styles to
              keep the artwork fresh and modern.
            </p>
            <h5>Let's Create Art Together</h5>
            <p>
              I'm thrilled to be on this artistic journey, and I invite you to
              join me. Whether you're looking for a personalized artwork, a logo
              that speaks volumes, or creative direction for your project, let's
              collaborate and bring your vision to life.
            </p>
            <p>📧 CreativeArt@gmail.com </p>
            <p>📞 795-555-1234 </p>
            <p>🌐 AanyaArtworks.com</p>
            <h5>Thank you for considering me as your artwork professional.</h5>
            <p>
              I look forward to turning your ideas into stunning visual
              expressions!
            </p>
            <p>Happy Creating! 🎨✨</p>
          </div>
        }
      />
      <FreelancerDetails
        name="Adin Mariam"
        experience={2}
        personsHired={10}
        imageUrl="data:image/jpeg;base64,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"
        biography={
          <div>
            <h1> 🎨 Adin Mariam- Creative Artist </h1>
            <p>
              Greetings! I'm Adin Mariam, a passionate artwork professional with
              a love for bringing creativity to life through visual expressions.
            </p>
            <h5>About Me</h5>
            <p>
              With a rich background in the world of art, I've dedicated my
              skills to transforming ideas into captivating visual masterpieces.
              My artistic journey has been a blend of traditional techniques and
              modern innovation, creating a unique signature for each project.
            </p>
            <h5>Artistic Expertise</h5>
            <p>
              🎨 Illustrations: Proficient in both digital and traditional
              illustration methods. 🖼️ Painting: Acrylics, watercolors, and
              mixed media creations.
            </p>
            <p>
              🎭 Graphic Design: Crafting visually appealing designs for various
              purposes. ✨ Art Direction: Providing creative direction to bring
              visions to life.
            </p>
            <h5>Services Offered</h5>
            <p>
              🖌️ Custom Artworks: Tailored creations for personal or business
              use.
            </p>
            <p>
              🎨 Logo Design: Crafting unique and memorable logos that represent
              your brand. 🌈 Artistic Consultation: Collaborative sessions to
              bring your artistic visions to reality.
            </p>
            <p>
              🎨 Portraits: Immortalize special moments with personalized
              portraits. 🖋️ Digital Art: Creating modern and vibrant digital
              artworks.
            </p>
            <h5>Philosophy</h5>
            <p>
              I believe that art has the power to evoke emotions, tell stories,
              and create connections. Each stroke of my brush or click of my pen
              is infused with passion and dedication to delivering artworks that
              resonate with your vision.
            </p>
            <h5>Why Choose Me</h5>
            <p>
              🎨 Unique Creations: Every artwork is a one-of-a-kind masterpiece.
            </p>
            <img
              src="https://i.ytimg.com/vi/Pg_J0FEtADo/maxresdefault.jpg"
              alt=""
            ></img>

            <img
              src="https://images.nightcafe.studio/jobs/CxNT89Cv84uutcvSWgYm/CxNT89Cv84uutcvSWgYm--grid.jpg?tr=w-1600,c-at_max"
              alt=""
            ></img>
            <p>
              🤝 Collaboration: Open communication and a collaborative artistic
              process. ✨ Innovation: Embracing new techniques and styles to
              keep the artwork fresh and modern.
            </p>
            <h5>Let's Create Art Together</h5>
            <p>
              I'm thrilled to be on this artistic journey, and I invite you to
              join me. Whether you're looking for a personalized artwork, a logo
              that speaks volumes, or creative direction for your project, let's
              collaborate and bring your vision to life.
            </p>
            <p>📧 CreativeArt@gmail.com </p>
            <p>📞 795-555-1234 </p>
            <p>🌐 AanyaArtworks.com</p>
            <h5>Thank you for considering me as your artwork professional.</h5>
            <p>
              I look forward to turning your ideas into stunning visual
              expressions!
            </p>
            <p>Happy Creating! 🎨✨</p>
          </div>
        }
      />
      <FreelancerDetails
        name="Saira"
        experience={5}
        personsHired={15}
        imageUrl="data:image/jpeg;base64,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"
        biography={
          <div>
            <h1> 🎨 Saira - Creative Artist </h1>
            <p>
              Greetings! I'm Saira, a passionate artwork professional with a
              love for bringing creativity to life through visual expressions.
            </p>
            <h5>About Me</h5>
            <p>
              With a rich background in the world of art, I've dedicated my
              skills to transforming ideas into captivating visual masterpieces.
              My artistic journey has been a blend of traditional techniques and
              modern innovation, creating a unique signature for each project.
            </p>
            <h5>Artistic Expertise</h5>
            <p>
              🎨 Illustrations: Proficient in both digital and traditional
              illustration methods. 🖼️ Painting: Acrylics, watercolors, and
              mixed media creations.
            </p>
            <p>
              🎭 Graphic Design: Crafting visually appealing designs for various
              purposes. ✨ Art Direction: Providing creative direction to bring
              visions to life.
            </p>
            <h5>Services Offered</h5>
            <p>
              🖌️ Custom Artworks: Tailored creations for personal or business
              use.
            </p>
            <p>
              🎨 Logo Design: Crafting unique and memorable logos that represent
              your brand. 🌈 Artistic Consultation: Collaborative sessions to
              bring your artistic visions to reality.
            </p>
            <p>
              🎨 Portraits: Immortalize special moments with personalized
              portraits. 🖋️ Digital Art: Creating modern and vibrant digital
              artworks.
            </p>
            <h5>Philosophy</h5>
            <p>
              I believe that art has the power to evoke emotions, tell stories,
              and create connections. Each stroke of my brush or click of my pen
              is infused with passion and dedication to delivering artworks that
              resonate with your vision.
            </p>
            <h5>Why Choose Me</h5>
            <p>
              🎨 Unique Creations: Every artwork is a one-of-a-kind masterpiece.
            </p>
            <img
              src="https://i.ytimg.com/vi/Pg_J0FEtADo/maxresdefault.jpg"
              alt=""
            ></img>

            <img
              src="https://images.nightcafe.studio/jobs/CxNT89Cv84uutcvSWgYm/CxNT89Cv84uutcvSWgYm--grid.jpg?tr=w-1600,c-at_max"
              alt=""
            ></img>
            <p>
              🤝 Collaboration: Open communication and a collaborative artistic
              process. ✨ Innovation: Embracing new techniques and styles to
              keep the artwork fresh and modern.
            </p>
            <h5>Let's Create Art Together</h5>
            <p>
              I'm thrilled to be on this artistic journey, and I invite you to
              join me. Whether you're looking for a personalized artwork, a logo
              that speaks volumes, or creative direction for your project, let's
              collaborate and bring your vision to life.
            </p>
            <p>📧 CreativeArt@gmail.com </p>
            <p>📞 795-555-1234 </p>
            <p>🌐 AanyaArtworks.com</p>
            <h5>Thank you for considering me as your artwork professional.</h5>
            <p>
              I look forward to turning your ideas into stunning visual
              expressions!
            </p>
            <p>Happy Creating! 🎨✨</p>
          </div>
        }
      />
      <FreelancerDetails
        name="Hari"
        experience={10}
        personsHired={25}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyPOYM_LO3xJL0_gVUxZeb5j4fnC3-58j77xmOBZitCld9uDdUpENK4Fw5N9o9TCn0GDg&usqp=CAU"
        biography={
          <div>
            <h1> 🎨 Hari - Creative Artist </h1>
            <p>
              Greetings! I'm Hari, a passionate artwork professional with a love
              for bringing creativity to life through visual expressions.
            </p>
            <h5>About Me</h5>
            <p>
              With a rich background in the world of art, I've dedicated my
              skills to transforming ideas into captivating visual masterpieces.
              My artistic journey has been a blend of traditional techniques and
              modern innovation, creating a unique signature for each project.
            </p>
            <h5>Artistic Expertise</h5>
            <p>
              🎨 Illustrations: Proficient in both digital and traditional
              illustration methods. 🖼️ Painting: Acrylics, watercolors, and
              mixed media creations.
            </p>
            <p>
              🎭 Graphic Design: Crafting visually appealing designs for various
              purposes. ✨ Art Direction: Providing creative direction to bring
              visions to life.
            </p>
            <h5>Services Offered</h5>
            <p>
              🖌️ Custom Artworks: Tailored creations for personal or business
              use.
            </p>
            <p>
              🎨 Logo Design: Crafting unique and memorable logos that represent
              your brand. 🌈 Artistic Consultation: Collaborative sessions to
              bring your artistic visions to reality.
            </p>
            <p>
              🎨 Portraits: Immortalize special moments with personalized
              portraits. 🖋️ Digital Art: Creating modern and vibrant digital
              artworks.
            </p>
            <h5>Philosophy</h5>
            <p>
              I believe that art has the power to evoke emotions, tell stories,
              and create connections. Each stroke of my brush or click of my pen
              is infused with passion and dedication to delivering artworks that
              resonate with your vision.
            </p>
            <h5>Why Choose Me</h5>
            <p>
              🎨 Unique Creations: Every artwork is a one-of-a-kind masterpiece.
            </p>
            <img
              src="https://i.ytimg.com/vi/Pg_J0FEtADo/maxresdefault.jpg"
              alt=""
            ></img>

            <img
              src="https://images.nightcafe.studio/jobs/CxNT89Cv84uutcvSWgYm/CxNT89Cv84uutcvSWgYm--grid.jpg?tr=w-1600,c-at_max"
              alt=""
            ></img>
            <p>
              🤝 Collaboration: Open communication and a collaborative artistic
              process. ✨ Innovation: Embracing new techniques and styles to
              keep the artwork fresh and modern.
            </p>
            <h5>Let's Create Art Together</h5>
            <p>
              I'm thrilled to be on this artistic journey, and I invite you to
              join me. Whether you're looking for a personalized artwork, a logo
              that speaks volumes, or creative direction for your project, let's
              collaborate and bring your vision to life.
            </p>
            <p>📧 CreativeArt@gmail.com </p>
            <p>📞 795-555-1234 </p>
            <p>🌐 AanyaArtworks.com</p>
            <h5>Thank you for considering me as your artwork professional.</h5>
            <p>
              I look forward to turning your ideas into stunning visual
              expressions!
            </p>
            <p>Happy Creating! 🎨✨</p>
          </div>
        }
      />

      <FreelancerDetails
        name="Dharun"
        experience={2}
        personsHired={5}
        imageUrl="https://img.freepik.com/premium-photo/young-handsome-man-holding-palette_1368-52402.jpg?w=2000"
        biography={
          <div>
            <h1> 🎨 Dharun - Creative Artist </h1>
            <p>
              Greetings! I'm Dharun, a passionate artwork professional with a
              love for bringing creativity to life through visual expressions.
            </p>
            <h5>About Me</h5>
            <p>
              With a rich background in the world of art, I've dedicated my
              skills to transforming ideas into captivating visual masterpieces.
              My artistic journey has been a blend of traditional techniques and
              modern innovation, creating a unique signature for each project.
            </p>
            <h5>Artistic Expertise</h5>
            <p>
              🎨 Illustrations: Proficient in both digital and traditional
              illustration methods. 🖼️ Painting: Acrylics, watercolors, and
              mixed media creations.
            </p>
            <p>
              🎭 Graphic Design: Crafting visually appealing designs for various
              purposes. ✨ Art Direction: Providing creative direction to bring
              visions to life.
            </p>
            <h5>Services Offered</h5>
            <p>
              🖌️ Custom Artworks: Tailored creations for personal or business
              use.
            </p>
            <p>
              🎨 Logo Design: Crafting unique and memorable logos that represent
              your brand. 🌈 Artistic Consultation: Collaborative sessions to
              bring your artistic visions to reality.
            </p>
            <p>
              🎨 Portraits: Immortalize special moments with personalized
              portraits. 🖋️ Digital Art: Creating modern and vibrant digital
              artworks.
            </p>
            <h5>Philosophy</h5>
            <p>
              I believe that art has the power to evoke emotions, tell stories,
              and create connections. Each stroke of my brush or click of my pen
              is infused with passion and dedication to delivering artworks that
              resonate with your vision.
            </p>
            <h5>Why Choose Me</h5>
            <p>
              🎨 Unique Creations: Every artwork is a one-of-a-kind masterpiece.
            </p>
            <img
              src="https://i.ytimg.com/vi/Pg_J0FEtADo/maxresdefault.jpg"
              alt=""
            ></img>

            <img
              src="https://images.nightcafe.studio/jobs/CxNT89Cv84uutcvSWgYm/CxNT89Cv84uutcvSWgYm--grid.jpg?tr=w-1600,c-at_max"
              alt=""
            ></img>
            <p>
              🤝 Collaboration: Open communication and a collaborative artistic
              process. ✨ Innovation: Embracing new techniques and styles to
              keep the artwork fresh and modern.
            </p>
            <h5>Let's Create Art Together</h5>
            <p>
              I'm thrilled to be on this artistic journey, and I invite you to
              join me. Whether you're looking for a personalized artwork, a logo
              that speaks volumes, or creative direction for your project, let's
              collaborate and bring your vision to life.
            </p>
            <p>📧 CreativeArt@gmail.com </p>
            <p>📞 795-555-1234 </p>
            <p>🌐 AanyaArtworks.com</p>
            <h5>Thank you for considering me as your artwork professional.</h5>
            <p>
              I look forward to turning your ideas into stunning visual
              expressions!
            </p>
            <p>Happy Creating! 🎨✨</p>
          </div>
        }
      />
    </div>
  );
};

export default Artwork;

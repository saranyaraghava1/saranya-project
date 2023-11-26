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

const Logodesign = () => {
  return (
    <div>
      <FreelancerDetails
        name="seema sen"
        experience={3}
        personsHired={6}
        imageUrl="https://media.istockphoto.com/id/933431904/photo/business-woman-meeting-with-colleagues-in-the-office.jpg?s=2048x2048&w=is&k=20&c=PA1XYewS3UyFDLD-Kss7iNWLrOODNBx_cvF7UJYKwOs="
        biography={
          <div className="bio-container">
            <h2>🎨 Logo Creator & Graphic Designer 🎨</h2>
            <p>
              Greetings! I'm seema sen, a dedicated logo creator and graphic
              designer passionate about turning concepts into visually
              compelling brand identities. With a keen eye for aesthetics and
              [X] years of experience, I offer a platform for individuals and
              businesses to bring their ideas to life through unique and
              memorable logos.
            </p>
            <p>
              🚀 Services Offered:
              <ul>
                <li>Custom Logo Design</li>
                <li>Brand Identity Development</li>
                <li>Graphic Design Solutions</li>
                <li>Tailored Visual Branding</li>
              </ul>
            </p>
            <img
              style={{ width: "500px" }}
              src="data:image/jpeg;base64,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"
              alt=""
            ></img>
            <p>
              🌟 What to Expect:
              <ul>
                <li>Personalized and Original Designs</li>
                <li>Timely Delivery of High-Quality Work</li>
                <li>Collaborative Approach to Capture Your Vision</li>
                <li>Transparent Communication Throughout the Process</li>
              </ul>
            </p>
            <p>
              💡 Ready to get started? Feel free to upload your ideas, concepts,
              or any inspiration you have in mind, and let's collaborate to
              create a logo that speaks volumes about your brand.
            </p>

            <div className="contact-info">
              📧 Email:Logodesignerhmail.com
              <br />
              📱 Phone: 93354677345
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />
      <FreelancerDetails
        name="Sophian Sam"
        experience={5}
        personsHired={11}
        imageUrl="https://media.istockphoto.com/id/1415537841/photo/asian-graphic-designer-working-in-office-artist-creative-designer-illustrator-graphic-skill.webp?b=1&s=170667a&w=0&k=20&c=nGiCN1ZsKYIiMT6KzP2u2EWCGDvxIw114qZrKbPbMik="
        biography={
          <div className="bio-container">
            <h2>🎨 Logo Creator & Graphic Designer 🎨</h2>
            <p>
              Greetings! I'm Sophia, a dedicated logo creator and graphic
              designer passionate about turning concepts into visually
              compelling brand identities. With a keen eye for aesthetics and
              [X] years of experience, I offer a platform for individuals and
              businesses to bring their ideas to life through unique and
              memorable logos.
            </p>
            <p>
              🚀 Services Offered:
              <ul>
                <li>Custom Logo Design</li>
                <li>Brand Identity Development</li>
                <li>Graphic Design Solutions</li>
                <li>Tailored Visual Branding</li>
              </ul>
            </p>
            <img
              style={{ width: "500px" }}
              src="data:image/jpeg;base64,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"
              alt=""
            ></img>
            <p>
              🌟 What to Expect:
              <ul>
                <li>Personalized and Original Designs</li>
                <li>Timely Delivery of High-Quality Work</li>
                <li>Collaborative Approach to Capture Your Vision</li>
                <li>Transparent Communication Throughout the Process</li>
              </ul>
            </p>
            <p>
              💡 Ready to get started? Feel free to upload your ideas, concepts,
              or any inspiration you have in mind, and let's collaborate to
              create a logo that speaks volumes about your brand.
            </p>

            <div className="contact-info">
              📧 Email:Logodesignerhmail.com
              <br />
              📱 Phone: 93354677345
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />

      <FreelancerDetails
        name="Ram"
        experience={8}
        personsHired={11}
        imageUrl="https://media.istockphoto.com/id/1449299278/photo/image-of-video-editor-working-with-footage-and-post-production-montage-in-creative-office.jpg?s=612x612&w=0&k=20&c=V_YAUXy3vEKHxjxx-ztH_lfuYjRwk4nu7auxgzTJpZ0="
        biography={
          <div className="bio-container">
            <h2>🎨 Logo Creator & Graphic Designer 🎨</h2>
            <p>
              Greetings! I'm Ram, a dedicated logo creator and graphic designer
              passionate about turning concepts into visually compelling brand
              identities. With a keen eye for aesthetics and [X] years of
              experience, I offer a platform for individuals and businesses to
              bring their ideas to life through unique and memorable logos.
            </p>
            <p>
              🚀 Services Offered:
              <ul>
                <li>Custom Logo Design</li>
                <li>Brand Identity Development</li>
                <li>Graphic Design Solutions</li>
                <li>Tailored Visual Branding</li>
              </ul>
            </p>
            <img
              style={{ width: "500px" }}
              src="data:image/jpeg;base64,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"
              alt=""
            ></img>
            <p>
              🌟 What to Expect:
              <ul>
                <li>Personalized and Original Designs</li>
                <li>Timely Delivery of High-Quality Work</li>
                <li>Collaborative Approach to Capture Your Vision</li>
                <li>Transparent Communication Throughout the Process</li>
              </ul>
            </p>
            <p>
              💡 Ready to get started? Feel free to upload your ideas, concepts,
              or any inspiration you have in mind, and let's collaborate to
              create a logo that speaks volumes about your brand.
            </p>

            <div className="contact-info">
              📧 Email:Logodesignerhmail.com
              <br />
              📱 Phone: 93354677345
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />
      <FreelancerDetails
        name="Prithika"
        experience={3}
        personsHired={4}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPaTZgEjw_Z4oX5omk7fTyJKpt6mLZp5EEugP5SPBcFx6YTqT7NEVSipCrdG8VxndbPmM&usqp=CAU"
        biography={
          <div className="bio-container">
            <h2>🎨 Logo Creator & Graphic Designer 🎨</h2>
            <p>
              Greetings! I'm Pritthika, a dedicated logo creator and graphic
              designer passionate about turning concepts into visually
              compelling brand identities. With a keen eye for aesthetics and
              [X] years of experience, I offer a platform for individuals and
              businesses to bring their ideas to life through unique and
              memorable logos.
            </p>
            <p>
              🚀 Services Offered:
              <ul>
                <li>Custom Logo Design</li>
                <li>Brand Identity Development</li>
                <li>Graphic Design Solutions</li>
                <li>Tailored Visual Branding</li>
              </ul>
            </p>
            <img
              style={{ width: "500px" }}
              src="data:image/jpeg;base64,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"
              alt=""
            ></img>
            <p>
              🌟 What to Expect:
              <ul>
                <li>Personalized and Original Designs</li>
                <li>Timely Delivery of High-Quality Work</li>
                <li>Collaborative Approach to Capture Your Vision</li>
                <li>Transparent Communication Throughout the Process</li>
              </ul>
            </p>
            <p>
              💡 Ready to get started? Feel free to upload your ideas, concepts,
              or any inspiration you have in mind, and let's collaborate to
              create a logo that speaks volumes about your brand.
            </p>

            <div className="contact-info">
              📧 Email:Logodesignerhmail.com
              <br />
              📱 Phone: 93354677345
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />
      <FreelancerDetails
        name="Asim Dev"
        experience={5}
        personsHired={9}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKaMSbzi0bpN_wZaURB13vCm5S3Pt5-1OCvw&usqp=CAU"
        biography={
          <div className="bio-container">
            <h2>🎨 Logo Creator & Graphic Designer 🎨</h2>
            <p>
              Greetings! I'm seema sen, a dedicated logo creator and graphic
              designer passionate about turning concepts into visually
              compelling brand identities. With a keen eye for aesthetics and
              [X] years of experience, I offer a platform for individuals and
              businesses to bring their ideas to life through unique and
              memorable logos.
            </p>
            <p>
              🚀 Services Offered:
              <ul>
                <li>Custom Logo Design</li>
                <li>Brand Identity Development</li>
                <li>Graphic Design Solutions</li>
                <li>Tailored Visual Branding</li>
              </ul>
            </p>
            <img
              style={{ width: "500px" }}
              src="data:image/jpeg;base64,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"
              alt=""
            ></img>
            <p>
              🌟 What to Expect:
              <ul>
                <li>Personalized and Original Designs</li>
                <li>Timely Delivery of High-Quality Work</li>
                <li>Collaborative Approach to Capture Your Vision</li>
                <li>Transparent Communication Throughout the Process</li>
              </ul>
            </p>
            <p>
              💡 Ready to get started? Feel free to upload your ideas, concepts,
              or any inspiration you have in mind, and let's collaborate to
              create a logo that speaks volumes about your brand.
            </p>

            <div className="contact-info">
              📧 Email:Logodesignerhmail.com
              <br />
              📱 Phone: 93354677345
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />
      <FreelancerDetails
        name="Vikashni"
        experience={6}
        personsHired={4}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQNwU5wbDwTvH3YT9LyiEn-eSPqQIPMBUC-g&usqp=CAU"
        biography={
          <div className="bio-container">
            <h2>🎨 Logo Creator & Graphic Designer 🎨</h2>
            <p>
              Greetings! I'm Vikashini, a dedicated logo creator and graphic
              designer passionate about turning concepts into visually
              compelling brand identities. With a keen eye for aesthetics and
              [X] years of experience, I offer a platform for individuals and
              businesses to bring their ideas to life through unique and
              memorable logos.
            </p>
            <p>
              🚀 Services Offered:
              <ul>
                <li>Custom Logo Design</li>
                <li>Brand Identity Development</li>
                <li>Graphic Design Solutions</li>
                <li>Tailored Visual Branding</li>
              </ul>
            </p>
            <img
              style={{ width: "500px" }}
              src="data:image/jpeg;base64,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"
              alt=""
            ></img>
            <p>
              🌟 What to Expect:
              <ul>
                <li>Personalized and Original Designs</li>
                <li>Timely Delivery of High-Quality Work</li>
                <li>Collaborative Approach to Capture Your Vision</li>
                <li>Transparent Communication Throughout the Process</li>
              </ul>
            </p>
            <p>
              💡 Ready to get started? Feel free to upload your ideas, concepts,
              or any inspiration you have in mind, and let's collaborate to
              create a logo that speaks volumes about your brand.
            </p>

            <div className="contact-info">
              📧 Email:Logodesignerhmail.com
              <br />
              📱 Phone: 93354677345
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />
      <FreelancerDetails
        name="Awithsa"
        experience={4}
        personsHired={5}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2mI1UXyKNAewAZ9aPFu1OfH_moGvmR5HX5A&usqp=CAU"
        biography={
          <div className="bio-container">
            <h2>🎨 Logo Creator & Graphic Designer 🎨</h2>
            <p>
              Greetings! I'm Awithsa, a dedicated logo creator and graphic
              designer passionate about turning concepts into visually
              compelling brand identities. With a keen eye for aesthetics and
              [X] years of experience, I offer a platform for individuals and
              businesses to bring their ideas to life through unique and
              memorable logos.
            </p>
            <p>
              🚀 Services Offered:
              <ul>
                <li>Custom Logo Design</li>
                <li>Brand Identity Development</li>
                <li>Graphic Design Solutions</li>
                <li>Tailored Visual Branding</li>
              </ul>
            </p>
            <img
              style={{ width: "500px" }}
              src="data:image/jpeg;base64,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"
              alt=""
            ></img>
            <p>
              🌟 What to Expect:
              <ul>
                <li>Personalized and Original Designs</li>
                <li>Timely Delivery of High-Quality Work</li>
                <li>Collaborative Approach to Capture Your Vision</li>
                <li>Transparent Communication Throughout the Process</li>
              </ul>
            </p>
            <p>
              💡 Ready to get started? Feel free to upload your ideas, concepts,
              or any inspiration you have in mind, and let's collaborate to
              create a logo that speaks volumes about your brand.
            </p>

            <div className="contact-info">
              📧 Email:Logodesignerhmail.com
              <br />
              📱 Phone: 93354677345
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />
      <FreelancerDetails
        name="Harish"
        experience={3}
        personsHired={5}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs8ekz3bc7ZwPtIK8kQd9hs9cafBEM0r5ipQ&usqp=CAU"
        biography={
          <div className="bio-container">
            <h2>🎨 Logo Creator & Graphic Designer 🎨</h2>
            <p>
              Greetings! I'm Harish, a dedicated logo creator and graphic
              designer passionate about turning concepts into visually
              compelling brand identities. With a keen eye for aesthetics and
              [X] years of experience, I offer a platform for individuals and
              businesses to bring their ideas to life through unique and
              memorable logos.
            </p>
            <p>
              🚀 Services Offered:
              <ul>
                <li>Custom Logo Design</li>
                <li>Brand Identity Development</li>
                <li>Graphic Design Solutions</li>
                <li>Tailored Visual Branding</li>
              </ul>
            </p>
            <img
              style={{ width: "500px" }}
              src="data:image/jpeg;base64,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"
              alt=""
            ></img>
            <p>
              🌟 What to Expect:
              <ul>
                <li>Personalized and Original Designs</li>
                <li>Timely Delivery of High-Quality Work</li>
                <li>Collaborative Approach to Capture Your Vision</li>
                <li>Transparent Communication Throughout the Process</li>
              </ul>
            </p>
            <p>
              💡 Ready to get started? Feel free to upload your ideas, concepts,
              or any inspiration you have in mind, and let's collaborate to
              create a logo that speaks volumes about your brand.
            </p>

            <div className="contact-info">
              📧 Email:Logodesignerhmail.com
              <br />
              📱 Phone: 93354677345
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />
      <FreelancerDetails
        name="Cathrine"
        experience={9}
        personsHired={10}
        imageUrl="https://media.istockphoto.com/id/1217967906/photo/customer-making-credit-card-payment-at-cashier-counter-in-clothing-store-at-shopping-mall.jpg?s=612x612&w=0&k=20&c=RsS0OIwSpt2EkjD8YqwO5czdszDiFyfMLCbwtAV2i_8="
        biography={
          <div className="bio-container">
            <h2>🎨 Logo Creator & Graphic Designer 🎨</h2>
            <p>
              Greetings! I'm Cathrine, a dedicated logo creator and graphic
              designer passionate about turning concepts into visually
              compelling brand identities. With a keen eye for aesthetics and
              [X] years of experience, I offer a platform for individuals and
              businesses to bring their ideas to life through unique and
              memorable logos.
            </p>
            <p>
              🚀 Services Offered:
              <ul>
                <li>Custom Logo Design</li>
                <li>Brand Identity Development</li>
                <li>Graphic Design Solutions</li>
                <li>Tailored Visual Branding</li>
              </ul>
            </p>
            <img
              style={{ width: "500px" }}
              src="data:image/jpeg;base64,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"
              alt=""
            ></img>
            <p>
              🌟 What to Expect:
              <ul>
                <li>Personalized and Original Designs</li>
                <li>Timely Delivery of High-Quality Work</li>
                <li>Collaborative Approach to Capture Your Vision</li>
                <li>Transparent Communication Throughout the Process</li>
              </ul>
            </p>
            <p>
              💡 Ready to get started? Feel free to upload your ideas, concepts,
              or any inspiration you have in mind, and let's collaborate to
              create a logo that speaks volumes about your brand.
            </p>

            <div className="contact-info">
              📧 Email:Logodesignerhmail.com
              <br />
              📱 Phone: 93354677345
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />
    </div>
  );
};

export default Logodesign;

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

const ContentWriter = () => {
  return (
    <div>
      <FreelancerDetails
        name="Divya"
        experience={4}
        personsHired={9}
        imageUrl="data:image/jpeg;base64,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"
        biography={
          <div className="bio-container">
            <h1>✍️ Content Writer Extraordinaire ✍️</h1>
            <p>
              Greetings! I'm Divya, a versatile content writer passionate about
              weaving words into compelling narratives. With a proven track
              record of [X] years in the industry, I specialize in creating
              engaging and SEO-optimized content that captivates readers and
              drives results.
            </p>
            <p>
              <h1>📚 Expertise:</h1>
              <ul>
                <li>Blog Posts</li>
                <li>Website Content</li>
                <li>SEO Articles</li>
                <li>Social Media Copy</li>
              </ul>
            </p>
            <p>
              <h1>🌐 Niches:</h1>
              <ul>
                <li>Technology</li>
                <li>Travel</li>
                <li>Health and Wellness</li>
                <li>Business and Marketing</li>
              </ul>
            </p>
            <img
              style={{ width: "650px" }}
              src="https://www.shutterstock.com/shutterstock/photos/2266377745/display_1500/stock-vector-creative-idea-inspiration-or-imagination-to-think-about-new-idea-creativity-knowledge-learning-2266377745.jpg"
              alt=""
            ></img>
            <p>
              <h1>🚀 What I Offer:</h1>
              <ul>
                <li>Compelling storytelling</li>
                <li>Thorough research for accurate and informative content</li>
                <li>Adherence to deadlines</li>
                <li>SEO optimization for increased visibility</li>
              </ul>
            </p>
            <p>
              💬 Let's collaborate to bring your ideas to life! Whether you need
              engaging blog posts, informative articles, or captivating website
              content, I'm here to elevate your brand through the power of
              words.
            </p>
            <div className="tags">
              {["ContentWriter", "SEO", "Blogging", "DigitalMarketing"].map(
                (tag) => (
                  <span key={tag} className="tag">{`#${tag}`}</span>
                )
              )}
            </div>
            <div className="contact-info">
              📧 Email: Contentwriter@example.com
              <br />
              📱 phonenumber: 9844763643
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />

      <FreelancerDetails
        name="Manoj"
        experience={4}
        personsHired={9}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpFreAtrOzdfbsrEHLCtHyBDY4x80z6RBeVA&usqp=CAU"
        biography={
          <div className="bio-container">
            <h1>✍️ Content Writer Extraordinaire ✍️</h1>
            <p>
              Greetings! I'm Manoj, a versatile content writer passionate about
              weaving words into compelling narratives. With a proven track
              record of [X] years in the industry, I specialize in creating
              engaging and SEO-optimized content that captivates readers and
              drives results.
            </p>
            <p>
              <h1>📚 Expertise:</h1>
              <ul>
                <li>Blog Posts</li>
                <li>Website Content</li>
                <li>SEO Articles</li>
                <li>Social Media Copy</li>
              </ul>
            </p>
            <p>
              <h1>🌐 Niches:</h1>
              <ul>
                <li>Technology</li>
                <li>Travel</li>
                <li>Health and Wellness</li>
                <li>Business and Marketing</li>
              </ul>
            </p>
            <img
              style={{ width: "650px" }}
              src="https://www.shutterstock.com/shutterstock/photos/2266377745/display_1500/stock-vector-creative-idea-inspiration-or-imagination-to-think-about-new-idea-creativity-knowledge-learning-2266377745.jpg"
              alt=""
            ></img>
            <p>
              <h1>🚀 What I Offer:</h1>
              <ul>
                <li>Compelling storytelling</li>
                <li>Thorough research for accurate and informative content</li>
                <li>Adherence to deadlines</li>
                <li>SEO optimization for increased visibility</li>
              </ul>
            </p>
            <p>
              💬 Let's collaborate to bring your ideas to life! Whether you need
              engaging blog posts, informative articles, or captivating website
              content, I'm here to elevate your brand through the power of
              words.
            </p>
            <div className="tags">
              {["ContentWriter", "SEO", "Blogging", "DigitalMarketing"].map(
                (tag) => (
                  <span key={tag} className="tag">{`#${tag}`}</span>
                )
              )}
            </div>
            <div className="contact-info">
              📧 Email: Contentwriter@example.com
              <br />
              📱 phonenumber: 9844763643
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />

      <FreelancerDetails
        name="Purushothaman"
        experience={4}
        personsHired={9}
        imageUrl="data:image/jpeg;base64,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"
        biography={
          <div className="bio-container">
            <h1>✍️ Content Writer Extraordinaire ✍️</h1>
            <p>
              Greetings! I'm Puru, a versatile content writer passionate about
              weaving words into compelling narratives. With a proven track
              record of [X] years in the industry, I specialize in creating
              engaging and SEO-optimized content that captivates readers and
              drives results.
            </p>
            <p>
              <h1>📚 Expertise:</h1>
              <ul>
                <li>Blog Posts</li>
                <li>Website Content</li>
                <li>SEO Articles</li>
                <li>Social Media Copy</li>
              </ul>
            </p>
            <p>
              <h1>🌐 Niches:</h1>
              <ul>
                <li>Technology</li>
                <li>Travel</li>
                <li>Health and Wellness</li>
                <li>Business and Marketing</li>
              </ul>
            </p>
            <img
              style={{ width: "650px" }}
              src="https://www.shutterstock.com/shutterstock/photos/2266377745/display_1500/stock-vector-creative-idea-inspiration-or-imagination-to-think-about-new-idea-creativity-knowledge-learning-2266377745.jpg"
              alt=""
            ></img>
            <p>
              <h1>🚀 What I Offer:</h1>
              <ul>
                <li>Compelling storytelling</li>
                <li>Thorough research for accurate and informative content</li>
                <li>Adherence to deadlines</li>
                <li>SEO optimization for increased visibility</li>
              </ul>
            </p>
            <p>
              💬 Let's collaborate to bring your ideas to life! Whether you need
              engaging blog posts, informative articles, or captivating website
              content, I'm here to elevate your brand through the power of
              words.
            </p>
            <div className="tags">
              {["ContentWriter", "SEO", "Blogging", "DigitalMarketing"].map(
                (tag) => (
                  <span key={tag} className="tag">{`#${tag}`}</span>
                )
              )}
            </div>
            <div className="contact-info">
              📧 Email: Contentwriter@example.com
              <br />
              📱 phonenumber: 9844763643
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />

      <FreelancerDetails
        name="Nancy"
        experience={4}
        personsHired={9}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyRlSEuuJRBDR1L0pDZiN_W_kz5rsgtnPMlg&usqp=CAU"
        biography={
          <div className="bio-container">
            <h1>✍️ Content Writer Extraordinaire ✍️</h1>
            <p>
              Greetings! I'm Nancy, a versatile content writer passionate about
              weaving words into compelling narratives. With a proven track
              record of [X] years in the industry, I specialize in creating
              engaging and SEO-optimized content that captivates readers and
              drives results.
            </p>
            <p>
              <h1>📚 Expertise:</h1>
              <ul>
                <li>Blog Posts</li>
                <li>Website Content</li>
                <li>SEO Articles</li>
                <li>Social Media Copy</li>
              </ul>
            </p>
            <p>
              <h1>🌐 Niches:</h1>
              <ul>
                <li>Technology</li>
                <li>Travel</li>
                <li>Health and Wellness</li>
                <li>Business and Marketing</li>
              </ul>
            </p>
            <img
              style={{ width: "650px" }}
              src="https://www.shutterstock.com/shutterstock/photos/2266377745/display_1500/stock-vector-creative-idea-inspiration-or-imagination-to-think-about-new-idea-creativity-knowledge-learning-2266377745.jpg"
              alt=""
            ></img>
            <p>
              <h1>🚀 What I Offer:</h1>
              <ul>
                <li>Compelling storytelling</li>
                <li>Thorough research for accurate and informative content</li>
                <li>Adherence to deadlines</li>
                <li>SEO optimization for increased visibility</li>
              </ul>
            </p>
            <p>
              💬 Let's collaborate to bring your ideas to life! Whether you need
              engaging blog posts, informative articles, or captivating website
              content, I'm here to elevate your brand through the power of
              words.
            </p>
            <div className="tags">
              {["ContentWriter", "SEO", "Blogging", "DigitalMarketing"].map(
                (tag) => (
                  <span key={tag} className="tag">{`#${tag}`}</span>
                )
              )}
            </div>
            <div className="contact-info">
              📧 Email: Contentwriter@example.com
              <br />
              📱 phonenumber: 9844763643
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />

      <FreelancerDetails
        name="Dhanush"
        experience={4}
        personsHired={9}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXGwCDL3WpnJ7WB-UkDWLW7mxie5sleNtlug&usqp=CAU"
        biography={
          <div className="bio-container">
            <h1>✍️ Content Writer Extraordinaire ✍️</h1>
            <p>
              Greetings! I'm Dhanush, a versatile content writer passionate
              about weaving words into compelling narratives. With a proven
              track record of [X] years in the industry, I specialize in
              creating engaging and SEO-optimized content that captivates
              readers and drives results.
            </p>
            <p>
              <h1>📚 Expertise:</h1>
              <ul>
                <li>Blog Posts</li>
                <li>Website Content</li>
                <li>SEO Articles</li>
                <li>Social Media Copy</li>
              </ul>
            </p>
            <p>
              <h1>🌐 Niches:</h1>
              <ul>
                <li>Technology</li>
                <li>Travel</li>
                <li>Health and Wellness</li>
                <li>Business and Marketing</li>
              </ul>
            </p>
            <img
              style={{ width: "650px" }}
              src="https://www.shutterstock.com/shutterstock/photos/2266377745/display_1500/stock-vector-creative-idea-inspiration-or-imagination-to-think-about-new-idea-creativity-knowledge-learning-2266377745.jpg"
              alt=""
            ></img>
            <p>
              <h1>🚀 What I Offer:</h1>
              <ul>
                <li>Compelling storytelling</li>
                <li>Thorough research for accurate and informative content</li>
                <li>Adherence to deadlines</li>
                <li>SEO optimization for increased visibility</li>
              </ul>
            </p>
            <p>
              💬 Let's collaborate to bring your ideas to life! Whether you need
              engaging blog posts, informative articles, or captivating website
              content, I'm here to elevate your brand through the power of
              words.
            </p>
            <div className="tags">
              {["ContentWriter", "SEO", "Blogging", "DigitalMarketing"].map(
                (tag) => (
                  <span key={tag} className="tag">{`#${tag}`}</span>
                )
              )}
            </div>
            <div className="contact-info">
              📧 Email: Contentwriter@example.com
              <br />
              📱 phonenumber: 9844763643
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />

      <FreelancerDetails
        name="Maaveran"
        experience={4}
        personsHired={9}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_ze8ULmRywXGNzUgKEcH166XrXgTBoqQZg&usqp=CAU"
        biography={
          <div className="bio-container">
            <h1>✍️ Content Writer Extraordinaire ✍️</h1>
            <p>
              Greetings! I'm Maadhav, a versatile content writer passionate
              about weaving words into compelling narratives. With a proven
              track record of [X] years in the industry, I specialize in
              creating engaging and SEO-optimized content that captivates
              readers and drives results.
            </p>
            <p>
              <h1>📚 Expertise:</h1>
              <ul>
                <li>Blog Posts</li>
                <li>Website Content</li>
                <li>SEO Articles</li>
                <li>Social Media Copy</li>
              </ul>
            </p>
            <p>
              <h1>🌐 Niches:</h1>
              <ul>
                <li>Technology</li>
                <li>Travel</li>
                <li>Health and Wellness</li>
                <li>Business and Marketing</li>
              </ul>
            </p>
            <img
              style={{ width: "650px" }}
              src="https://www.shutterstock.com/shutterstock/photos/2266377745/display_1500/stock-vector-creative-idea-inspiration-or-imagination-to-think-about-new-idea-creativity-knowledge-learning-2266377745.jpg"
              alt=""
            ></img>
            <p>
              <h1>🚀 What I Offer:</h1>
              <ul>
                <li>Compelling storytelling</li>
                <li>Thorough research for accurate and informative content</li>
                <li>Adherence to deadlines</li>
                <li>SEO optimization for increased visibility</li>
              </ul>
            </p>
            <p>
              💬 Let's collaborate to bring your ideas to life! Whether you need
              engaging blog posts, informative articles, or captivating website
              content, I'm here to elevate your brand through the power of
              words.
            </p>
            <div className="tags">
              {["ContentWriter", "SEO", "Blogging", "DigitalMarketing"].map(
                (tag) => (
                  <span key={tag} className="tag">{`#${tag}`}</span>
                )
              )}
            </div>
            <div className="contact-info">
              📧 Email: Contentwriter@example.com
              <br />
              📱 phonenumber: 9844763643
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />

      <FreelancerDetails
        name="Pranika"
        experience={4}
        personsHired={9}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIhi9l4npCGPNWMAc6szDbxp75kjB3c0R5w&usqp=CAU"
        biography={
          <div className="bio-container">
            <h1>✍️ Content Writer Extraordinaire ✍️</h1>
            <p>
              Greetings! I'm Pranika, a versatile content writer passionate
              about weaving words into compelling narratives. With a proven
              track record of [X] years in the industry, I specialize in
              creating engaging and SEO-optimized content that captivates
              readers and drives results.
            </p>
            <p>
              <h1>📚 Expertise:</h1>
              <ul>
                <li>Blog Posts</li>
                <li>Website Content</li>
                <li>SEO Articles</li>
                <li>Social Media Copy</li>
              </ul>
            </p>
            <p>
              <h1>🌐 Niches:</h1>
              <ul>
                <li>Technology</li>
                <li>Travel</li>
                <li>Health and Wellness</li>
                <li>Business and Marketing</li>
              </ul>
            </p>
            <img
              style={{ width: "650px" }}
              src="https://www.shutterstock.com/shutterstock/photos/2266377745/display_1500/stock-vector-creative-idea-inspiration-or-imagination-to-think-about-new-idea-creativity-knowledge-learning-2266377745.jpg"
              alt=""
            ></img>
            <p>
              <h1>🚀 What I Offer:</h1>
              <ul>
                <li>Compelling storytelling</li>
                <li>Thorough research for accurate and informative content</li>
                <li>Adherence to deadlines</li>
                <li>SEO optimization for increased visibility</li>
              </ul>
            </p>
            <p>
              💬 Let's collaborate to bring your ideas to life! Whether you need
              engaging blog posts, informative articles, or captivating website
              content, I'm here to elevate your brand through the power of
              words.
            </p>
            <div className="tags">
              {["ContentWriter", "SEO", "Blogging", "DigitalMarketing"].map(
                (tag) => (
                  <span key={tag} className="tag">{`#${tag}`}</span>
                )
              )}
            </div>
            <div className="contact-info">
              📧 Email: Contentwriter@example.com
              <br />
              📱 phonenumber: 9844763643
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />

      <FreelancerDetails
        name="Karthick"
        experience={4}
        personsHired={9}
        imageUrl="data:image/jpeg;base64,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"
        biography={
          <div className="bio-container">
            <h1>✍️ Content Writer Extraordinaire ✍️</h1>
            <p>
              Greetings! I'm Karthick, a versatile content writer passionate
              about weaving words into compelling narratives. With a proven
              track record of [X] years in the industry, I specialize in
              creating engaging and SEO-optimized content that captivates
              readers and drives results.
            </p>
            <p>
              <h1>📚 Expertise:</h1>
              <ul>
                <li>Blog Posts</li>
                <li>Website Content</li>
                <li>SEO Articles</li>
                <li>Social Media Copy</li>
              </ul>
            </p>
            <p>
              <h1>🌐 Niches:</h1>
              <ul>
                <li>Technology</li>
                <li>Travel</li>
                <li>Health and Wellness</li>
                <li>Business and Marketing</li>
              </ul>
            </p>
            <img
              style={{ width: "650px" }}
              src="https://www.shutterstock.com/shutterstock/photos/2266377745/display_1500/stock-vector-creative-idea-inspiration-or-imagination-to-think-about-new-idea-creativity-knowledge-learning-2266377745.jpg"
              alt=""
            ></img>
            <p>
              <h1>🚀 What I Offer:</h1>
              <ul>
                <li>Compelling storytelling</li>
                <li>Thorough research for accurate and informative content</li>
                <li>Adherence to deadlines</li>
                <li>SEO optimization for increased visibility</li>
              </ul>
            </p>
            <p>
              💬 Let's collaborate to bring your ideas to life! Whether you need
              engaging blog posts, informative articles, or captivating website
              content, I'm here to elevate your brand through the power of
              words.
            </p>
            <div className="tags">
              {["ContentWriter", "SEO", "Blogging", "DigitalMarketing"].map(
                (tag) => (
                  <span key={tag} className="tag">{`#${tag}`}</span>
                )
              )}
            </div>
            <div className="contact-info">
              📧 Email: Contentwriter@example.com
              <br />
              📱 phonenumber: 9844763643
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />
    </div>
  );
};

export default ContentWriter;

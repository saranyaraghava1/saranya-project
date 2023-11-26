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

const CakeBaking = () => {
  return (
    <div>
      <FreelancerDetails
        name="Vignesh"
        experience={1}
        personsHired={3}
        imageUrl="https://media.istockphoto.com/id/693280570/photo/pastry-chef-holding-small-pastry.jpg?s=612x612&w=0&k=20&c=LMS_yiWsMUudNEDsG94WI1oajfOBzd6S7T6_AIXwLAM="
        biography={
          <div className="bio-container">
            <h1>🍰 Cake Baker Extraordinaire 🍰</h1>
            <p>
              Hi there! I'm Vignesh, a passionate cake baker with a flair for
              creating delicious and visually stunning confections. With [X]
              years of experience in the art of baking, I've honed my skills to
              turn ordinary ingredients into extraordinary treats that delight
              the senses.
            </p>
            <p>
              <h1> 🎂 Specialties:</h1>
              <ul>
                <li>Customized Birthday Cakes</li>
                <li>Elegant Wedding Cakes</li>
                <li>Decadent Cupcakes</li>
                <li>Seasonal and Holiday Treats</li>
              </ul>
            </p>
            <p>
              <h1>🌟 What sets me apart:</h1>
              <ul>
                <li>Attention to detail in design and flavor</li>
                <li>Use of high-quality, fresh ingredients</li>
                <li>Adaptability to various themes and preferences</li>
                <li>Timely delivery and professional service</li>
              </ul>
            </p>
            <h1>Some Of my Best designs:</h1>
            <img
              src="https://media.istockphoto.com/id/1150089058/photo/big-black-and-gold-luxury-cake-with-strawberries-and-round-biscuits.jpg?s=612x612&w=0&k=20&c=tRxCfPC4S3sBQcliPOM2p1V-IZnIOYgcjESaBceubYY="
              alt=""
            ></img>
            <img
              style={{ width: "400px", height: "400px" }}
              src="https://media.istockphoto.com/id/646899348/photo/golden-chocolate-cake.jpg?s=612x612&w=0&k=20&c=gjKO3stMUxA2ccjBAuM1WgoWlqy9eeR49ygsyzrK2nc="
              alt=""
            ></img>
            <img
              src="https://3.imimg.com/data3/HR/OW/IMFCP-8247961/files-writeable-uploads-hostgator126810-image-black-white-wedding-cake-500x500.jpg"
              alt=""
            ></img>
            <p>
              💬 Let's create something sweet together! Whether you're
              celebrating a special occasion or just craving a delightful
              dessert, I'm here to turn your ideas into a scrumptious reality.
            </p>
            <h1>Contact Details:</h1>
            <div className="contact-info">
              📧 Email: bestcaker@gmail.com
              <br />
              📱 Phone: 9764532345
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />
      <FreelancerDetails
        name="Shifana"
        experience={6}
        personsHired={18}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqQJSK5J71ebkuBiWpsE8iDYvCUHtAI0jFyE8kEXCOUNe6ukpUq48nzbZayP1rbDPp6Go&usqp=CAU"
        biography={
          <div className="bio-container">
            <h1>🍰 Cake Baker Extraordinaire 🍰</h1>
            <p>
              Hi there! I'm Shifana, a passionate cake baker with a flair for
              creating delicious and visually stunning confections. With [X]
              years of experience in the art of baking, I've honed my skills to
              turn ordinary ingredients into extraordinary treats that delight
              the senses.
            </p>
            <p>
              <h1> 🎂 Specialties:</h1>
              <ul>
                <li>Customized Birthday Cakes</li>
                <li>Elegant Wedding Cakes</li>
                <li>Decadent Cupcakes</li>
                <li>Seasonal and Holiday Treats</li>
              </ul>
            </p>
            <p>
              <h1>🌟 What sets me apart:</h1>
              <ul>
                <li>Attention to detail in design and flavor</li>
                <li>Use of high-quality, fresh ingredients</li>
                <li>Adaptability to various themes and preferences</li>
                <li>Timely delivery and professional service</li>
              </ul>
            </p>
            <h1>Some Of my Best designs:</h1>
            <img
              src="https://media.istockphoto.com/id/1150089058/photo/big-black-and-gold-luxury-cake-with-strawberries-and-round-biscuits.jpg?s=612x612&w=0&k=20&c=tRxCfPC4S3sBQcliPOM2p1V-IZnIOYgcjESaBceubYY="
              alt=""
            ></img>
            <img
              src="https://media.istockphoto.com/id/646899348/photo/golden-chocolate-cake.jpg?s=612x612&w=0&k=20&c=gjKO3stMUxA2ccjBAuM1WgoWlqy9eeR49ygsyzrK2nc="
              alt=""
            ></img>
            <img
              src="https://3.imimg.com/data3/HR/OW/IMFCP-8247961/files-writeable-uploads-hostgator126810-image-black-white-wedding-cake-500x500.jpg"
              alt=""
            ></img>
            <p>
              💬 Let's create something sweet together! Whether you're
              celebrating a special occasion or just craving a delightful
              dessert, I'm here to turn your ideas into a scrumptious reality.
            </p>
            <h1>Contact Details:</h1>
            <div className="contact-info">
              📧 Email: bestcaker@gmail.com
              <br />
              📱 Phone: 9764532345
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />
      <FreelancerDetails
        name="Lohit"
        experience={3}
        personsHired={9}
        imageUrl="https://media.istockphoto.com/id/874492906/photo/a-confectioner-with-a-cake-in-the-bakery.jpg?s=612x612&w=0&k=20&c=ExhrkrrP26f3aBLplxyruHxp2YWZPn_CDJ19YM7pSg4="
        biography={
          <div className="bio-container">
            <h1>🍰 Cake Baker Extraordinaire 🍰</h1>
            <p>
              Hi there! I'm Lohit, a passionate cake baker with a flair for
              creating delicious and visually stunning confections. With [X]
              years of experience in the art of baking, I've honed my skills to
              turn ordinary ingredients into extraordinary treats that delight
              the senses.
            </p>
            <p>
              <h1> 🎂 Specialties:</h1>
              <ul>
                <li>Customized Birthday Cakes</li>
                <li>Elegant Wedding Cakes</li>
                <li>Decadent Cupcakes</li>
                <li>Seasonal and Holiday Treats</li>
              </ul>
            </p>
            <p>
              <h1>🌟 What sets me apart:</h1>
              <ul>
                <li>Attention to detail in design and flavor</li>
                <li>Use of high-quality, fresh ingredients</li>
                <li>Adaptability to various themes and preferences</li>
                <li>Timely delivery and professional service</li>
              </ul>
            </p>
            <h1>Some Of my Best designs:</h1>
            <img
              src="https://media.istockphoto.com/id/1150089058/photo/big-black-and-gold-luxury-cake-with-strawberries-and-round-biscuits.jpg?s=612x612&w=0&k=20&c=tRxCfPC4S3sBQcliPOM2p1V-IZnIOYgcjESaBceubYY="
              alt=""
            ></img>
            <img
              src="https://media.istockphoto.com/id/646899348/photo/golden-chocolate-cake.jpg?s=612x612&w=0&k=20&c=gjKO3stMUxA2ccjBAuM1WgoWlqy9eeR49ygsyzrK2nc="
              alt=""
            ></img>
            <img
              src="https://3.imimg.com/data3/HR/OW/IMFCP-8247961/files-writeable-uploads-hostgator126810-image-black-white-wedding-cake-500x500.jpg"
              alt=""
            ></img>
            <p>
              💬 Let's create something sweet together! Whether you're
              celebrating a special occasion or just craving a delightful
              dessert, I'm here to turn your ideas into a scrumptious reality.
            </p>
            <h1>Contact Details:</h1>
            <div className="contact-info">
              📧 Email: bestcaker@gmail.com
              <br />
              📱 Phone: 9764532345
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />
      <FreelancerDetails
        name="Priya"
        experience={4}
        personsHired={12}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvb8nLntxjC9KNM-aOlmXELGktYt1iq33IsN4TFHxLIXfPmGHfjcW-vq4BvNAIAbF-ekk&usqp=CAU"
        biography={
          <div className="bio-container">
            <h1>🍰 Cake Baker Extraordinaire 🍰</h1>
            <p>
              Hi there! I'm Priya, a passionate cake baker with a flair for
              creating delicious and visually stunning confections. With [X]
              years of experience in the art of baking, I've honed my skills to
              turn ordinary ingredients into extraordinary treats that delight
              the senses.
            </p>
            <p>
              <h1> 🎂 Specialties:</h1>
              <ul>
                <li>Customized Birthday Cakes</li>
                <li>Elegant Wedding Cakes</li>
                <li>Decadent Cupcakes</li>
                <li>Seasonal and Holiday Treats</li>
              </ul>
            </p>
            <p>
              <h1>🌟 What sets me apart:</h1>
              <ul>
                <li>Attention to detail in design and flavor</li>
                <li>Use of high-quality, fresh ingredients</li>
                <li>Adaptability to various themes and preferences</li>
                <li>Timely delivery and professional service</li>
              </ul>
            </p>
            <h1>Some Of my Best designs:</h1>
            <img
              src="https://media.istockphoto.com/id/1150089058/photo/big-black-and-gold-luxury-cake-with-strawberries-and-round-biscuits.jpg?s=612x612&w=0&k=20&c=tRxCfPC4S3sBQcliPOM2p1V-IZnIOYgcjESaBceubYY="
              alt=""
            ></img>
            <img
              style={{ width: "400px", height: "400px" }}
              src="https://media.istockphoto.com/id/646899348/photo/golden-chocolate-cake.jpg?s=612x612&w=0&k=20&c=gjKO3stMUxA2ccjBAuM1WgoWlqy9eeR49ygsyzrK2nc="
              alt=""
            ></img>
            <img
              src="https://3.imimg.com/data3/HR/OW/IMFCP-8247961/files-writeable-uploads-hostgator126810-image-black-white-wedding-cake-500x500.jpg"
              alt=""
            ></img>
            <p>
              💬 Let's create something sweet together! Whether you're
              celebrating a special occasion or just craving a delightful
              dessert, I'm here to turn your ideas into a scrumptious reality.
            </p>
            <h1>Contact Details:</h1>
            <div className="contact-info">
              📧 Email: bestcaker@gmail.com
              <br />
              📱 Phone: 9764532345
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />
      <FreelancerDetails
        name="Mariam"
        experience={2}
        personsHired={4}
        imageUrl="https://media.istockphoto.com/id/1213165121/photo/hispanic-american-female-baker-decorating-vegan-cupcakes.jpg?s=612x612&w=0&k=20&c=rMzicBArBao8LcLgpDaY9_ECTvgr9Oekc_fklkCp3r4="
        biography={
          <div className="bio-container">
            <h1>🍰 Cake Baker Extraordinaire 🍰</h1>
            <p>
              Hi there! I'm Mariam, a passionate cake baker with a flair for
              creating delicious and visually stunning confections. With [X]
              years of experience in the art of baking, I've honed my skills to
              turn ordinary ingredients into extraordinary treats that delight
              the senses.
            </p>
            <p>
              <h1> 🎂 Specialties:</h1>
              <ul>
                <li>Customized Birthday Cakes</li>
                <li>Elegant Wedding Cakes</li>
                <li>Decadent Cupcakes</li>
                <li>Seasonal and Holiday Treats</li>
              </ul>
            </p>
            <p>
              <h1>🌟 What sets me apart:</h1>
              <ul>
                <li>Attention to detail in design and flavor</li>
                <li>Use of high-quality, fresh ingredients</li>
                <li>Adaptability to various themes and preferences</li>
                <li>Timely delivery and professional service</li>
              </ul>
            </p>
            <h1>Some Of my Best designs:</h1>
            <img
              src="https://media.istockphoto.com/id/1150089058/photo/big-black-and-gold-luxury-cake-with-strawberries-and-round-biscuits.jpg?s=612x612&w=0&k=20&c=tRxCfPC4S3sBQcliPOM2p1V-IZnIOYgcjESaBceubYY="
              alt=""
            ></img>
            <img
              style={{ width: "400px", height: "400px" }}
              src="https://media.istockphoto.com/id/646899348/photo/golden-chocolate-cake.jpg?s=612x612&w=0&k=20&c=gjKO3stMUxA2ccjBAuM1WgoWlqy9eeR49ygsyzrK2nc="
              alt=""
            ></img>
            <img
              src="https://3.imimg.com/data3/HR/OW/IMFCP-8247961/files-writeable-uploads-hostgator126810-image-black-white-wedding-cake-500x500.jpg"
              alt=""
            ></img>
            <p>
              💬 Let's create something sweet together! Whether you're
              celebrating a special occasion or just craving a delightful
              dessert, I'm here to turn your ideas into a scrumptious reality.
            </p>
            <h1>Contact Details:</h1>
            <div className="contact-info">
              📧 Email: bestcaker@gmail.com
              <br />
              📱 Phone: 9764532345
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />
      <FreelancerDetails
        name="Oliviya"
        experience={6}
        personsHired={20}
        imageUrl="https://thumbs.dreamstime.com/b/female-baker-bakery-19380991.jpg?w=768"
        biography={
          <div className="bio-container">
            <h1>🍰 Cake Baker Extraordinaire 🍰</h1>
            <p>
              Hi there! I'm Oliviya, a passionate cake baker with a flair for
              creating delicious and visually stunning confections. With [X]
              years of experience in the art of baking, I've honed my skills to
              turn ordinary ingredients into extraordinary treats that delight
              the senses.
            </p>
            <p>
              <h1> 🎂 Specialties:</h1>
              <ul>
                <li>Customized Birthday Cakes</li>
                <li>Elegant Wedding Cakes</li>
                <li>Decadent Cupcakes</li>
                <li>Seasonal and Holiday Treats</li>
              </ul>
            </p>
            <p>
              <h1>🌟 What sets me apart:</h1>
              <ul>
                <li>Attention to detail in design and flavor</li>
                <li>Use of high-quality, fresh ingredients</li>
                <li>Adaptability to various themes and preferences</li>
                <li>Timely delivery and professional service</li>
              </ul>
            </p>
            <h1>Some Of my Best designs:</h1>
            <img
              src="https://media.istockphoto.com/id/1150089058/photo/big-black-and-gold-luxury-cake-with-strawberries-and-round-biscuits.jpg?s=612x612&w=0&k=20&c=tRxCfPC4S3sBQcliPOM2p1V-IZnIOYgcjESaBceubYY="
              alt=""
            ></img>
            <img
              style={{ width: "400px", height: "400px" }}
              src="https://media.istockphoto.com/id/646899348/photo/golden-chocolate-cake.jpg?s=612x612&w=0&k=20&c=gjKO3stMUxA2ccjBAuM1WgoWlqy9eeR49ygsyzrK2nc="
              alt=""
            ></img>
            <img
              src="https://3.imimg.com/data3/HR/OW/IMFCP-8247961/files-writeable-uploads-hostgator126810-image-black-white-wedding-cake-500x500.jpg"
              alt=""
            ></img>
            <p>
              💬 Let's create something sweet together! Whether you're
              celebrating a special occasion or just craving a delightful
              dessert, I'm here to turn your ideas into a scrumptious reality.
            </p>
            <h1>Contact Details:</h1>
            <div className="contact-info">
              📧 Email: bestcaker@gmail.com
              <br />
              📱 Phone: 9764532345
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />
      <FreelancerDetails
        name="Dev"
        experience={4}
        personsHired={4}
        imageUrl="https://media.istockphoto.com/id/1459325073/photo/the-face-of-small-business-success.jpg?s=612x612&w=0&k=20&c=kZcKoWNWCbRIMsZL5g_VslpzDoB-vGKXrWitPoiWwWg="
        biography={
          <div className="bio-container">
            <h1>🍰 Cake Baker Extraordinaire 🍰</h1>
            <p>
              Hi there! I'm Lohit, a passionate cake baker with a flair for
              creating delicious and visually stunning confections. With [X]
              years of experience in the art of baking, I've honed my skills to
              turn ordinary ingredients into extraordinary treats that delight
              the senses.
            </p>
            <p>
              <h1> 🎂 Specialties:</h1>
              <ul>
                <li>Customized Birthday Cakes</li>
                <li>Elegant Wedding Cakes</li>
                <li>Decadent Cupcakes</li>
                <li>Seasonal and Holiday Treats</li>
              </ul>
            </p>
            <p>
              <h1>🌟 What sets me apart:</h1>
              <ul>
                <li>Attention to detail in design and flavor</li>
                <li>Use of high-quality, fresh ingredients</li>
                <li>Adaptability to various themes and preferences</li>
                <li>Timely delivery and professional service</li>
              </ul>
            </p>
            <h1>Some Of my Best designs:</h1>
            <img
              src="https://media.istockphoto.com/id/1150089058/photo/big-black-and-gold-luxury-cake-with-strawberries-and-round-biscuits.jpg?s=612x612&w=0&k=20&c=tRxCfPC4S3sBQcliPOM2p1V-IZnIOYgcjESaBceubYY="
              alt=""
            ></img>
            <img
              style={{ width: "400px", height: "400px" }}
              src="https://media.istockphoto.com/id/646899348/photo/golden-chocolate-cake.jpg?s=612x612&w=0&k=20&c=gjKO3stMUxA2ccjBAuM1WgoWlqy9eeR49ygsyzrK2nc="
              alt=""
            ></img>
            <img
              src="https://3.imimg.com/data3/HR/OW/IMFCP-8247961/files-writeable-uploads-hostgator126810-image-black-white-wedding-cake-500x500.jpg"
              alt=""
            ></img>
            <p>
              💬 Let's create something sweet together! Whether you're
              celebrating a special occasion or just craving a delightful
              dessert, I'm here to turn your ideas into a scrumptious reality.
            </p>
            <h1>Contact Details:</h1>
            <div className="contact-info">
              📧 Email: bestcaker@gmail.com
              <br />
              📱 Phone: 9764532345
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />
      <FreelancerDetails
        name="Sakthi"
        experience={2}
        personsHired={15}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuhiHErlyYCPb3o07i-Y0CIHzxH-5wfYPXuQgj6ukHOgDoqw-glPPZS5NAh0JdLWpmGtA&usqp=CAU"
        biography={
          <div className="bio-container">
            <h1>🍰 Cake Baker Extraordinaire 🍰</h1>
            <p>
              Hi there! I'm Lohit, a passionate cake baker with a flair for
              creating delicious and visually stunning confections. With [X]
              years of experience in the art of baking, I've honed my skills to
              turn ordinary ingredients into extraordinary treats that delight
              the senses.
            </p>
            <p>
              <h1> 🎂 Specialties:</h1>
              <ul>
                <li>Customized Birthday Cakes</li>
                <li>Elegant Wedding Cakes</li>
                <li>Decadent Cupcakes</li>
                <li>Seasonal and Holiday Treats</li>
              </ul>
            </p>
            <p>
              <h1>🌟 What sets me apart:</h1>
              <ul>
                <li>Attention to detail in design and flavor</li>
                <li>Use of high-quality, fresh ingredients</li>
                <li>Adaptability to various themes and preferences</li>
                <li>Timely delivery and professional service</li>
              </ul>
            </p>
            <h1>Some Of my Best designs:</h1>
            <img
              src="https://media.istockphoto.com/id/1150089058/photo/big-black-and-gold-luxury-cake-with-strawberries-and-round-biscuits.jpg?s=612x612&w=0&k=20&c=tRxCfPC4S3sBQcliPOM2p1V-IZnIOYgcjESaBceubYY="
              alt=""
            ></img>
            <img
              style={{ width: "400px", height: "400px" }}
              src="https://media.istockphoto.com/id/646899348/photo/golden-chocolate-cake.jpg?s=612x612&w=0&k=20&c=gjKO3stMUxA2ccjBAuM1WgoWlqy9eeR49ygsyzrK2nc="
              alt=""
            ></img>
            <img
              src="https://3.imimg.com/data3/HR/OW/IMFCP-8247961/files-writeable-uploads-hostgator126810-image-black-white-wedding-cake-500x500.jpg"
              alt=""
            ></img>
            <p>
              💬 Let's create something sweet together! Whether you're
              celebrating a special occasion or just craving a delightful
              dessert, I'm here to turn your ideas into a scrumptious reality.
            </p>
            <h1>Contact Details:</h1>
            <div className="contact-info">
              📧 Email: bestcaker@gmail.com
              <br />
              📱 Phone: 9764532345
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />
      <FreelancerDetails
        name="Rayen"
        experience={6}
        personsHired={11}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEEAz7_yUh2_pgLWQdpsx9v_nTBI_a7toCw&usqp=CAU"
        biography={
          <div className="bio-container">
            <h1>🍰 Cake Baker Extraordinaire 🍰</h1>
            <p>
              Hi there! I'm Rayen, a passionate cake baker with a flair for
              creating delicious and visually stunning confections. With [X]
              years of experience in the art of baking, I've honed my skills to
              turn ordinary ingredients into extraordinary treats that delight
              the senses.
            </p>
            <p>
              <h1> 🎂 Specialties:</h1>
              <ul>
                <li>Customized Birthday Cakes</li>
                <li>Elegant Wedding Cakes</li>
                <li>Decadent Cupcakes</li>
                <li>Seasonal and Holiday Treats</li>
              </ul>
            </p>
            <p>
              <h1>🌟 What sets me apart:</h1>
              <ul>
                <li>Attention to detail in design and flavor</li>
                <li>Use of high-quality, fresh ingredients</li>
                <li>Adaptability to various themes and preferences</li>
                <li>Timely delivery and professional service</li>
              </ul>
            </p>
            <h1>Some Of my Best designs:</h1>
            <img
              src="https://media.istockphoto.com/id/1150089058/photo/big-black-and-gold-luxury-cake-with-strawberries-and-round-biscuits.jpg?s=612x612&w=0&k=20&c=tRxCfPC4S3sBQcliPOM2p1V-IZnIOYgcjESaBceubYY="
              alt=""
            ></img>
            <img
              style={{ width: "400px", height: "400px" }}
              src="https://media.istockphoto.com/id/646899348/photo/golden-chocolate-cake.jpg?s=612x612&w=0&k=20&c=gjKO3stMUxA2ccjBAuM1WgoWlqy9eeR49ygsyzrK2nc="
              alt=""
            ></img>
            <img
              src="https://3.imimg.com/data3/HR/OW/IMFCP-8247961/files-writeable-uploads-hostgator126810-image-black-white-wedding-cake-500x500.jpg"
              alt=""
            ></img>
            <p>
              💬 Let's create something sweet together! Whether you're
              celebrating a special occasion or just craving a delightful
              dessert, I'm here to turn your ideas into a scrumptious reality.
            </p>
            <h1>Contact Details:</h1>
            <div className="contact-info">
              📧 Email: bestcaker@gmail.com
              <br />
              📱 Phone: 9764532345
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />
      <FreelancerDetails
        name="Mayavi"
        experience={2}
        personsHired={15}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuhiHErlyYCPb3o07i-Y0CIHzxH-5wfYPXuQgj6ukHOgDoqw-glPPZS5NAh0JdLWpmGtA&usqp=CAU"
        biography={
          <div className="bio-container">
            <h1>🍰 Cake Baker Extraordinaire 🍰</h1>
            <p>
              Hi there! I'm Mayavi, a passionate cake baker with a flair for
              creating delicious and visually stunning confections. With [X]
              years of experience in the art of baking, I've honed my skills to
              turn ordinary ingredients into extraordinary treats that delight
              the senses.
            </p>
            <p>
              <h1> 🎂 Specialties:</h1>
              <ul>
                <li>Customized Birthday Cakes</li>
                <li>Elegant Wedding Cakes</li>
                <li>Decadent Cupcakes</li>
                <li>Seasonal and Holiday Treats</li>
              </ul>
            </p>
            <p>
              <h1>🌟 What sets me apart:</h1>
              <ul>
                <li>Attention to detail in design and flavor</li>
                <li>Use of high-quality, fresh ingredients</li>
                <li>Adaptability to various themes and preferences</li>
                <li>Timely delivery and professional service</li>
              </ul>
            </p>
            <h1>Some Of my Best designs:</h1>
            <img
              src="https://media.istockphoto.com/id/1150089058/photo/big-black-and-gold-luxury-cake-with-strawberries-and-round-biscuits.jpg?s=612x612&w=0&k=20&c=tRxCfPC4S3sBQcliPOM2p1V-IZnIOYgcjESaBceubYY="
              alt=""
            ></img>
            <img
              style={{ width: "400px", height: "400px" }}
              src="https://media.istockphoto.com/id/646899348/photo/golden-chocolate-cake.jpg?s=612x612&w=0&k=20&c=gjKO3stMUxA2ccjBAuM1WgoWlqy9eeR49ygsyzrK2nc="
              alt=""
            ></img>
            <img
              src="https://3.imimg.com/data3/HR/OW/IMFCP-8247961/files-writeable-uploads-hostgator126810-image-black-white-wedding-cake-500x500.jpg"
              alt=""
            ></img>
            <p>
              💬 Let's create something sweet together! Whether you're
              celebrating a special occasion or just craving a delightful
              dessert, I'm here to turn your ideas into a scrumptious reality.
            </p>
            <h1>Contact Details:</h1>
            <div className="contact-info">
              📧 Email: bestcaker@gmail.com
              <br />
              📱 Phone: 9764532345
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />
      <FreelancerDetails
        name="Revi"
        experience={6}
        personsHired={11}
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIEEAz7_yUh2_pgLWQdpsx9v_nTBI_a7toCw&usqp=CAU"
        biography={
          <div className="bio-container">
            <h1>🍰 Cake Baker Extraordinaire 🍰</h1>
            <p>
              Hi there! I'm Revi, a passionate cake baker with a flair for
              creating delicious and visually stunning confections. With [X]
              years of experience in the art of baking, I've honed my skills to
              turn ordinary ingredients into extraordinary treats that delight
              the senses.
            </p>
            <p>
              <h1> 🎂 Specialties:</h1>
              <ul>
                <li>Customized Birthday Cakes</li>
                <li>Elegant Wedding Cakes</li>
                <li>Decadent Cupcakes</li>
                <li>Seasonal and Holiday Treats</li>
              </ul>
            </p>
            <p>
              <h1>🌟 What sets me apart:</h1>
              <ul>
                <li>Attention to detail in design and flavor</li>
                <li>Use of high-quality, fresh ingredients</li>
                <li>Adaptability to various themes and preferences</li>
                <li>Timely delivery and professional service</li>
              </ul>
            </p>
            <h1>Some Of my Best designs:</h1>
            <img
              src="https://media.istockphoto.com/id/1150089058/photo/big-black-and-gold-luxury-cake-with-strawberries-and-round-biscuits.jpg?s=612x612&w=0&k=20&c=tRxCfPC4S3sBQcliPOM2p1V-IZnIOYgcjESaBceubYY="
              alt=""
            ></img>
            <img
              style={{ width: "400px", height: "400px" }}
              src="https://media.istockphoto.com/id/646899348/photo/golden-chocolate-cake.jpg?s=612x612&w=0&k=20&c=gjKO3stMUxA2ccjBAuM1WgoWlqy9eeR49ygsyzrK2nc="
              alt=""
            ></img>
            <img
              src="https://3.imimg.com/data3/HR/OW/IMFCP-8247961/files-writeable-uploads-hostgator126810-image-black-white-wedding-cake-500x500.jpg"
              alt=""
            ></img>
            <p>
              💬 Let's create something sweet together! Whether you're
              celebrating a special occasion or just craving a delightful
              dessert, I'm here to turn your ideas into a scrumptious reality.
            </p>
            <h1>Contact Details:</h1>
            <div className="contact-info">
              📧 Email: bestcaker@gmail.com
              <br />
              📱 Phone: 9764532345
              <br />
              📍 Location: Kuniyamuthur,Coimbatore
            </div>
          </div>
        }
      />
    </div>
  );
};

export default CakeBaking;

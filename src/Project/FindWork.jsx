import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Find.css";
const FindWork = () => {
  const navigate = useNavigate();

  const buttonStyle = {
    height: "350px",
    width: "550px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    transition:
      "margin 0.3s, border-radius 0.3s, box-shadow 0.3s, border-color 0.3s",
    position: "relative", // Add this style for the hover effect to work properly
  };

  const handleButtonClick = (category) => {
    navigate(`/findfreelancer/${category}`);
  };

  return (
    <div>
      &emsp;&emsp;
      <Button
        className="find-freelance-button"
        onClick={() => handleButtonClick("photography")}
        variant="contained"
        style={{
          ...buttonStyle,
          backgroundImage: 'url("https://wallpapercave.com/wp/wp5144575.jpg")',
        }}
      >
        <h1>Photography</h1>
      </Button>
      &emsp;&emsp;
      <Button
        className="find-freelance-button"
        onClick={() => handleButtonClick("catering")}
        variant="contained"
        style={{
          ...buttonStyle,
          backgroundImage:
            'url("https://cdn.pixabay.com/photo/2019/11/14/11/10/chef-4625935_1280.jpg")',
        }}
      >
        <h1>Catering</h1>
      </Button>
      <br></br>
      <br></br>
      <br></br>
      &emsp;&emsp;
      <Button
        className="find-freelance-button"
        onClick={() => handleButtonClick("makeup")}
        variant="contained"
        style={{
          ...buttonStyle,
          backgroundImage:
            'url("https://media.istockphoto.com/id/1408439145/photo/autumn-skincare-and-autumn-makeup-concept-with-beauty-products-on-table.jpg?s=2048x2048&w=is&k=20&c=OanHc1MH-y256GLbPXt2y3PI7GCsTtpvGm_qFbMA8_4=")',
        }}
      >
        <h1>Make up</h1>
      </Button>
      &emsp;&emsp;
      <Button
        className="find-freelance-button"
        onClick={() => handleButtonClick("artwork")}
        variant="contained"
        style={{
          ...buttonStyle,
          backgroundImage:
            'url("https://media.istockphoto.com/id/538478165/photo/art-equipment.jpg?s=2048x2048&w=is&k=20&c=NKMSRVezYgEBNNjaDt7esF8LIDeDuPhc80cNbtlFfb8=")',
        }}
      >
        <h1>Art Works</h1>
      </Button>
      <br></br>
      <br></br>
      &emsp;&emsp;
      <Button
        className="find-freelance-button"
        onClick={() => handleButtonClick("webdesign")}
        variant="contained"
        style={{
          ...buttonStyle,
          backgroundImage:
            'url("https://img.freepik.com/free-photo/web-design-concepts-with-blurred-background_1134-82.jpg?size=626&ext=jpg&ga=GA1.1.1728003282.1700806121&semt=ais")',
        }}
      >
        <h1>Web Designing</h1>
      </Button>
      &emsp;&emsp;
      <Button
        className="find-freelance-button"
        onClick={() => handleButtonClick("cakebaking")}
        variant="contained"
        style={{
          ...buttonStyle,
          backgroundImage:
            'url("https://cdn.pixabay.com/photo/2014/05/23/23/17/dessert-352475_1280.jpg")',
        }}
      >
        <h1>Cake Baking</h1>
      </Button>
      <br></br>
      <br></br>
      &emsp;&emsp;{" "}
      <Button
        className="find-freelance-button"
        onClick={() => handleButtonClick("webtechnology")}
        variant="contained"
        style={{
          ...buttonStyle,
          backgroundImage:
            'url("https://media.istockphoto.com/id/1488294044/photo/businessman-works-on-laptop-showing-business-analytics-dashboard-with-charts-metrics-and-kpi.jpg?s=2048x2048&w=is&k=20&c=mw1ywS-cmujLOXQ-cp364oGx3fTguinNMEAONPyI66c=")',
        }}
      >
        <h1>Web Technology</h1>
      </Button>
      &emsp;&emsp;
      <Button
        className="find-freelance-button"
        onClick={() => handleButtonClick("logodesign")}
        variant="contained"
        style={{
          ...buttonStyle,
          backgroundImage:
            'url("https://cdn.pixabay.com/photo/2017/01/08/21/58/golden-swing-1964101_1280.png")',
        }}
      >
        <h1>Logo Creator</h1>
      </Button>
      <br></br>
      <br></br>
      &emsp;&emsp;
      <Button
        className="find-freelance-button"
        onClick={() => handleButtonClick("contentwriter")}
        variant="contained"
        style={{
          ...buttonStyle,
          backgroundImage:
            'url("https://images.unsplash.com/photo-1456324504439-367cee3b3c32?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        }}
      >
        <h1>Content Writers</h1>
      </Button>
      &emsp;&emsp;
      <Button
        className="find-freelance-button"
        b
        onClick={() => handleButtonClick("digitalmarketing")}
        variant="contained"
        style={{
          ...buttonStyle,
          backgroundImage:
            'url("https://media.istockphoto.com/id/1449490038/photo/online-shopping-and-e-commerce-technology-concept-shopper-using-computer-laptop-to-input.jpg?s=2048x2048&w=is&k=20&c=3Pmwqsxiy2XTePmajfBQyz2KcnC27QtzaFxNmBD9al0=")',
        }}
      >
        <h1>Digital Marketing</h1>
      </Button>
    </div>
  );
};

export default FindWork;

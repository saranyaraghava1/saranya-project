//APP.JS   // src/App.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Project/Navbar";
import HomePage from "./Project/HomePage";
import About from "./Project/About";
import SignUp from "./Project/SignUp";
import LoginPage from "./Project/LoginPage";
import FindWork from "./Project/FindWork";
import Freelancing from "./Project/Freelancing";
import ForYou from "./Project/ForYou";
import Footer from "./Project/Footer";
import { AuthProvider } from "./Project/AuthContext";
import Photography from "./Project/Photography";
import Catering from "./Project/Catering";
import Artwork from "./Project/Artwork";
import Webdesign from "./Project/Webdesign";
import Makeup from "./Project/Makeup";


const App = () => {
  return (
    <AuthProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="about" element={<About />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="LoginPage" element={<LoginPage />} />
          
          <Route path="findfreelancer" element={<FindWork />} />
        <Route path="findfreelancer/photography" element={<Photography />} />
        <Route path="findfreelancer/catering" element={<Catering />} />
        <Route path="findfreelancer/webdesign" element={<Webdesign />} />
        <Route path="findfreelancer/artwork" element={<Artwork />} />
        <Route path="findfreelancer/makeup" element={<Makeup />} />

          <Route path="freelancing" element={<Freelancing />} />
          <Route path="foryou" element={<ForYou />} />
        </Routes>
        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;

/*
import React from 'react'
import {Routes,Route} from "react-router-dom";
import HomePage from './HomePage'
import About from './About'
import Navbar from './Navbar'
import SignUp from './SignUp';
import LoginPage from './LoginPage';
import FindWork from './FindWork';
import Freelancing from './Freelancing';
import Footer from './Footer';
import ForYou from './ForYou';
const App = () => {
  return (
    <div>
     <Navbar/>
      <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="SignUp" element={<SignUp/>}/>
      <Route path="LoginPage" element={<LoginPage/>}/>
      <Route path="Findfreelancer" element={<FindWork/>}/>
      <Route path="freelancing" element={<Freelancing/>}/>
      <Route path="foryou" element={<ForYou/>}/>
      </Routes>
     <Footer/>
    </div>
  )
}

export default App*/
// import  "./App.css";
// import React from "react";
// //import HomePage from ".Project/HomePage";
// //import Navbar from "./Project/Navbar";
// import { router } from "react-router-dom";

// function App() {
//   return (
//     <div>
//       <router/>
     
//    </div>
//   );
// }
// export default App;
/*/
import React from 'react';
import ButtonDesign from './ReactDay-4/ButtonDesign';
function App() {
  return (
    <div><center>
      <h1>React Mateirial-UI Login </h1>
      <ButtonDesign /></center>
    </div>
  );
}
export default App;/*/
/*/import React from 'react';
import FruitSurvey from "./ReactDay-4/FruitSurvey";
function App() {
  return (
    <div>
      <h1>Student Greeting Form</h1>
      <FruitSurvey />
    </div>
  );
}
export default App;/*/
 /*/ import React from 'react';
import Goku from "./ReactDayThree/Goku";
function App() {
  return (
    <div>
      <Goku />
    </div>
  );
}

export default App;/*/
/*/
import  "./App.css";
import React from "react";
import Navbar from "./Project/Navbar";
import HomePage from "./Project/HomePage";


function App() {
  return (
    <div>
      <Navbar />
   <HomePage />
    </div>
  );
}
export default App;/*/
/*/import React from 'react'
import Login from './Project/Login'
const App = () => {
  return (
    <div>
      <Login/>
    </div>
  )
}
/
export default App;/*/

/*/import React from 'react'
import Toggle from './ReactDayThree/Toggle'

const App = () => {
  return (
    <div><Toggle/></div>
  )
}

export default App

/*/
/*/------------------------------------------------------------------------------------------------
import React from 'react'
import InlineStyles from './Day1/InlineStyles'

const App = () => {
  return (
    <div>
      <InlineStyles/>
  </div>
  )
}
export default App
-----------------------------------------------------------------------------
/*/
/*/import React from 'react'
import Hello from'./components/Hello'
const App = () => {
  return (
    <div>
      <Hello/>
    </div>
  )
}

export default App;
-----------------------------------------------------------------------------------------------
/*/
/*/import "./App.css";

import { useState } from "react";
import Cart from "./CoffeeShop/Cart";
import Menu from "./CoffeeShop/Menu";
import Navbar from "./CoffeeShop/Navbar";
import categories from "./CoffeeShop/products";

function App() {
  const [activeCategory, setActiveCategory] = useState(categories[0]);
  const [products, setProducts] = useState([]);

  const handleClick = (index) => {
    setActiveCategory(categories[index]);
  };

  const handleAddToCart = (item) => {
    setProducts([...products, item]);
  };

  return (
    <div className="space-y-4 my-4">
      <Navbar category={categories} handleClick={handleClick} />
      <Menu activeCategory={activeCategory} handleAddToCart={handleAddToCart} />
      <Cart products={products} />
    </div>
  );
}

export default App;
-------------------------------------------------------------------------------------------
/*/

/*/import Navbar from "./Day1/Navbar";
import Form from "./Day1/Form";
import Footer from "./Day1/Footer";


function App() {
  return (
    <div>
     <Navbar/>
     <Form/>
     <Footer/>

    </div>
  );
};
export default App;/*/
/*/import Count from "./ReactDayThree/Count";
-----------------------------------------------------------------------------------------------------------------
function App() {
  return (
    <div>
      <Count/>
     

    </div>
  );
};

export default App;

/*/
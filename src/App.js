// src/App.js
import React from 'react'
import {Routes,Route} from "react-router-dom";
import HomePage from './Project/HomePage'
import About from './Project/About'
import Navbar from './Project/Navbar'
import SignUp from './Project/SignUp';
import LoginPage from './Project/LoginPage';
import FindWork from './Project/FindWork';
import Freelancing from './Project/Freelancing';
import Footer from './Project/Footer';
import ForYou from './Project/ForYou';
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

export default App
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
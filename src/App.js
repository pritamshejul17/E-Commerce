import Section from './Components/Section'
import Navbar from './Components/Navbar'
import Profile from  './Components/Profile'
import { useState } from 'react';
import LandingPage from  './Pages/LandingPage'
import Shirts from './Components/Shirts'
import Product from  './Pages/Product'
import { Route, Routes } from 'react-router-dom'


function App() {


  const sAll = ["s1.jpg", "s2.jpg", "s3.jpg", "s4.jpg", "s5.jpg", "s6.jpg", "s7.jpg", "s8.jpg"];


  const meta = [{id : 1, info : "PUMA OVERSIZED T-SHIRTS", price : "Rs 1000"}, {id : 2, info : "PUMA OVERSIZED T-SHIRTS", price : "Rs 1000"}, {id : 3, info : "PUMA OVERSIZED T-SHIRTS", price : "Rs 1000"}, {id : 4, info : "PUMA OVERSIZED T-SHIRTS", price : "Rs 1000"}, {id : 5, info : "PUMA OVERSIZED T-SHIRTS", price : "Rs 1000"}, {id : 6, info : "PUMA OVERSIZED T-SHIRTS", price : "Rs 1000"}, {id : 7, info : "PUMA OVERSIZED T-SHIRTS", price : "Rs 1000"}, {id : 8, info : "PUMA OVERSIZED T-SHIRTS", price : "Rs 1000"}];
  var ind = 0;
  const products = meta.map( m => ({...m, name : `${sAll[ind++]}`}));
  const [myArray, setMyArray] = useState(products);

  const [showComponent, setShowComponent] = useState(false);
  const [isPoninted, setIsPointed] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isHovered, setIsHovered] =  useState(false);

  const handleHoveredOn = ()  => {
    setIsHovered(true);
  }

  const handleHoveredOff = () => {
    setIsHovered(false);
  }
  const handleOnProfile = () => {
    setIsProfile(true);
  }

  const handleOffProfile = () => {
    setIsProfile(false);
  }

  const handleOnHover = () => {
    setIsPointed(true);
  }

  const handleOffHover = () => {
    setIsPointed(false);
  }

  const handleMouseEnter = () => {
      setShowComponent(true);
  };

  const handleMouseLeave = () => {
      setShowComponent(false);
  };

  return (
    <>
      <Navbar onHover = {handleMouseEnter} offHover = {handleMouseLeave} isOn = {handleOnProfile} isOff = {handleOffProfile}/>
      { (showComponent || isPoninted) && <Section isTrue = {handleOnHover} isFalse = {handleOffHover}/>}
      { (isProfile || isHovered) && <Profile isSet = {handleHoveredOn} isUnset = {handleHoveredOff}/>}
      
      <Routes>
        <Route path= "/" element = {< LandingPage />}/>
        <Route path = "/men/shirts" element = { <Shirts myArray = {myArray}/>}/>
        <Route path = "men/shirts/:id" element = { <Product myArray = {myArray}/> }/>
      </Routes>
      
      {/* < LandingPage /> */}
      {/* < Shirts /> */}
      {/* <Product /> */}
    </>
  );
}

export default App;

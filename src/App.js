import Section from './Components/Section'
import Navbar from './Components/Navbar'
import Profile from  './Components/Profile'
import { useState } from 'react';
import LandingPage from  './Pages/LandingPage'
import Shirts from './Components/Shirts'
import Product from  './Pages/Product'


function App() {
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
      {/* < LandingPage /> */}
      {/* < Shirts /> */}
      <Product />
    </>
  );
}

export default App;

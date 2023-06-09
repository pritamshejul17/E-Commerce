import Section from './Components/Section'
import Navbar from './Components/Navbar'
import Profile from  './Components/Profile'
import { useState } from 'react';
import LandingPage from  './Pages/LandingPage'
import Shirts from './Components/Shirts'
import Product from  './Pages/Product'
import { Route, Routes } from 'react-router-dom'
import Cart from './Components/Cart'


function App() {


  const sAll = ["s1.jpg", "s2.jpg", "s3.jpg", "s4.jpg", "s5.jpg", "s6.jpg", "s7.jpg", "s8.jpg"];
  const womenAll = ["l1.jpg", "l2.jpg", "l3.jpg", "l4.jpg", "l5.jpg", "l6.jpg", "l7.jpg", "l8.jpg"];

  const wMeta = [{id : 1, info : "TRADITIONAL RAJASHTANI", price : "Rs 4999"}, {id : 2, info : "PUNJABI OVERSIZED LEHNGA", price : "Rs 3999"}, {id : 3, info : "ANARKALI KURTA INDIAN", price : "Rs 2999"}, {id : 4, info : "LEHNGA CHOLI WESTERN", price : "Rs 6999"}, {id : 5, info : "HRX OVERSIZED LIMITED EDI", price : "Rs 3999"}, {id : 6, info : "ANARKALI KURTI EXLUSIVE", price : "Rs 4999"}, {id : 7, info : "TRADITIONAL RAJASHTANI ", price : "Rs 3999"}, {id : 8, info : "TRADITIONAL INDIAN STYLE", price : "Rs 5999"}];
  const meta = [{id : 1, info : "PUMA OVERSIZED T-SHIRTS", price : "Rs 999"}, {id : 2, info : "NIKE OVERSIZED T-SHIRTS", price : "Rs 1999"}, {id : 3, info : "JORDAN OVERSIZED T-SHIRTS", price : "Rs 2999"}, {id : 4, info : "NBM OVERSIZED T-SHIRTS", price : "Rs 1999"}, {id : 5, info : "HRX OVERSIZED T-SHIRTS", price : "Rs 999"}, {id : 6, info : "BEING HUMAN T-SHIRTS", price : "Rs 999"}, {id : 7, info : "ADIDAS OVERSIZED T-SHIRTS", price : "Rs 3999"}, {id : 8, info : "PUMA OVERSIZED T-SHIRTS", price : "Rs 1000"}];
  var ind = 0;
  var indW = 0;

  const womenProducts = wMeta.map(w => ({...w, name : `${womenAll[indW++]}`}));
  const products = meta.map( m => ({...m, name : `${sAll[ind++]}`}));

  const [myArray, setMyArray] = useState(products);
  const [womenArray, setWomenArray] = useState(womenProducts);

  const [showComponent, setShowComponent] = useState(false);
  const [isPoninted, setIsPointed] = useState(false);
  const [isProfile, setIsProfile] = useState(false);
  const [isHovered, setIsHovered] =  useState(false);
  const [cart, setCart] = useState([]);

  const handleCart = (obj) => {
    const newCart = [...cart, obj];
    setCart(newCart);
  }

  const deleteItem = (id) => {
    const array = cart.filter((c) => (c.id !== id));
    setCart(array);
  }

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
        <Route path = "/women/fashion" element = { <Shirts myArray = {womenArray}/>}/>
        <Route path = "/men/shirts/:id" element = { <Product myArray = {myArray} addToCart = {(arg) => handleCart(arg)} /> }/>
        <Route path = "/women/fashion/:id" element = { <Product myArray = {womenArray} addToCart = {(arg) => handleCart(arg)} /> }/>
        <Route path = "/bag" element = { <Cart cart = {cart}  removeFromCart = {(id) => deleteItem(id)}/> }/>
      </Routes>

      <h1 className = 'text-stone-600 font-medium text-lg text-center pt-5 pb-2'>Made with love by <a  target='_blank' className = 'text-red-600 text-xl' href='https://pritamshejul17.github.io/'>Pritam</a></h1>
      {/* <Cart cart = {cart} /> */}
      {/* < LandingPage /> */}
      {/* < Shirts /> */}
      {/* <Product /> */}
    </>
  );
}

export default App;

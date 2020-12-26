import React from "react";

import {Link } from 'react-router-dom'
function Home1(){
  return(
  
  <nav>
  Home Component
  <ul>
    <li>
      <Link exact to='/Home'>Home</Link>
    </li>
    <li>
      <Link to='/About'>About</Link>
     </li>
     <li>
      <Link exact  to='/Contact'>Contact</Link>
     </li>
  </ul>
  </nav>
  )} 
export default Home1;
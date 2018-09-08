import React from "react";
import logo from "./logo.png";
import Tilt from 'react-tilt'
import "./Logo.css";
 

const Logo = () =>{
   return(
    <Tilt className="Tilt" options={{ max : 50 }} style={{ height: 100, marginLeft: "30px", width: 100 }} >
       <div className="left pa2 ma3 f3 logo-background" >
           <div className="Tilt-inner"> <img style={{height: "100px", width: "100px"}} alt="Logo" src={logo} /> </div>
       </div>
    </Tilt> 
   );
}

export default Logo;
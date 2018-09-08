import React from "react";
import "./Recognise.css";

const Recognise = ({ url, box }) =>{
    return(
        <div className="center ma pa3" >
         <div className="absolute mt2">
         <img id="imagesdetect" alt="" src={url} style={{width:400, height:400}} />
            <div  className="bounding-box"
             style={{ top: box.topRow, right: box.rightCol ,  bottom: box.bottomRow, left: box.leftCol }}></div>
         </div>
            
        </div>
    );
}

export default Recognise;
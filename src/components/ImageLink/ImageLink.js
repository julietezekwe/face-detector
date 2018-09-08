import React from "react";
import "./ImageLink.css";

const ImageLink = ({ onButtonSubmit, onInputChange}) =>{
    return(
        <div>
            <p className="f3  white">{"Insert an image url and see the face detected"}</p>
            <div className="center pattern w-50 pa4 ma3 bg-light-red mw7 br2-ns ba b--black-10" style={{}}>
             <input onChange={onInputChange} type="text" placeholder="insert link" className="w-70 pa2 br2 f4" />
             <button type="submit" onClick = {onButtonSubmit} className="w-30 pa2 br1 f4 bg-light-red">Submit</button>
            </div>
        </div>
    );
}

export default ImageLink;
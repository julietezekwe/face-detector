import React from "react";

const Nav = ({route , onbuttonclick}) =>{
    if(route){
        return(
            <p onClick = { () => onbuttonclick('signin')} className="tr m4 pa3 f4 white pointer">{"Sign Out"}</p>
         );
    }
    else{
        return(
            <div style={{display: "flex", justifyContent: "flex-end"}}>
            <p onClick = { () => onbuttonclick('signin')} className="tr m4 pa3 f4 white pointer">{"Sign In"}</p>
            <p onClick = { () => onbuttonclick('signup')} className="tr m4 pa3 f4 white pointer">{"Sign Up"}</p>
            </div>
         );
    }
   
}

export default Nav;
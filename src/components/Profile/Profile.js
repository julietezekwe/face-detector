import React from "react";

const Profile = ({ entries, name}) =>{
    return(
        <div>
           <p className="f3 white">{`${name} , you are ranked  ${Number(entries)}`}</p>
        </div>
    );
}

export default Profile;
import React from "react";

const currentYear = new Date().getFullYear();


const Footer = () => {
    return(

        <div>
        <h3> Copyright by <i className="icon-terminal fa-solid fa-terminal"></i> Fabiola C.Gamboa {currentYear} </h3>
       
        </div>

    )
} 

export default Footer;
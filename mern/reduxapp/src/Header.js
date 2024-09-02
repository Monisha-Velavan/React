import React from "react"
import { NavLink } from "react-router-dom";
function Header() {
    return(
        <div>
            <h1>Navbar</h1>

               <NavLink to ="/home" > Home</NavLink><br/>
               <NavLink to = "/about">About</NavLink><br/>
               <NavLink to = "/contact">Contact</NavLink>  <br/>     
               <NavLink to = "/ web">Contact</NavLink>  <br/>              
                
        </div>
    );
}
export default Header;
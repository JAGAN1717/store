import React from "react"; 
import { NavLink } from "react-router-dom";
import Style from "../Com-3/Reg.css"

const Navbar = () =>{
   return (
       <>
       <div className="c1">
           <br></br><br></br>
       <a href="http://192.168.29.139:7000/home">HOME</a>&nbsp;&nbsp;

      <a href="http://192.168.29.139:7000/product">product</a>&nbsp;&nbsp;
      
      <NavLink to='/Logout'>Logout</NavLink> 
      </div>
       </>
   )
}

export default Navbar
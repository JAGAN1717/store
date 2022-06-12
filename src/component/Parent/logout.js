import React from "react";

const Logout = ({setLogin}) =>{
    const logout = ()=>{
        localStorage.setItem("Loginstatus",false)
       console.log("Loginstatus",localStorage.getItem("Loginstatus"))
        let status = localStorage.getItem("Loginstatus");
        setLogin(status);
        }
   return (
       <>
       <button type="submit" onClick={logout} >LOGOUT</button>
       </>
   )
} 

export default Logout
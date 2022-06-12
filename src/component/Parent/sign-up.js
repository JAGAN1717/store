import React,{useState} from "react";
import Child from "./login/Login"
import axios from "axios";


const Title = () =>{

    const[name,nameData] = useState()
    const[email,emailData] = useState();
    const[phone,phoneData] = useState();
    const[password,passwordData] = useState();
   

    const postData = ()=>{
        console.log(name);
        console.log(email);
        console.log(password);
        console.log(phone);
        axios.post("http://192.168.29.139:7000/api/v1/register",{name,email,phone,password}).then(result=>{
        console.log("result",{result});
        
    }).catch(err=>{
        console.log(err.message);
    })
  }
    return(
        <>
        <div className="sigin">
        <div className="container1">
        <div className="Reg1">
        
       <b> <span>CREATE ACCOUNT</span></b>
        <br></br> <br></br>
            <input type="text" placeholder="userName" name="name" onChange={(val=>nameData(val.target.value))} /><br></br><br></br>
            <input type="text" placeholder="Email" name="email"  onChange={(val=>emailData(val.target.value))} /><br></br><br></br>
            <input type="text" placeholder="mobileNumber" name="phone"  onChange={(val=>phoneData(val.target.value))}/><br></br><br></br>
            <input type="text" placeholder="password" name="password" onChange={(val=>passwordData(val.target.value))} /><br></br><br></br>
            <input type="checkbox" name="agree" id="agree" />
            <label for="agree"> I agree all statements in</label> <a href="#">Terms of service</a><br></br><br></br>
            <button type="submit" onClick={postData}>Sign Up</button><br></br><br></br>
            <span>Have already an account ?</span><p onClick={()=>  window.location.href = '/' }>Login-here</p>
    
        </div></div></div>

        </>
       
    )
}

export default Title
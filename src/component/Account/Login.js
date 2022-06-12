import React,{useState} from "react";
import axios from "axios";
import { Button,Checkbox,Form } from "semantic-ui-react";
import Signup from "../Parent/sign-up"
import Home from "../Com-4/Home";
import Navbar from "../Com-4/nav";
import { NavLink } from "react-router-dom";


const Login = () =>{
    const[name,nameData] = useState()
    const[password,passwordData] = useState();
    const[initial, declareData] = useState(false);
    const[Log,Reg] = useState();
    const[data,setData]=useState('')
    const Register =()=>{
        Reg(<>
        <Signup/></>)
    }

    console.log("initial",initial)
    const changing =()=>{
        declareData(true)
        
    }
   

    const login =()=>{
        console.log("name",name)
        console.log("password",password)
     axios.post("http://192.168.29.139:7000/api/v1/login",{name,password}).then(res=>{
        // console.log(JSON.stringify(res))
         console.log("result",res.data.data.loginStatus)
         console.log("token",res.data.token);
         localStorage.setItem("token",res.data.token);
         declareData(res.data.data.loginStatus)
         setData(res)
         alert("login successfull")

     })
    }

    if(initial == false){
        return(
            <>
       {Log}
       <form>
        <div className="sigin">
        <div className="container1">
        <div className="Reg1">
            <span>Login</span>
      
        <br></br><br></br>
            <input type="text" placeholder="userName" name="name" onChange={(val)=>nameData(val.target.value)} /><br></br><br></br>
            <input type="text" placeholder="password" name="password" onChange={(val)=>passwordData(val.target.value)} /><br></br><br></br>
            {/* <input type="checkbox" name="agree" id="agree" /><span> I Agree</span><br></br> <br></br> */}
            <button type="button" onClick={login}>LOG IN</button><br></br><br></br>
            <a href="">Forget password</a>
            <br></br><br></br>
            <p onClick={()=>  window.location.href = '/signup' }>Create New Account</p><br></br><br></br>
            {/* <a href="" onClick={Register}>Create New Account</a>  */}
            <span>Or login with</span><br></br>
            
        
        <br></br>
        <div className="img">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png" width="40"></img>
        <img src="https://image.similarpng.com/very-thumbnail/2020/12/Flat-design-Google-logo-design-Vector-PNG.png" width="40"></img>
        </div></div></div></div>
        </form>
        </>

        )
    }else{

    return(
        <>
        <Home/>
       </>
        
    )
}
}

export default Login
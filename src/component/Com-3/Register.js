import React,{useState} from "react";
import Style from './Reg.css'
import Reg from "../Parent/sign-up";
import Log from "../Parent/login/Login"
import axios from "axios";




const Register = ()=>{
    const [initialData , changdata] = useState( <Reg/> );    
    const data = ()=>{
    changdata(<Log/>);
    }

    
    return (<>

       {initialData}
         <br></br>
         <span>Have already an account ?</span><a href="#"  onClick={data}>Login here</a><br></br>       
            
             
    </> 
    )
    
}

export default Register;
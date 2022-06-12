import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import DataInd from './component/Com-1/ind'
import Hookcomp from './component/Com-2/sample'
import Register from './component/Com-3/Register';
import Signup from "./component/Parent/sign-up"
import Home from "./component/Com-4/Home"
import Product from "./component/Com-4/Product"
import Logout from './component/Parent/logout';
//import Login from "./component/Parent/login/Login"
import Navbar from "./component/Com-4/nav"
import { useEffect, useState } from 'react';
import Category from "./component/Com-4/Category"
import Login from "./component/Account/Login"

function App() { 
  // const[Loginstatus,setLogin]=useState(true)

  // useEffect(()=>{
  //   console.log("loginstatus",Loginstatus);
  //   let status = localStorage.getItem("Loginstatus");
  //   console.log("loginstatus",status)
  //   setLogin(status)
  //   console.log("setlogin",setLogin(status))
  // },[])
  
  // console.log("init",Loginstatus)
  
  
  return (
    <div className="App">
      <Router>   
          {/* {
         Loginstatus == true ?  <Login setLogin={setLogin}/>   :   <Home/>
        }   */}
       <Routes>
         <Route path='/' element={<Login/>} />
         <Route path='/signup' element={<Signup/>}/>
         <Route path='/home' element={<Home/>} />
         <Route path='/product' element={<Product/>} />
         <Route path='/category' element={<Category/>} />
          {/* <Route path='/logout' element={<Logout setLogin={setLogin} />} />  */}
       </Routes>
     </Router> 

    </div>

    
  );
}

export default App; 

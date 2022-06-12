import React, { useState } from "react";
import Navbar from "../Com-4/nav"
import axios from "axios";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Hom.css"


const Home = () =>{
   
   // const[product,setProduct]=useState('')

   // const productDetails= async()=>{
   //    const result = await axios.get("http://localhost:7000/api/v2/showAllitems",{
   //         headers:{"token":localStorage.getItem('token')}
   //     })
   //     console.log("product",result.data)
       
   //     console.log(JSON.stringify(result.data))
   //     setProduct(result)
   // }




   
    return (
       <>   
       <div className="container2s">
        <div className="home">
 <div className="drobdown">
<a href="#" className="drob">Profile</a>
<div className="drob-con">
<p onClick={()=>  window.location.href = '/' }>Sigin-in</p>
<p onClick={()=>  window.location.href = '/signup' }>Sigin-up</p>
<p onClick={()=>  window.location.href = '/' }>Log-out</p>
</div></div>
<a href="#" onClick={()=>  window.location.href = '/product'}>Product</a>
<a href="#" onClick={()=>  window.location.href = '/category'}>Category</a>
<a href='/home'>Home</a> 
<div className="search">
   <img src="https://dx35vtwkllhj9.cloudfront.net/images/boltHomeEntMerchants/light/skystore_light.png" width={100} / >
   <form>
      <input type="text" placeholder="Search..." name="search" />
      <button type="button"> &#128269;</button>
   </form>
   
</div>
</div>
<div className="row imj">
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_EJMcsfLyIFs9OSjP_T27sMk6m4E7os6s5MELAVKi9Ti6cwa7Sq3Ut5hK5okTqR5qAcw&usqp=CAU"/>
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyMUUKxRyDtaGvdKFvvc7YSPGLW9KJksVhyw&usqp=CAU"/>
   <img src="https://static.digit.in/product/284c81498a93a82db7b5db6600494c20bee4f18e.jpeg?tr=w-1200"/>
   <img src="https://n3.sdlcdn.com/imgs/f/x/q/Urbano-Fashion-Maroon-Henley-T-SDL530970484-2-b0bbb.png"/>
   <img src="https://p2-ofp.static.pub/fes/cms/2021/12/06/tj2weu6p3pl2h4sa8azgaorc7cma4g624345.png"/>
   <img src="https://www.seekpng.com/png/detail/86-866167_appliance-png-mart-home-appliances-images-png.png"/>
   <img src="https://t3.ftcdn.net/jpg/01/73/01/74/360_F_173017473_xRG5TrDyf7elY5PPC7Xt89Ar3imtHwF4.jpg"/>
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicNgbqjwT_CLizsFFQ-Xx9AZ7BtNCko26AQ&usqp=CAU"/>
   <img src="https://i.pinimg.com/originals/d6/0c/ae/d60cae213c52ae8111a55da8ff28e5b8.png"/>  
</div>
<div className="mene">
   <h6>Top Offer</h6>
   <h6>Grocery</h6>
   <h6>Mobiles</h6>
   <h6>Men's Wear</h6>
   <h6>Electronics</h6>
   <h6>Appliances</h6>
   <h6>Travel</h6>
   <h6>Toy & more</h6>
   <h6>Women's Wear</h6>

</div>


<div className="slideShow">
   <div className="slid-frame">
   <div className="slid-img">
<img className="mySlides" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQniU2fW-9vrb5enAHlU3N7kxzH3OlPO0NVww&usqp=CAU"/>
<img className="mySlides" src="https://images.vexels.com/media/users/3/194698/raw/34d9aa618f832510ce7290b4f183484a-shop-online-slider-template.jpg"/>
<button className="btn" onclick={""}>&#10094;</button>
<button className="btn" onclick={""}>&#10095;</button>
</div>
</div>
</div>
<div className="trend">
   <h4>Trending Offers</h4>
</div>

</div> 
             
        </>
   )


}



export default Home
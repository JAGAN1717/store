import React,{useState} from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Product = () =>{
    const[product,setProduct]=useState('')
    const productDetails= async()=>{
        const result = await axios.get("http://localhost:7000/api/v2/showAllitems",{
             headers:{"token":localStorage.getItem('token')}
         })
         console.log("product",result.data)
         
         console.log(JSON.stringify(result.data))
         setProduct(result)
     }
  
    console.log("pro", product)
  
 if(product){
    return(<div>
        <div className="container2s">
            <div className="home">
                <div className="drobdown">
                    <a href="#" className="drob">Profile</a>
                    <div className="drob-con">
                        <p onClick={()=>  window.location.href = '/' }>Sigin-in</p>
                        <p onClick={()=>  window.location.href = '/signup' }>Sigin-up</p>
                        <p onClick={()=>  window.location.href = '/' }>Log-out</p>
                        </div></div>
                        <a href="#" onClick={""}>Product</a>
                        <a href='/home'>Home</a> 
                        <div className="search">
                            <img src="https://dx35vtwkllhj9.cloudfront.net/images/boltHomeEntMerchants/light/skystore_light.png" width={100} / >
                                <form>
                                    <input type="text" placeholder="Search..." name="search" />
                                    <button type="button"> &#128269;</button>
                                    </form>
                                    </div>
                                    </div>
                                    </div>
    
    
    
    <table className="table">
        <thead>
            <tr>
               <th>S.NO</th>
               <th>Brand</th>
               <th>color</th>
               <th>cost</th>
               <th>Quantity</th>
            </tr>
        </thead>
        <tbody>
            {
                product.data.data.map((data,ind)=>{
                    console.log("details")
                    console.log("brand",data.Brand)
                    return(
                        <>
                        <tr key={ind}>
                            <td>{ind+1}</td>
                            <td>{data.Brand}</td>
                            <td>{data.color}</td>
                            <td>{data.cost}</td>
                            <td>{data.quantity}</td>
                        </tr>
                        </>
                    )
                })
                
            
            }
        </tbody>
    </table>

    </div>
    )

 } else{
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
 <a href="#" onClick={""}>Product</a>
 <a href='/home'>Home</a> 
 <div className="search">
    <img src="https://dx35vtwkllhj9.cloudfront.net/images/boltHomeEntMerchants/light/skystore_light.png" width={100} / >
    <form>
       <input type="text" placeholder="Search..." name="search" />
       <button type="button"> &#128269;</button>
    </form>
    
 </div>
 </div>
 </div>
        <h3>Product</h3>
        <NavLink to="" onClick={productDetails}>Click To See a Producr details</NavLink>
        </>
    )
 }
 
}


export default Product
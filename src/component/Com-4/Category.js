import React, { useState } from "react";
 import axios from "axios";
import { NavLink } from "react-router-dom";

 const Catogery = () =>{
    const[category,setCategory] = useState('')
    const categoryDetails= async()=>{
        const result = await axios.get("http://localhost:7000/api/v2/categoryBassedItem")
         console.log("product",result.data)
         console.log(JSON.stringify(result.data))
         setCategory(result)
     }    
  //console.log('cat',category.data.result)

  const[product,setProduct]=useState('')
  const productDetails= async()=>{
      const result = await axios.get("http://localhost:7000/api/v2/showAllitems",{
           headers:{"token":localStorage.getItem('token')}
       })
       console.log("product",result.data)
       
       console.log(JSON.stringify(result.data))
       setProduct(result)
   }


if(category){
return(
   <>
      
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
      <table className="table">
         <thead>
            <tr>
               <th>S.NO</th>
               <th>Category</th>
               <th>desc</th>
            </tr>
         </thead>
         <tbody>
            {
               category.data.result.map((detail,ind)=>{
                  console.log("category",detail.category);
                  return(
                     <>
                     <tr key={ind}>
                        <td>{ind+1}</td>
                        <td>{detail.category}</td>
                        <td>{detail.desc}</td>
                     </tr>
                     </>
                  )
                 
               })
            }
         </tbody>
      </table>      
    
   </>

   
)

}else if(product){
   return(
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

    
      </>
   )

}else{
   return(
      <>
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
      <h3>Category</h3>
      <NavLink to="" onClick={categoryDetails}>Category</NavLink><br></br>
      <NavLink to="" onClick={productDetails}>categoryBassedProduct</NavLink>

      </>
  )
}

 }

 export default Catogery
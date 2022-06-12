import React,{useState} from "react";


const Hookcomp = ()=>{
  
    const [initialData , changdata] = useState(" hello");
    const data = ()=>{

    changdata(  "it's working.")
    }
    return(
        <>
        <h1>Welcom {initialData}</h1>
        <button onClick={data}>change</button>
        </>
    )
    
}

export default Hookcomp
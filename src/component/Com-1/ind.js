import React,{Component} from "react";


const test = (Props)=>{
    return  <h1> test component {Props.data} </h1>
        
}
  

class Index extends Component{
   
    render(){
        return <h1> Index component {this.props.data}</h1>
    }
}


// export default test;
export default Index;
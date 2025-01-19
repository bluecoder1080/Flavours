import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class AboutUs extends React.Component{

  constructor(){
    console.log("Parent Constructor");
super()
  }

  componentDidMount(){
    console.log("Parent Didmount");
  }

  render(){
    console.log("parent Render");
    return (
      
      <div className="AboutUs">
        <h1>This Is Food Ordering App</h1>
        
       
        <UserClass Name = {"1st"} occu = {"Teacher"}/>
        
       
      </div>
    );

  }

}


export default AboutUs;

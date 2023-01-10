// There are total 4 ways for conditional rendering in react
// 1. IF-else 
// 2. Element variable method
// 3. Ternary Operator
// 4. Sort Circuit method
   
import React, { Component } from 'react';

 class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : true  
      }
    }
    
  render() {

    // cONDITIONAL RENDERING 
    // 1. Using if-else 
    // if(this.state.isLoggedIn){
        // return (
            // <div> Welcome Ajay</div>
        // )
    // }else{
        // return(
            // <div> Welcome Guest
            // </div>
        // )
   
 
    // 2. Approach 2 : Element Variable
    //  let message;
    //  if(this.state.isLoggedIn){
        // message = <div> Welcome Ajay</div>
    //  }else{
      // message = <div> Welcome Guest</div>
    //  }
    //  return <div> {message} </div>

// APPROACH 3 : USING TERNARY OPERATOR
// return (
//          this.state.isLoggedIn ? (<div>Wecome Ajay</div>) : (<div>Welcome Guest</div>) 
// )


// Approach 4- Short Circuit Approach
// if it is true "Welcome Ajay" is rendered, if false nothing is rendered

return (
  this.state.isLoggedIn && <div>Welcome Ajay</div>
)


    }


  }

  
    // return (
    //   <div>
    //     <div>Welcome Ajay</div>
    //   <div>Welcome Guest</div> 
    //   </div>

    // );



export default UserGreeting;



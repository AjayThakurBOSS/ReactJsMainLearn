import React, { Component } from "react";

class Welcome extends Component{
    render(){
        return <h1>Welcome {this.props.name} a.k.a. {this.props.heroName}</h1>
    }
       
}

export default Welcome;

// DESTRUCTURING

// in class component we destructure in render() method
// as below:
// and we can remove this.props as below

// class Welcome extends Component{
//     render(){
//         const {name, heroName} = this.props;

// SIMILAR WAY WE CAN DESTRUCTURE STATE ALSO
    //   const {state1, state2} = this.state

//         return(
//          <h1>Hello {name} a.k.a. {heroName}</h1>   
//         )
//     }
// }
// export default Welcome;

import React, { Component } from 'react';


 class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    increment(){ 

// NEVER INCREMENT THE STATE DIRECTLY, ALWAYS USE, setState() method
//  setState() method had two parameter.
// 1. state object
// 2. callback function it will bearrow function  

      // If we try to modify the state without setState, it will not make any change in UI,
      // but it's value will be incremented in console, if we console.
      // like below: 
      // this.state.count = this.state.count + 1;
      // console.log(this.state.count) // output in console but not in UI

//  IF YOU WANT TO CHANGE IN UI TOO, YOU HAVE TO USE setState method 

// When you have to execute somthing just after the state has changed, 
// do not place that code just after setState method. insted put that code in
// callback function

        // this.setState({
        //     count: this.state.count + 1
            
        // }, () => {
        //     console.log('calback value' ,  this.state.count)
        // } )


        // here we are not using current state instead we are using previous state.
        this.setState(prevState => ({
            count : prevState.count + 1
        }))
        console.log(this.state.count ) // this is from synchronous 
    }
    
  render() {
    return (
      <div>

      <h1>Hello Ajay</h1>
         Count = {this.state.count}
         <button onClick={()=> this.increment()}>Increment</button>
        
          
      </div>
    );
  }
}

export default Counter;

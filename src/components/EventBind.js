 import React, { Component } from 'react';

class eventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

      // {/*Approach -- 3 */}
    //    this.goodbye = this.goodbye.bind(this)
    }
    // goodbye() {
    //     this.setState({
    //         message:'Good Bye'
    //     })
    // }
   
    // Approch -- 4
goodbye = () => {
    this.setState({  
        message: 'Goodbye !'
    })
}
  render() {
    return (
      <div>
      <div>{this.state.message}</div>
      {/*Approach -- 1 */}
    {/*<button onClick={this.goodbye.bind(this)}>Click </button>*/}

    {/*Approach -- 2 */}
    {/*<button onClick={() => this.goodbye()}>Click </button> */}
   
    {/*for Approach -- 3 */}
    <button onClick={this.goodbye}>Click </button>

      </div>
    );
  }
}

export default eventBind;

// this keyword is undefined in event handler, that is why event binding is necessary in react class components
//  There are number of ways to bind event handler in react
// 1. to use BIND keyword in render method
//    as in in above example
//   DRAWBACK: Eevery update to the state cause rerender of component, this will inturn 
//  generate a brand new event handler on every render

// 2. Using Arrow function in render method
// it is simply calling event handler in arrow function body
// 

// 3.  Binding the Event Handler in class Constructor

// 4.  Using a arrow function as class Property
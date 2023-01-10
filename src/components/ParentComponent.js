// we have methods to send parent elements data to Child componet
// BUT WHAT IF Child Component haas to communicate with parent component
// for this also we use props but this time we pass props as method to parent component

import React, { Component } from 'react';
import childComponent from './childComponent';

class ParentComponent extends Component {

    constructor(props){
        super(props)

        this.state= {
            parentName : 'Parent'
        } 
        // We need to bind "this" keyword
        this.greetParent  = this.greetParent.bind(this) 
    }

    greetParent(){
        alert(`Hello ${this.state.greetParent}`)
    }

  render() {
    return (
      <div>
      <h1>Hello</h1>
      
        <childComponent greetHandler = {this.greetParent }/>
          
      </div>
    );
  }
}

export default ParentComponent;

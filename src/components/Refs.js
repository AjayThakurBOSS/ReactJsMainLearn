// Refs are created using React.creatreRef() and attached to React elements via the ref attribute.
// Refs are commonly assingned to an instance property when a component is 
// constructed so they can be referenced throughout the componennt.
// When to use Refs
// 1. Managing focus, text selection, or media playback
// 2. Triggring imperative animations
// 3. Integrating with third-party DOM libraries

import React, { Component } from 'react';

export class Refs extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
      this.cbRef = null // callback ref
      this.setCbRef = element => {
        this.cbRef = element
      }
    }

    componentDidMount(){
        // 1. Use Case of Refs.
        // by following code when user will open page input will have focus
        // and they can start typing directly
        // on page load input element will have focus
        // this.inputRef.current.focus()
        // console.log(this.inputRef)

        if(this.cbRef){
            this.cbRef.focus()
        }

    }

    clickHandler =() =>{
        alert(this.inputRef.current.value)
    }
    
  render() {
    return (
      <div>
        <input type='text' ref={this.inputRef} />  
        <input type= 'text' ref= {this.setCbRef}/>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default Refs;

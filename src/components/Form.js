// UNCONTROLLED COMPONENTS:  is one that stores its oun state internally, and
// you query the DOM using a ref to find its current value when you need it.
// In this form element is handled by the DOM.


//  CONTROLLED COMPONENTS: Control Components are those in which form's data is handled by the component's state.
// It takes its current value through props and makes changes through calbacks 
// like onClick, onChange etc
// it controlles them by keepig form data in the component's state and managed by the react component.
// A parent component manages its oun state and passes the new value as props to the controlled component.

// We create a controlled component by connecting the form element 
// (<input>, <textarea> or <select>) to the state by setting its attribute value and the event onChange.

 
 
 
 import React, { Component } from 'react';
 
 export class Form extends Component { 

    constructor(props) {
      super(props)
    
      this.state = {
          username : "",
          comments: '',
          topic:'react'
      }
    }

    handleUsernameChange= (event) =>{
        this.setState({
            username : event.target.value
        })
    }

    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
    alert(`${this.state.username} ${this.state.comments}${this.state.topic} `)
    event.preventDefault();
    }
    
   render() {
     return (
       <form onSubmit={this.handleSubmit}>
       <div>
          <label>Username: </label>
          <input type='text' 
          value={this.state.username} 
          onChange={this.handleUsernameChange}
          />
       </div>
       <div>
          <label>Comments: </label>
          <textarea type='text'
           value={this.state.comments} 
           onChange={this.handleCommentsChange}
           />
       </div>
       <div>
            <label>Topics:</label>
            <select value={this.state.topic} onChange={this.handleTopicChange}>
                <option value='react'>React</option>
                <option value='angular'>Angular</option>
                <option value='vue'>Vue</option>
            </select>
       </div>
       <button>Submit</button>
       </form>
     );
   }
 }
 
 export default Form;
 
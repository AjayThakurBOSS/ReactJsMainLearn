// 1. Error boundries are React components that catch javaScript error
//    in their child component tree, log those errors and display a fall-back UI.
// 2. A class component becomes an Error Boundry by defining either or
//    both of getDerivedStateFromError and componentDidCatch lifecycle methods.
// 3. The Placement of the Error Boundary also matters as it controls if the 
//    entire app should have the fall-back UI or just the component causing the problem
// 4. Provide a way to gracefully handle error in application code.


import React, { Component } from 'react';

 class ErrorBoundry extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError: false 
      }
    }
    
    static getDerivedStateFromError(error){
        return{
            hasError : true
        }
    }
 
    componentDidCatch(error, info){
        console.log(error)
        console.log(info)
    }

  render() {
    if(this.state.hasError){
        return <h1>Something went wrong</h1>
    }

    return this.props.children
    
  }
}

export default ErrorBoundry;

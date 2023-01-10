  import React, { Component } from 'react';
  
  class LifecyleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Ajay Thakur '
      }
      console.log('LifecyleB Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecyleB getDerivedStateFromProps')
        return null
    }
    
    componentDidMount(){
        console.log(' LifecyleB componentDidMount')
    }
  
    render() {
        console.log('LifecyleB render')
      return (
        <div>
          lifecycle B
        </div>
      );
    }
  }
    
  
  export default LifecyleB;
  
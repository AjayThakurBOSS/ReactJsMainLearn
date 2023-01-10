// In React, components go through a lifecycle of events :
// 1. Mounting - Adding Nodes to the DOM
//               It has 4 methods
//                  1. constructor
//                  2. static getDerivedStateFromProps
//                  3. render
//                  4. componentDidMount
// 2. Updating - altering existing nodes in the DOM
//              It has Five Methods
//                  1. static getDerivedStateFromProps
//                  2. shouldComponentUpdate
//                  3. render
//                  4. getSnapshotBeforeUpdate
//                  5. componentDidUpdate
// 3. Umounting - removing nodes from DOM
//              It has one method
//                  1. componentWillUnmount
// 4. Error Handling - verifying that your code works and is bug-free
//              It has 2 methods
//                  1. static getDerivedStateFromError
//                  2. componentDidCatch

  import React, { Component } from 'react';
  import LifecyleB from './LifecycleB';
  
  class LifeCyle extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Ajay Thakur '
      }
      console.log('Lifecycle Constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle getDerivedStateFromProps')
        return null
    }
    
    componentDidMount(){
        console.log(' Lifecyle componentDidMount')
    }
  
    render() {
        console.log('lifecycle render')
      return (
        <div>
         <div> lifecycle A</div>
            <LifecyleB/>
        </div>
      );
    }
  }
    
  
  export default LifeCyle;
  
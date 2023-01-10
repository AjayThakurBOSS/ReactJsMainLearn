// A react component is considered pure if it renders the same output for the same
// state and props. 
// For this type of class component, React provides the PureComponent base class.
// shortcut- rpce
// Difference b/w normal react component and pure component

// A regular Component does not implement the shouldComponentUpdate method. It always returns true by default.
// where as 
// A pure Component on the other hand implements shouldComponentUpdate with a shallow props and state comparison.

// SHALLOW COMPARISON(SC)
// For Primitive Types
//  a (SC) b returns true if a and b have the same value and are of same type.
// Ex: string 'ajay' (SC) string 'ajay' returns TRUE.

// COMPLEX TYPES
// a (SC) b returns true if a and b reference the exact same object
// Ex: var a = [1,2,3]
//     var b = [1,2,3]
//     var c = a;
// var ab_eq = (a===b) // false
// var ac_eq = (a===c) // true

// PURE COMPONENT
// A pure component implements shouldComponentUpdaate with a shallow prop and state comparison.
// SC of prevState with currentState => difference => re-render component
// SC of prevProps with CurrentProp  => difference => re-render component

// Why to use Pure Component?
// Prevention of un-necessary render can give boost to performance

// KEY POINTS
// 1. wE CAN CREATE a component by extending the PureComponent class.
// 2. A PureComponet implements the shouldComponentUpdate lifecycle method by
//    performing a shallow comparison on the props and state of the component.
// 3. If there is no difference, the component is not re-rendered -Performace boost.
// 4. It is good idea to ensure that all the children components are also pure to avoid unexpected behavior.
// 5. Never mutate the state, always return a new object that reflects the new state.


import React, { PureComponent } from 'react';

export class PureComp extends PureComponent {
  render() {
    console.log('Pure Component render')
    return (
      <div>
        pure Component {this.props.name}
      </div>
    );
  }
}

export default PureComp;

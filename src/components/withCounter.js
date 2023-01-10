// WHY HIGHER ORDER COMPONENTS?
// To share common functionality between components.

// What is Higher Order Components--HOC
// A pattern where a function takes a component as an argument and returns a new component.
// const NewComponent = higherOrderComponent( originalComponent )

// tipically HOC adds data or functionality to the original components.

// const EnhancedComponent = higherOrderComponent( original Component)

// Ex. const IronMan = withSuit(TonyStark)

  import React from "react";

//   const withCounter = (WrappedComponent ) => {
    // if we want to increment the count with different number then use following code
const withCounter = (WrappedComponent, incrementNumber ) => {
      class WithCounter extends React.Component{
        constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    
    incrementCount= () =>{
        this.setState( prevState => {
            return{ 
                // count: prevState.count + 1
                // for increment with different number
                count: prevState.count + incrementNumber
            }
        })
    }
       render(){
        return <WrappedComponent 
         count={this.state.count} 
         incrementCount= {this.incrementCount}
         {...this.props}
         />
       } 
      }
      return WithCounter
  }

  export default withCounter;
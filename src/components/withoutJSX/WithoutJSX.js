import React, { Component } from 'react'

class WithoutJSX extends Component{
render(){
    return (
        React.createElement(
            "div",
            {id:"hello"},
            React.createElement("h1", null, "Hello Ajay")
        )
    )
}
}

 

export default WithoutJSX;
// Render props
// The term "render props" refers to a technique for sharing code between React 
// components using a props whose value is function.



import React, { Component } from 'react';

class User extends Component {
  render() {
    return (
      <div>
        {this.props.render(false)}
      </div>
    );
  }
}

export default User;
 
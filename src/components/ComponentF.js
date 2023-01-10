import React, { Component } from 'react';
import { UserConsumer } from './userContext';

export class ComponentF extends Component {
  render() {
    return (
        // Step-3
      <UserConsumer>
        {
            (username)=>{
                return <div> Hello {username}</div>
            }
        }
      </UserConsumer>
    );
  }
}

export default ComponentF;

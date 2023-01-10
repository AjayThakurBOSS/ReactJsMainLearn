// CONTEXT 
//Context provides a way to pass data through the component tree
// wothout having to pass props down manually at every level.

// It follows three steps:
// Step-1: Creating UserContext
// Step-2: We need to provide this userContext using UserProvider
//          The plece we provide this is important because 
//          only decendent component can consume this.
// Step-3: Consume UserComponent in ddesired coomponent
//         To Consume userContext, we need to create consumer component

// Step-1

import React from "react";

const UserContext = React.createContext()

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}
export default UserContext
 
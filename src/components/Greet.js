import React from 'react';

// function Greet(){
//     return <h1> Hello Ajay</h1>;
// }

const Greet = (props) => {
    console.log(props);
    return (
        <>
        <h1>Hello {props.name} a. k.a. {props.heroName}.</h1>
        {props.children}
        </>
    )
}

export default Greet;

//Export Component method.

// export const Greet = ()=> <h1> Hello Ajay Thakur.</h1>

// there are two ways to destructure props in a functional component
// 1. destructure it into function parameter.
//    we can simply use name and heroName insted of props.name and props.heroName.
//    as in below example


// function Greet =( {name, heroName}) => {
//   return (
//     <div>
//       <h1>Hello {name} a.k.a. {heroName}.</h1>
//         {props.children}
//     </div>
//   );
// } 
// export default Greet;

// 2. destructure it into function boby as below code
// 
// function Greet =(props) => {
    // const {name, heroname} = props 
//   return (
//     <div>
//       <h1>Hello {name} a.k.a. {heroName}.</h1>
//         {props.children}
//     </div>
//   );
// } 





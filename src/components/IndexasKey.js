
// When to use Index as a key?
// 1. The items in your list do not have a unique id.
// 2. The list is a static list and will not change.
// 3. The list will never be reordered or filtered.

// If above all conditions satisfied then it is safe to use
// index as key. OtherWise it has many drawbacks.


import React from 'react';
 

function IndexasKey(){
    const aj = ['Ram', 'Shyam', 'Radhe ']
    const nameList = aj.map((name, index) => <h2 key={index}>{index}  {name}</h2>)
 return(
    <div>
      {nameList}
    </div>
  );
}

export default IndexasKey;

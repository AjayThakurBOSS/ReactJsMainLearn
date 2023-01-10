import React from 'react';

function FunctionClick() {
    
function clickHandler(){
    console.log('Button Clicked')
}
// here we are not using () with clickHandler, because after using () it will become,
// function call. this is automatic call the event handler, without doing the event
// but we just want it to be function not function call

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
 
// Memo is a higher order component.
// If your component renders the same result given the same props, you can wrap it in a call to react.memo for
// performance boost in some case by memoizing the result.
// This means that React will skip rendering the component, and ensure the last rendered result.
// Memo is available for functional commponent as pure component for class componet.

import React from 'react';

function MemoComp({name}) {
    console.log('Rendering Memo')
  return (
    <div>
      {name}
    </div>
  );
}

export default React.memo(MemoComp);
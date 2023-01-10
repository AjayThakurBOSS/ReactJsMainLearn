// React Portal provides a way to render children  dom-node that exist outside 
// DOM hirerchi of parent component
// To analyse that what i did here is,
// Step 1- created another div element with id='portal-root' in index.html in public folder.
// Step 2- Then created step 2 code in the PortalDemo 

import React from 'react';
import ReactDOM from 'react-dom'

function PortalDemo() {
  return ReactDOM.createPortal(
    <div>
      Portal Demo
    </div>,
    // Step 2 code
    document.getElementById('portal-root')
  );
}

export default PortalDemo;

// There are number of ways to style a React Component
// 1. CSS stylesheet
// 2. Inline styling
// 3. CSS Module
// 4. CSS in JS Libraries

import React from 'react';
import './myStyle.css'

function Stylesheet() {
  return (
    <div>
      <h1 className='primary'>Style Sheet</h1>
    </div>
  );
}

export default Stylesheet;

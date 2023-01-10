// A class component that implements either one or both of the life cylcle methods
// getDerivedStateFromError or componentDidCatch becomes an error boundary.

// The static method getDerivedStateFromError method is used to render a fallback
// UI after an error is thrown and componentDidCatch method is used to log
// the error inforation.

//Placement of Error boundry is very important. You can Wrap every element with
// <ErrorBoundry></ErrorBoundry> seperately or all at once 


import React from 'react';

function ErrorBound({heroName}) {
    if(heroName === 'joker'){
        throw new Error('Not a hero!')
    }
  return (
    <div>
      {heroName}
    </div>
  );
}

export default ErrorBound;

import React from 'react';

function ErrorMessage(props: {error: string}) {
  return (
      <div>
          <h1>{ props.error }</h1>
          <h1>Sorry, couldn't get data. Something went wrong.</h1>
      </div>
  );
}

export default ErrorMessage;

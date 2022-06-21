import React from "react";

const ErrorDisplay = ({ error }) => {
  return (
    <div>
      <h1>Error While Doing</h1>
      <div>
        <p>{error}</p>
      </div>
    </div>
  );
};

export default ErrorDisplay;

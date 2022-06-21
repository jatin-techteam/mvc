import React from "react";
import quoteContext from "./quoteContext";

const QuoteState = (props) => {
  const state = {
    name: "jatin yadav",
    age: "15",
  };
  return (
    <quoteContext.Provider value={state}>
      {props.children}
    </quoteContext.Provider>
  );
};

export default QuoteState;

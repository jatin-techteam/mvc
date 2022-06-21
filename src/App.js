import React, { useState } from "react";
import EditCustomerController from "./EditCustomerController";
import QuoteState from "./Context/quotes/quoteState";

const App = () => {
  const [user, setUser] = useState(1);
  const decrease = () => {
    setUser(user - 1);
  };
  const increase = () => {
    setUser(user + 1);
  };
  return (
    <>
      <QuoteState>
        <div className="App">
          <EditCustomerController id={user} />
          <button className="ui red button" onClick={decrease}>
            Decrease
          </button>
          <button className="ui green button" onClick={increase}>
            Increase
          </button>
        </div>
      </QuoteState>
    </>
  );
};

export default App;

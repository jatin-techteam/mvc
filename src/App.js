import React, { useState } from "react";
import EditCustomerController from "./EditCustomerController";
const App = () => {
  const [user, setUser] = useState(1);
  const decrease = () => {
    setUser(user - 1);
  };
  const increase = () => {
    setUser(user + 1);
  };
  return (
    <div className="App">
      <EditCustomerController id={user} />
      <button className="ui red button" onClick={decrease}>
        Decrease
      </button>
      <button className="ui green button" onClick={increase}>
        Increase
      </button>
    </div>
  );
};

export default App;

import React, { useContext } from "react";
import ErrorDisplay from "./ErrorDisplay";
import quoteContext from "./Context/quotes/quoteContext";

const CustomerForm = ({
  onSave,
  avatar,
  firstName,
  lastName,
  initialEmail,
}) => {
  let [errors, setErrors] = React.useState();
  let onSaveWrapped = () => {};

  const a = useContext(quoteContext);
  console.log(a);

  return (
    <>
      <div>
        <div className="ui card">
          <div className="content">
            <a className="header" href="#">
              {a.name}
            </a>
            <div className="meta">
              <a>{a.age}</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        {errors && <ErrorDisplay errors={errors} />}
        <div className="ui card">
          <a className="image" href="#">
            <img src={avatar} />
          </a>
          <div className="content">
            <a className="header" href="#">
              {`${firstName} ${lastName}`}
            </a>
            <div className="meta">
              <a>{initialEmail}</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomerForm;

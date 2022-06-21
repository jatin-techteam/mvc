import React from "react";
import ErrorDisplay from "./ErrorDisplay";

const CustomerForm = ({
  onSave,
  avatar,
  firstName,
  lastName,
  initialEmail,
}) => {
  let [errors, setErrors] = React.useState();

  let onSaveWrapped = () => {};

  return (
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
  );
};

export default CustomerForm;

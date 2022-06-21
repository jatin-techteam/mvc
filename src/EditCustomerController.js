import React, { useState, useEffect } from "react";
import CustomerForm from "./CustomerForm";
import NotFound from "./NotFound";
import { getRequest, postRequest, putRequest } from "./API/api";

const EditCustomerController = ({ id }) => {
  const [customers, setCustomers] = useState([]);

  async function fetchcustomers() {
    try {
      const customersDetails = await getRequest("users");
      //   console.log("customersDetails", customersDetails.data);
      setCustomers(customersDetails.data.data);
    } catch (error) {
      //Log errors
      console.log(error);
    }
  }

  useEffect(() => {
    fetchcustomers();
  }, []);

  let customer = customers.find((c) => c.id === id);
  //   console.log("check", customer);
  if (!customer) {
    return <NotFound />;
  }

  let onSave = (newCustomerData) => {
    alert("click checked");
  };

  return (
    <CustomerForm
      onSave={onSave}
      avatar={customer.avatar}
      firstName={customer.first_name}
      lastName={customer.last_name}
      initialEmail={customer.email}
    />
  );
};

export default EditCustomerController;

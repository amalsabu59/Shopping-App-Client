import React, { useState } from "react";
import styled from "styled-components";

const AddressCheckoutForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

const CheckoutInput = styled.input`
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid ${(props) => (props.required ? "#f00" : "#ccc")};
  border-radius: 4px;
  font-size: 16px;
`;

const CheckoutLabel = styled.label`
  margin-bottom: 10px;
  font-weight: bold;
`;

const CheckoutButton = styled.button`
  padding: 10px;
  background-color: black;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
`;

const AddressCheckout = ({ setIsAddressAvailable, setShowAddressSection }) => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [requiredFields, setRequiredFields] = useState([]);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const fields = [name, address, city, state, zip];
    const requiredFields = [];
    fields.forEach((field, index) => {
      if (!field) {
        requiredFields.push(index);
      }
    });
    setRequiredFields(requiredFields);
    if (requiredFields.length === 0) {
      setIsAddressAvailable(true);
      setShowAddressSection(false);
    }
  };

  return (
    <AddressCheckoutForm onSubmit={handleFormSubmit}>
      <CheckoutLabel htmlFor="name">Name*</CheckoutLabel>
      <CheckoutInput
        type="text"
        id="name"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required={requiredFields.includes(0)}
      />

      <CheckoutLabel htmlFor="address">Address</CheckoutLabel>
      <CheckoutInput
        type="text"
        id="address"
        name="address"
        value={address}
        onChange={(event) => setAddress(event.target.value)}
        required={requiredFields.includes(1)}
      />

      <CheckoutLabel htmlFor="city">City</CheckoutLabel>
      <CheckoutInput
        type="text"
        id="city"
        name="city"
        value={city}
        onChange={(event) => setCity(event.target.value)}
        required={requiredFields.includes(2)}
      />

      <CheckoutLabel htmlFor="state">State</CheckoutLabel>
      <CheckoutInput
        type="text"
        id="state"
        name="state"
        value={state}
        onChange={(event) => setState(event.target.value)}
        required={requiredFields.includes(3)}
      />

      <CheckoutLabel htmlFor="zip">Zip Code</CheckoutLabel>
      <CheckoutInput
        type="number"
        id="zip"
        name="zip"
        value={zip}
        onChange={(event) => setZip(event.target.value)}
        required={requiredFields.includes(4)}
      />

      <CheckoutButton type="submit">Add Address</CheckoutButton>
    </AddressCheckoutForm>
  );
};

export default AddressCheckout;

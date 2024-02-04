import styled from "styled-components";
import FormRow from "./FormRow.jsx";
import { useUserContext } from "../context/user_context.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../context/cart_context.jsx";
import { formatPrice } from "../utils/helpers.js";

const initialState = {
  name: "",
  lastName: "",
  location: "",
  cardNumber: "",
  expiryDate: "",
  cvv: "",
};

const CheckoutForm = () => {
  const [values, setValues] = useState(initialState);
  const { user } = useUserContext();
  const { total_amount, shipping_fee } = useCartContext();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  return (
    <Wrapper>
      <div className="form shipping-center">
        <div className="shipping-details">
          <h1>Shipping Address</h1>
          <div className="name">
            <FormRow
              type="text"
              name="name"
              value={user.name}
              handleChange={handleChange}
            />
            <FormRow
              type="text"
              name="last name"
              value={user.lastName}
              handleChange={handleChange}
            />
          </div>

          <FormRow
            type="text"
            name="address"
            value="address"
            handleChange={handleChange}
          />

          <div className="location">
            <FormRow
              type="text"
              name="city"
              value={user.location}
              handleChange={handleChange}
            />
            <FormRow
              type="text"
              name="country"
              value="country"
              handleChange={handleChange}
            />
          </div>

          <FormRow
            type="text"
            name="zip code"
            value="zip code"
            handleChange={handleChange}
          />
        </div>
        <hr />
        <div className="billing-address">
          <h1>Billing Address</h1>
          <div className="billing-details">
            <div className="name">
              <FormRow
                type="text"
                name="name"
                value={user.name}
                handleChange={handleChange}
              />
              <FormRow
                type="text"
                name="last name"
                value={user.lastName}
                handleChange={handleChange}
              />
            </div>

            <FormRow
              type="text"
              name="address"
              value="address"
              handleChange={handleChange}
            />

            <div className="location">
              <FormRow
                type="text"
                name="city"
                value={user.location}
                handleChange={handleChange}
              />
              <FormRow
                type="text"
                name="country"
                value="country"
                handleChange={handleChange}
              />
            </div>
            <FormRow
              type="text"
              name="zip code"
              value="zip code"
              handleChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="form payment-center">
        <div className="payment-details">
          <h1>Payment Details</h1>
          <FormRow
            type="number"
            name="card number"
            value="card number"
            handleChange={handleChange}
          />

          <div className="card-details">
            <FormRow
              type="date"
              name="expiry date"
              value="expiry date"
              handleChange={handleChange}
            />
            <FormRow type="number" name="cvv" value="cvv" handleChange={handleChange} />
          </div>
        </div>
        <hr />
        <div className="summary">
          <article>
            <h5>
              subtotal: <span>{formatPrice(total_amount)}</span>
            </h5>
            <p>
              shipping fee: <span>{formatPrice(shipping_fee)}</span>
            </p>
            <h4>
              order total: <span>{formatPrice(total_amount + shipping_fee)}</span>
            </h4>
          </article>
          <button type="button" className="btn">
            Place order
          </button>
        </div>
      </div>
    </Wrapper>
  );
};
export default CheckoutForm;

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .shipping-center {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem;
  }

  .name,
  .location,
  .card-details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .form {
    display: flex;
    flex-flow: column;
    width: 90vw;
    max-width: 30rem;
    background: var(--white);
    border-radius: var(--radius);
    box-shadow: var(--shadow-2);
    padding: 2rem 2.5rem;
    margin: 3rem auto;
    transition: var(--transition);
    justify-content: space-around;
  }

  .payment-center {
    height: 32rem;
  }

  .form-label {
    display: block;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
  }
  .form-input,
  .form-textarea,
  .form-select {
    width: 100%;
    padding: 0.75rem 0.85rem;
    border-radius: var(--radius);
    background: var(--white);
    border: 1px solid var(--clr-grey-2);
  }
  .form-input,
  .form-select {
    font-size: 1rem;
    height: 2.5rem;
  }
  .form-row {
    margin-bottom: 1rem;
  }

  .form-textarea {
    height: 7rem;
  }
  ::placeholder {
    font-family: inherit;
    color: var(--grey-400);
  }
  .form-alert {
    color: var(--clr-primary-6);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
  }

  hr {
    height: 0.125rem;
    background-color: var(--clr-grey-2);
    border: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  @media (max-width: 500px) {
    h1 {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
  }
`;

/* eslint-disable react/prop-types */
import styled from "styled-components";
import { formatPrice } from "../utils/helpers.js";
import { useState } from "react";
import DetailsModal from "./DetailsModal.jsx";

const SingleOrder = (order) => {
  const { createdAt, status, total, _id: id } = order;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <div className="title">
        <p>#{id.slice(-5)}</p>
        <div>
          <p className="date">placed on: {createdAt.slice(0, 10)}</p>
          <h5 className="status">{status}</h5>
        </div>
      </div>

      <h5 className="price-small">{formatPrice(total)}</h5>

      <button className="btn" onClick={() => setIsOpen(true)}>
        Details
      </button>

      {isOpen ? (
        <DetailsModal details={order} toggleClose={() => setIsOpen(false)} />
      ) : null}
    </Wrapper>
  );
};
export default SingleOrder;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  justify-content: space-around;
  gap: 1.5rem;
  margin: 1rem auto;
  padding: 0.7rem;
  border-bottom: 0.01rem solid var(--clr-grey-4);

  img {
    width: 100%;
    height: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: cover;
  }
  h5 {
    font-size: 1rem;
    margin-bottom: 0;
  }

  .date {
    color: var(--clr-grey-5);
    font-size: 0.75rem;
    letter-spacing: var(--spacing);
    text-transform: capitalize;
    margin-bottom: 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .price-small {
    color: var(--clr-primary-5);
  }
  .amount-btns {
    width: 75px;
    button {
      width: 1rem;
      height: 0.5rem;
      font-size: 0.75rem;
    }
    h2 {
      font-size: 1rem;
    }
  }

  .status {
    display: block;
    font-size: 0.8rem;
    color: var(--clr-primary-5);
    font-weight: 400;
  }

  @media (min-width: 776px) {
    flex-direction: row;
    .subtotal {
      display: block;
      margin-bottom: 0;
      color: var(--clr-grey-5);
      font-weight: 400;
      font-size: 1rem;
    }

    .status {
      display: block;
      font-size: 1rem;
      color: var(--clr-primary-5);
      font-weight: 400;
    }
    .name {
      font-size: 0.85rem;
    }

    p {
      margin: 0;
    }

    grid-template-columns: 1fr 1fr 1fr 1fr auto;
    align-items: center;
    grid-template-rows: 75px;
    img {
      height: 100%;
    }
    .title {
      height: 100%;
      display: grid;
      grid-template-columns: 100px 200px;
      align-items: center;
      gap: 1rem;
      text-align: left;
    }
    .amount-btns {
      width: 100px;
      button {
        width: 1.5rem;
        height: 1rem;
        font-size: 1rem;
      }
      h2 {
        font-size: 1.5rem;
      }
    }
  }
`;

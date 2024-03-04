/* eslint-disable react/prop-types */
import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";
import OrderItem from "./OrderItem.jsx";

const DetailsModal = ({ toggleClose, details }) => {
  const { _id: id, orderItems } = details;
  return (
    <Wrapper className="section">
      <div className="container">
        <button className="closeBtn" onClick={toggleClose}>
          <RiCloseLine style={{ marginBottom: "-3px" }} />
        </button>

        <div className="modal">
          <h5 className="heading">Order #{id.slice(-5)}</h5>
          <div className="underline"></div>

          <div className="modalContent">
            {orderItems.map((item) => {
              return <OrderItem key={item._id} {...item} />;
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  .container {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .modal {
    display: flex;
    flex-direction: column;
    width: 90vw;
    max-width: 50rem;
    border-radius: var(--radius);
    padding: 2rem 2.5rem;
    margin: 3rem auto;
    transition: var(--transition);
    align-items: center;
    gap: 1rem;
    background: var(--clr-white);
    z-index: 10;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
  }

  .modalHeader {
    height: 50px;
    background: var(--clr-white);
    overflow: hidden;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  }

  .heading {
    margin: 0;
    padding: 0.5rem;
    color: var(--clr-grey-9);
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
  }

  .modalContent {
    padding: 1rem;
    font-size: 1rem;
    color: var(--clr-grey-9);
    text-align: center;
  }

  .closeBtn {
    cursor: pointer;
    font-weight: 500;
    padding: 4px 8px;
    border-radius: var(--radius);
    border: none;
    font-size: 1.5rem;
    color: var(--clr-white);
    background: var(--clr-primary-5);
    transition: all 0.25s ease;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
    position: absolute;
    right: 0;
    top: 2.5rem;
    align-self: flex-end;
    margin-top: -7px;
    margin-right: -7px;
  }

  .closeBtn:hover {
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
    transform: translate(-4px, 4px);
  }
  .underline {
    width: 12rem;
    height: 0.25rem;
    background: var(--clr-primary-6);
    margin-left: auto;
    margin-right: auto;
    border-radius: 1rem;
  }
`;

export default DetailsModal;

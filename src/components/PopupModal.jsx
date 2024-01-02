import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";

const Modal = ({ toggleClose }) => {
  return (
    <Wrapper className="section">
      <div className="darkBG" onClick={toggleClose} />
      <div className="centered">
        <button className="closeBtn" onClick={toggleClose}>
          <RiCloseLine style={{ marginBottom: "-3px" }} />
        </button>

        <div className="modal">
          <h5 className="heading">DISCLAMER</h5>
          <div className="underline"></div>

          <div className="modalContent">
            <br />
            <strong>This WebApp is currently in development.</strong> <br /> <br />
            Please note that back-end is hosted on a free service provider so it needs a
            little bit of time to start up, which means -{" "}
            <strong>if you don't see images or products just wait a bit</strong>.
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .darkBG {
    background-color: rgba(0, 0, 0, 0.2);
    width: 100vw;
    height: 100vh;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  }

  .centered {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .modal {
    width: 350px;
    height: 270px;
    background: var(--clr-white);
    color: var(--clr-white);
    z-index: 10;
    border-radius: 16px;
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
    padding: 10px;
    color: var(--clr-grey-9);
    font-weight: 700;
    font-size: 1.5rem;
    text-align: center;
  }

  .modalContent {
    padding: 10px;
    font-size: 1rem;
    color: var(--clr-grey-9);
    text-align: center;
  }

  .closeBtn {
    cursor: pointer;
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 8px;
    border: none;
    font-size: 1.5rem;
    color: var(--clr-white);
    background: var(--clr-primary-5);
    transition: all 0.25s ease;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
    position: absolute;
    right: 0;
    top: 0;
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

export default Modal;

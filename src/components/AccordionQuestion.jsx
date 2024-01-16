/* eslint-disable react/prop-types */
import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import styled from "styled-components";

function AccordionQuestion({ title, content }) {
  const [deets, setDeets] = useState(false);

  return (
    <Wrapper className="container">
      <div className="questions">
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => setDeets(!deets)}>
          {deets ? <SlArrowUp /> : <SlArrowDown />}
        </button>
      </div>
      {deets && <p>{content}</p>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  h5 {
    margin: 0;
  }

  p {
    max-width: 15rem;
  }

  .container {
    padding: 1rem 1.5rem;
    border: 2px solid var(--clr-grey-4);
    border-radius: var(--radius);
    box-shadow: var(--drop-shadow);
  }

  .questions {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    height: 3.25rem;
    align-items: center;
    align-content: center;
  }

  .question-btn {
    background: transparent;
    border-color: transparent;
    width: 2rem;
    height: 2rem;
    background: var(--clr-grey-2);
    color: var(--clr-black);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--radius);
    cursor: pointer;
    margin-left: 2rem;
    min-width: 2rem;
  }

  @media (min-width: 768px) {
    p {
      max-width: 35rem;
    }
  }

  @media (min-width: 1024px) {
    p {
      max-width: 19rem;
    }
  }
`;

export default AccordionQuestion;

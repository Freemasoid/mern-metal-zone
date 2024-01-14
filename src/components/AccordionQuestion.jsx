/* eslint-disable react/prop-types */
import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import styled from "styled-components";

function AccordionQuestion({ title, content }) {
  const [deets, setDeets] = useState(false);

  return (
    <Wrapper className="question">
      <div className="container">
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => setDeets(!deets)}>
          {deets ? <SlArrowDown /> : <SlArrowUp />}
        </button>
      </div>
      {deets && <p>{content}</p>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .container {
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    height: 3rem;
    align-items: center;
  }

  .question {
    padding: 1rem 1.5rem;
    border: 2px solid var(--clr-grey-4);
    margin-bottom: 1rem;
    border-radius: var(--radius);
    box-shadow: var(--drop-shadow);
    margin-bottom: 2rem;
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
    align-self: flex-start;
    min-width: 2rem;
  }
`;

export default AccordionQuestion;

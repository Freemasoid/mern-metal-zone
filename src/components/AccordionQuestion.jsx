/* eslint-disable react/prop-types */
import { useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

function AccordionQuestion({ title, content }) {
  const [deets, setDeets] = useState(false);

  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={() => setDeets(!deets)}>
          {deets ? <SlArrowDown /> : <SlArrowUp />}
        </button>
      </header>
      {deets && <p>{content}</p>}
    </article>
  );
}

export default AccordionQuestion;

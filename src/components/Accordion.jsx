/* eslint-disable react/prop-types */
import styled from "styled-components";
import AccordionQuestion from "./AccordionQuestion.jsx";

const Accordion = ({ items }) => {
  return (
    <Wrapper>
      <section className="container">
        {items.map((item) => {
          return <AccordionQuestion key={item.id} {...item} />;
        })}
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Accordion;

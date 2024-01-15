import styled from "styled-components";
import Accordion from "./Accordion.jsx";
import { questions } from "../utils/questions.js";

const Contact = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <div className="help">
          <h2>Help & FAQ</h2>
          <p>These are some of the most asked questions.</p>
          <p>
            If you need further assistance feel free to contact us via E-Mail or get Help
            on our Discord Server.
          </p>
        </div>
        <div className="accordion">
          <Accordion items={questions} />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  .section-center {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 3rem;
    padding-bottom: 3rem;
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 2rem;
  }

  .accordion {
    background-color: var(--clr-grey-1);
    border-radius: var(--radius);
    padding: 2rem;
  }

  @media (min-width: 768px) {
    .section-center {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      padding-top: 6rem;
      padding-bottom: 6rem;
    }
  }

  @media (min-width: 1024px) {
    padding-top: 3rem;

    .section-center {
      padding-left: 2rem;
      padding-right: 2rem;
      padding-top: 8rem;
      padding-bottom: 8rem;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 8rem;
    }
  }
`;

export default Contact;

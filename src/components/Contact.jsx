import styled from "styled-components";
import Accordion from "./Accordion.jsx";

const Contact = () => {
  const accItems = [
    {
      title: "How do I place an order?",
      content:
        "To place an order, visit our product catalog, choose your desired items, and follow the checkout process to complete your purchase.",
    },
    {
      title: "What payment methods do you accept?",
      content:
        "We accept a variety of payment methods, including credit/debit cards and online payment platforms. Visit our payment options page for more details.",
    },
    {
      title: "How can I track my order?",
      content:
        "Once your order is shipped, you will receive a tracking number via email. Use this number to track the status and location of your shipment.",
    },
    {
      title: "What is your return policy?",
      content:
        "Our return policy allows you to return items within 30 days of purchase. Please review our Returns & Exchanges page for detailed instructions.",
    },
  ];

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
          <Accordion items={accItems} />
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  padding-top: 3rem;

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
    gap: 8rem;
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
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      padding-top: 6rem;
      padding-bottom: 6rem;
    }
  }

  @media (min-width: 1024px) {
    .section-center {
      padding-left: 2rem;
      padding-right: 2rem;
      padding-top: 8rem;
      padding-bottom: 8rem;
    }
  }
`;

export default Contact;

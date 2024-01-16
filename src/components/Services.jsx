/* eslint-disable react/no-unescaped-entities */
import styled from "styled-components";
import { services } from "../utils/constants.jsx";

const Services = () => {
  return (
    <Wrapper>
      <div className="section-center">
        <article className="header">
          <h3>
            custom guitars <br /> built only for you
          </h3>
          <p>
            Get a guitar that screams 'you'! Our custom guitars are crafted to match your
            preferences, ensuring a truly distinct and personalized experience.
          </p>
        </article>
        <div className="services-center">
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article key={id} className="service">
                <span className="icon">{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3 {
    color: var(--clr-primary-1);
  }
  h4 {
    color: var(--clr-grey-1);
    text-shadow: 0px 0px 5px var(--clr-grey-10);
  }
  padding: 5rem 0;

  background: var(--clr-grey-1);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-grey-9);
    font-size: 1.125rem;
  }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    box-shadow: var(--drop-shadow);
    background: var(--clr-primary-5);
    text-align: center;
    padding: 2.5rem 2rem;
    border-radius: var(--radius);
    p {
      color: var(--clr-grey-2);
      text-shadow: 0px 0px 5px var(--clr-grey-10);
      font-size: 1.125rem;
      font-weight: 500;
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-grey-1);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(4rem);
    }
  }
`;
export default Services;

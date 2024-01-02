/* eslint-disable react/prop-types */
import styled from "styled-components";
import { Link } from "react-router-dom";

const PageHero = ({ title, product }) => {
  return (
    <Wrapper>
      <div className="section-center">
        <h3>
          <Link to="/">Main Stage</Link>
          {product && <Link to="/products">/ Products</Link>}/ {title}
        </h3>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  width: 100%;
  min-height: 10vh;
  display: flex;
  align-items: center;
  text-shadow: 0px 0px 4px var(--clr-primary-2);
  color: var(--clr-primary-6);
  h3 {
    margin: 10px;
  }
  a {
    color: var(--clr-grey-2);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-6);
    text-shadow: 0px 0px 4px var(--clr-primary-2);
  }
`;

export default PageHero;

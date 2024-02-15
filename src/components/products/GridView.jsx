/* eslint-disable react/prop-types */
import styled from "styled-components";
import Product from "../Product.jsx";
import { formatPrice } from "../../utils/helpers.js";

const GridView = ({ products }) => {
  return (
    <Wrapper>
      <div className="products-container">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <Product key={product.id} {...product} />
              <div className="footer">
                <h5>{product.name}</h5>
                <h5 className="price">{formatPrice(product.price)}</h5>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .price {
    font-size: 0.9rem;
    color: var(--clr-primary-5);
  }

  .footer {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  img {
    height: 175px;
  }

  .products-container {
    display: grid;
    gap: 2rem 1.5rem;
  }

  @media (min-width: 992px) {
    .products-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (min-width: 1170px) {
    .products-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export default GridView;

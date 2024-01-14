import { useProductsContext } from "../context/products_context";
import styled from "styled-components";
import Error from "./Error";
import Loading from "./Loading";
import Product from "./Product";

const FeaturedProducts = () => {
  const {
    products_loading: loading,
    products_error: error,
    featured_products: featured,
  } = useProductsContext();

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <Wrapper className="section">
      <div className="title">
        <h2>Headliner Picks</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured">
        {featured.slice(0, 4).map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background: var(--clr-grey-10);
  color: var(--clr-grey-1);

  .featured {
    margin: 4rem auto;
    display: grid;
    gap: 2.5rem;
    grid-template-columns: repeat(1, minmax(0, 1fr));

    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 768px) {
    .featured {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
`;

export default FeaturedProducts;

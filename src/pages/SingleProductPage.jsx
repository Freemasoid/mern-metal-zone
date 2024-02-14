import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductsContext } from "../context/products_context.jsx";
import { products_url as url } from "../utils/constants.jsx";
import { formatPrice } from "../utils/helpers.js";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components/index.js";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    single_product_loading: loading,
    single_product_error: error,
    single_product: product,
    fetchSingleProduct,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(`${url}/${id}`);
    window.scrollTo(0, 0);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
    // eslint-disable-next-line
  }, [error]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  const {
    name,
    price,
    description,
    averageRating,
    inventory,
    numOfReviews,
    company,
    images,
  } = product;

  return (
    <Wrapper>
      <PageHero title={name} product />
      <div className="section section-center">
        <Link to="/products" className="btn">
          back to lineup
        </Link>
        <div className="product-center">
          <ProductImages images={images} />
          <section className="content">
            <h2>{name}</h2>
            <Stars stars={averageRating} reviews={numOfReviews} />
            <h5 className="price">Starts with: {formatPrice(price)}</h5>
            <p className="desc">{description}</p>
            <p className="info">
              <span>Custom-shop: </span>
              {company}
            </p>
            <hr />
            {inventory > 0 && <AddToCart product={product} />}
            {inventory === 0 && (
              <h5>
                Sorry, but this is a signature guitar and unavailable for purchase.
                <br /> Please contact custom-shop separately for additional info.
              </h5>
            )}
          </section>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-8);
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    color: var(--clr-grey-8);
    span {
      font-weight: 700;
      color: var(--clr-primary-5);
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;

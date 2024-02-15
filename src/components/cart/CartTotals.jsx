import styled from "styled-components";
import { useCartContext } from "../../context/cart_context.jsx";
import { formatPrice } from "../../utils/helpers.js";
import { Link } from "react-router-dom";
import { useUserContext } from "../../context/user_context.jsx";

const CartTotals = () => {
  const { total_amount, shipping_fee } = useCartContext();
  const { user } = useUserContext();

  return (
    <Wrapper>
      <div className="total-container">
        <article>
          <h5>
            subtotal: <span>{formatPrice(total_amount)}</span>
          </h5>
          <p>
            shipping fee: <span>{formatPrice(shipping_fee)}</span>
          </p>
          <hr />
          <h4>
            order total: <span>{formatPrice(total_amount + shipping_fee)}</span>
          </h4>
        </article>
        {user ? (
          <Link to="/checkout" className="btn">
            proceed to checkout
          </Link>
        ) : (
          <Link to="/login" type="button" className="btn">
            login
          </Link>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 3rem;
  display: flex;
  overflow: hidden;
  justify-content: center;

  article {
    border: 1px solid var(--clr-grey-8);
    border-radius: var(--radius);
    padding: 1.5rem 3rem;
  }

  h4,
  h5,
  p {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
  p {
    text-transform: capitalize;
  }
  h4 {
    margin-top: 2rem;
  }

  .total-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .btn {
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    font-weight: 700;
    display: block;
  }
  @media (min-width: 776px) {
    justify-content: flex-end;
  }

  @media (max-width: 412px) {
    .btn {
      width: 90vw;
    }
  }
`;

export default CartTotals;

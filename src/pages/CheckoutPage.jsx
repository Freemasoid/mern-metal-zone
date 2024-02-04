import styled from "styled-components";
import { PageHero, CheckoutForm } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { cart } = useCartContext();

  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper className="page-100">
        {cart.length < 1 ? (
          <div className="empty">
            <h2>Your cart is empty</h2>
            <p>Discover your next musical companion!</p>
            <Link to="/products" className="btn">
              take me to the store!
            </Link>
          </div>
        ) : (
          <CheckoutForm />
        )}
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .empty {
    text-align: center;
    h2 {
      margin-bottom: 1rem;
      text-transform: none;
    }
  }
`;
export default CheckoutPage;

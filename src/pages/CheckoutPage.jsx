import styled from "styled-components";
import { PageHero, StripeCheckout } from "../components";
// extra imports
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";

const CheckoutPage = () => {
  const { cart } = useCartContext();

  return (
    <main>
      <PageHero title="checkout" />
      <Wrapper>
        {cart.length < 1 ? (
          <div className="empty">
            <h2>Your cart is empty</h2>
            <p>Discover your next musical companion!</p>
            <Link to="/products" className="btn">
              take me to the store!
            </Link>
          </div>
        ) : (
          <StripeCheckout />
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
  }
`;
export default CheckoutPage;

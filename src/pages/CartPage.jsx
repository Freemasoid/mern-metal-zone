import styled from "styled-components";
import { useCartContext } from "../context/cart_context";
import { Link } from "react-router-dom";
import { CartContent, PageHero } from "../components/index.js";

const CartPage = () => {
  const { cart } = useCartContext();
  if (cart.length < 1) {
    return (
      <main>
        <PageHero title="cart" />
        <Wrapper className="page-100">
          <div className="empty">
            <h2>Your cart is empty</h2>
            <p>Discover your next musical companion!</p>
            <Link to="/products" className="btn">
              take me to the store!
            </Link>
          </div>
        </Wrapper>
      </main>
    );
  }
  return (
    <main>
      <PageHero title="cart" />
      <Wrapper>
        <CartContent />
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.main`
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

export default CartPage;

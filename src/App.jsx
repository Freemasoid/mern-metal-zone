import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components/index.js";
import "./index.css";
import styled from "styled-components";
import {
  AuthWrapper,
  HomePage,
  SingleProductPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  AboutPage,
  ProductsPage,
  PrivateRoute,
} from "./pages/index.js";

function App() {
  return (
    <AuthWrapper>
      <BrowserRouter>
        <Wrapper className="page">
          <Navbar />
          <Sidebar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="cart" element={<CartPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="products/:id" element={<SingleProductPage />} />
            <Route
              path="checkout"
              element={
                <PrivateRoute>
                  <CheckoutPage />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Wrapper>
        <Footer />
      </BrowserRouter>
    </AuthWrapper>
  );
}

const Wrapper = styled.section``;

export default App;

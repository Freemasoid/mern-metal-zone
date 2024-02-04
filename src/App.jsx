import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer } from "./components/index.js";
import "./index.css";
import styled from "styled-components";
import {
  HomePage,
  SingleProductPage,
  CartPage,
  CheckoutPage,
  ErrorPage,
  LoginPage,
  AboutPage,
  ProductsPage,
  ProfilePage,
  PrivateRoute,
} from "./pages";

function App() {
  return (
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
          <Route path="login" element={<LoginPage />} />
          <Route
            path="checkout"
            element={
              <PrivateRoute>
                <CheckoutPage />
              </PrivateRoute>
            }
          />
          <Route
            path="profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Wrapper>
      <Footer />
    </BrowserRouter>
  );
}

const Wrapper = styled.section``;

export default App;

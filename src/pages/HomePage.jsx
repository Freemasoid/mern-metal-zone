import { FeaturedProducts, Hero, Services, Contact } from "../components/index.js";
import Modal from "../components/PopupModal.jsx";
import { useState } from "react";
const HomePage = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen ? (
        <Modal toggleClose={() => setIsOpen(false)} />
      ) : (
        <main>
          <Hero />
          <FeaturedProducts />
          <Services />
          <Contact />
        </main>
      )}
    </>
  );
};

export default HomePage;

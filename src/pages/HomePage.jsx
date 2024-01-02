import { FeaturedProducts, Hero, Services, Contact } from "../components/index.js";
import Modal from "../components/PopupModal.jsx";
import { useEffect, useState } from "react";
const HomePage = () => {
  const [isOpen, setIsOpen] = useState(
    JSON.parse(localStorage.getItem("popupStatus")) ?? true
  );

  useEffect(() => {
    localStorage.setItem("popupStatus", JSON.stringify(isOpen));
  }, [isOpen]);

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

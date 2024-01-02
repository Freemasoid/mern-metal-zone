import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
export const links = [
  {
    id: 1,
    text: "main stage",
    url: "/",
  },
  {
    id: 2,
    text: "lineup",
    url: "/products",
  },
  {
    id: 3,
    text: "backstage",
    url: "/about",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "Personalized Design Consultation",
    text: "Craft a guitar as unique as you are! Collaborate with our team to personalize every detail, ensuring your instrument reflects your distinctive style and personality.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "Tailored Sound Engineering",
    text: "Define your sonic signature! Partner with our experts to fine-tune pickups, tonewoods, and hardware, creating a custom sound that perfectly suits your musical taste.",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "Exclusive Build Process Updates",
    text: "Stay connected to your creation! Receive regular updates, photos, and progress reports on the construction of your custom guitar, ensuring you're part of the exciting journey from start to finish.",
  },
];

export const products_url = "https://e-commerce-api-3xet.onrender.com/api/v1/products";

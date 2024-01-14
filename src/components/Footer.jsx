import styled from "styled-components";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="box logo">
          <Link to="/">
            <img src={logo} alt="metal zone" />
          </Link>
          <p>
            &copy; {new Date().getFullYear()} Metal Zone <br />
            All rights reserved
          </p>
        </div>

        <div className="box newsletter">
          <h3>Newsletter</h3>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <form className="form">
            <input type="email" className="form-input" placeholder="Enter e-mail" />
            <button className="submit-btn" type="button">
              Subscribe
            </button>
          </form>
        </div>

        <div className="box feedback">
          <h3>Feedback</h3>
          <p>
            You can send us Feedback via our{" "}
            <Link className="link" to="/contact">
              Contact Form
            </Link>
            , Discord or support@metalzone.com. If you are happy with our Service you can
            leave a Review on Trustpilot.
          </p>
        </div>

        <div className="box legal">
          <h3>Legal</h3>
          <Link className="link" href="#">
            Terms of Service
          </Link>
          <Link className="link" href="#">
            Privacy Policy
          </Link>
          <Link className="link" href="#">
            Disclaimer
          </Link>
          <Link className="link" href="#">
            Shipping Policy
          </Link>
          <Link className="link" href="#">
            Refund Policy
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  width: 100%;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: var(--clr-black);

  p {
    color: var(--clr-grey-3);
  }

  .container {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1rem;
    padding-right: 1rem;
    display: gird;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 3rem;
  }

  .box {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo {
    p {
      margin-top: 0.5rem;
      text-align: center;
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }

  .newsletter {
    p {
      font-size: 0.875rem;
      line-height: 1.25rem;
      margin-bottom: 1rem;
      text-align: center;
    }

    .form {
      width: 100%;
      max-width: 24rem;
      display: flex;
      flex-direction: column;

      .form-input {
        margin-bottom: 0.5rem;
        height: 2rem;
        border-radius: var(--radius);
        padding-left: 1rem;
        padding-right: 1rem;
        border: none;
      }

      .submit-btn {
        height: 2rem;
        border-radius: var(--radius);
        background-color: var(--clr-primary-5);
        border: none;
        color: var(--clr-white);
        cursor: pointer;
      }
      .submit-btn:active {
        box-shadow: var(--clr-primary-3) 0 3px 7px inset;
        transform: translateY(2px);
      }
    }
  }

  .legal {
    .link {
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: var(--clr-grey-3);
    }

    .link:hover {
      text-decoration-line: underline;
    }
  }

  .feedback {
    .link {
      color: var(--clr-grey-3);
      text-decoration-line: underline;
    }

    .link:hover {
      text-decoration-line: none;
    }
  }

  img {
    width: 7rem;
  }

  h3 {
    color: var(--clr-white);
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  @media (min-width: 640px) {
    .container {
      max-width: 640px;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 768px;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .box {
      align-items: start;
    }

    .logo {
      p {
        text-align: left;
      }
    }

    .newsletter {
      p {
        text-align: left;
      }
    }
  }

  @media (min-width: 1024px) {
    .container {
      max-width: 1024px;
      padding-left: 2rem;
      padding-right: 2rem;
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
  }

  @media (min-width: 1280px) {
    .container {
      max-width: 1280px;
    }
  }

  @media (min-width: 1536px) {
    .container {
      max-width: 1536px;
    }
  }
`;

export default Footer;

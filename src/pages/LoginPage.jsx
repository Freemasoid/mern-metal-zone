import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FormRow } from "../components";
import { useUserContext } from "../context/user_context.jsx";

const initialState = {
  name: "",
  surname: "",
  email: "",
  password: "",
  isMember: true,
};

const LoginPage = () => {
  const [values, setValues] = useState(initialState);
  const navigate = useNavigate();
  const { loginUser, registerUser, user_loading: isLoading, user } = useUserContext();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, surname, email, password, isMember } = values;
    if (!email || !password || (!isMember && (!name || !surname))) {
      toast.error("Please fill out all fields");
      return;
    }

    if (isMember)
      if (isMember) {
        loginUser({ email: email, password: password });
        return;
      }
    registerUser({ name, surname, email, password });
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 3000);
    }
  }, [user, navigate]);

  return (
    <Wrapper>
      <form
        className={values.isMember ? "form" : "form form-register"}
        onSubmit={onSubmit}
      >
        <div className="form-head">
          <h3>{values.isMember ? "Login" : "Register"}</h3>
        </div>

        {!values.isMember && (
          <>
            <FormRow
              type="text"
              name="name"
              value={values.name}
              handleChange={handleChange}
            />
            <FormRow
              type="text"
              name="surname"
              value={values.surname}
              handleChange={handleChange}
            />
          </>
        )}

        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />

        <button type="submit" className="btn" disabled={isLoading}>
          {isLoading ? "Loading..." : "submit"}
        </button>
        <button
          type="button"
          className="btn btn-demo"
          disabled={isLoading}
          onClick={() => loginUser({ email: "testUser@test.com", password: "secret" })}
        >
          {isLoading ? "Loading..." : "demo user"}
        </button>
        <p>
          {values.isMember ? "Not a member yet? " : "Already a member? "}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Register" : "Log-in"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default LoginPage;

const Wrapper = styled.section`
  display: grid;
  align-items: center;

  .btn {
    width: 100%;
    margin-bottom: 1rem;
  }

  .btn-demo {
    background-color: var(--clr-white);
    color: var(--clr-primary-5);
    font-weight: bold;
    border: 0.125rem solid var(--clr-primary-5);
  }

  .btn-demo:hover {
    box-shadow: rgba(45, 35, 66, 0.4) 0 2px 4px, rgba(45, 35, 66, 0.3) 0 7px 13px -3px;
  }

  .btn-demo:active {
    box-shadow: var(--clr-primary-1) 0 3px 7px inset;
    transform: translateY(2px);
  }

  .form-head {
    text-align: center;
  }

  .form {
    display: flex;
    flex-flow: column;
    width: 90vw;
    height: 30rem;
    max-width: 30rem;
    background: var(--white);
    border-radius: var(--radius);
    box-shadow: var(--shadow-2);
    padding: 2rem 2.5rem;
    margin: 3rem auto;
    transition: var(--transition);
    justify-content: space-around;
  }

  .form-register {
    height: 40rem;
  }

  .form:hover {
    box-shadow: var(--shadow-4);
  }
  .form-label {
    display: block;
    margin-bottom: 0.5rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
  }
  .form-input,
  .form-textarea,
  .form-select {
    width: 100%;
    padding: 0.75rem 0.85rem;
    border-radius: var(--radius);
    background: var(--white);
    border: 1px solid var(--clr-grey-2);
  }
  .form-input,
  .form-select {
    font-size: 1rem;
    height: 2.5rem;
  }
  .form-row {
    margin-bottom: 1rem;
  }

  .form-textarea {
    height: 7rem;
  }
  ::placeholder {
    font-family: inherit;
    color: var(--grey-400);
  }
  .form-alert {
    color: var(--clr-primary-6);
    letter-spacing: var(--letterSpacing);
    text-transform: capitalize;
  }

  p {
    font-size: 1rem;
    text-align: center;
  }

  .member-btn {
    text-decoration-line: underline;
    font-size: 1rem;
    background: transparent;
    border: transparent;
    color: black;
    cursor: pointer;
  }

  @media only screen and (min-width: 400px) {
    min-height: calc(90vh - 10rem);
    padding: 2rem 0;
  }
`;

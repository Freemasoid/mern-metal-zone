import styled from "styled-components";
import { useUserContext } from "../context/user_context.jsx";
import { PageHero, SingleOrder } from "../components";
import { useOrderContext } from "../context/order_context.jsx";
import { useEffect } from "react";
import { Loading, Error } from "../components";
import { Link } from "react-router-dom";

const ProfilePage = () => {
  const { user } = useUserContext();
  const {
    user_orders,
    getCurrentUserOrders,
    order_loading: loading,
    order_error: error,
  } = useOrderContext();

  useEffect(() => {
    getCurrentUserOrders();
  }, []);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <Error />;
  }

  if (user_orders.length < 1) {
    return (
      <main>
        <PageHero title="my zone" />
        <Wrapper>
          <div className="profile-center">
            <div className="profile-info">
              <div className="profile-img">
                <img src="" alt="profile image" />
              </div>

              <div className="user-details">
                <h1>
                  {user.name} {user.lastName}
                </h1>
                {user.role === "admin" ? <h5>Admin</h5> : <h5>Metalhead</h5>}
                <p>{user.email}</p>
                <p>{user.location}</p>
              </div>

              <div className="btn-container">
                <button className="btn">Edit</button>
              </div>
            </div>

            <div className="order-info">
              <h1>Past Orders</h1>

              <div className="order-container-empty">
                <h2>Your don't have any orders yet!</h2>
                <p>Discover your next musical companion!</p>

                <Link to="/products" className="btn">
                  take me to the store!
                </Link>
              </div>
            </div>
          </div>
        </Wrapper>
      </main>
    );
  }

  return (
    <main>
      <PageHero title="my zone" />
      <Wrapper>
        <div className="profile-center">
          <div className="profile-info">
            <div className="profile-img">
              <img src="" alt="profile image" />
            </div>

            <div className="user-details">
              <h1>
                {user.name} {user.lastName}
              </h1>
              {user.role === "admin" ? <h5>Admin</h5> : <h5>Metalhead</h5>}
              <p>{user.email}</p>
              <p>{user.location}</p>
            </div>

            <div className="btn-container">
              <button className="btn">Edit</button>
            </div>
          </div>

          <div className="order-info">
            <h1>Past Orders</h1>

            <div className="order-container">
              {user_orders.map((order) => {
                return <SingleOrder key={order._id} {...order} />;
              })}
            </div>
          </div>
        </div>
      </Wrapper>
    </main>
  );
};
export default ProfilePage;

const Wrapper = styled.section`
  hr {
    width: 80%;
    border-top: 1px solid var(--clr-grey-2);
  }

  .profile-info {
    display: flex;
    width: 90vw;
    height: 90vh;
    max-width: 50rem;
    max-height: 15rem;
    background: var(--clr-white);
    border-radius: var(--radius);
    box-shadow: var(--shadow-2);
    padding: 2rem 2.5rem;
    margin: 3rem auto;
    transition: var(--transition);
    align-items: center;
    gap: 1rem;
  }

  .profile-img {
    background-color: var(--clr-grey-2);
    width: 10rem;
    height: 10rem;
    border-radius: var(--radius);
  }

  .user-details {
    text-align: left;
    margin: auto 4rem;
    flex: 1 1 0%;
  }

  .profile-img {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .btn-container {
    display: flex;
    justify-content: center;
    align-self: flex-end;
    margin-left: auto;
  }

  .order-info {
    display: flex;
    flex-direction: column;
    width: 90vw;
    height: 90vh;
    max-width: 50rem;
    max-height: 40rem;
    min-height: 30rem;
    background: var(--white);
    border-radius: var(--radius);
    box-shadow: var(--shadow-2);
    padding: 3rem 2.5rem;
    margin: 3rem auto;
    transition: var(--transition);
    gap: 1rem;
    text-align: center;
  }

  .order-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: auto;
    align-items: center;
    display: flex;
    flex-direction: column;
  }

  .order-container-empty {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 700px) {
    h1 {
      transition: var(--transition);
      font-size: 1.5rem;
    }

    .profile-info {
      display: flex;
      flex-direction: column;
      max-height: 30rem;
    }
    .user-details {
      text-align: center;
    }
  }

  @media (max-width: 850px) {
    h1 {
      overflow: visible;

      text-overflow: clip;
      transition: var(--transition);
      font-size: 2rem;
    }
  }
`;

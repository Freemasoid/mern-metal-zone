import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/hero-bcg.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="Backstage" />
      <Wrapper className="page-100 section-center">
        <img src={aboutImg} alt="nice guitar" />
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Born from a passion for music and a love for craftsmanship, our journey began
            with a dream: to create custom guitars that echo the unique stories of every
            musician.
            <br /> <br /> As our journey expanded, so did our vision. Opening our doors to
            small custom shops, we showcase their unique products on our platform. We
            believe this collaborative spirit fosters mutual success, amplifying diverse
            voices and creating a vibrant community of passionate artisans.
          </p>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  align-items: center;

  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2rem;
    font-size: 1.125rem;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-6);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;

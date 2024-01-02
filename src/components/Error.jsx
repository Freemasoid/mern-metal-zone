import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <div className="section sections-center">
        <h2>Bloody shame, mate, there was an error...</h2>
      </div>
    </Wrapper>
  );
};

export default Error;

const Wrapper = styled.section`
  h2 {
    text-transform: none;
  }
`;

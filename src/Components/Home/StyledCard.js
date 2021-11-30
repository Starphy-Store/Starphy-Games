import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
  color: white;
  margin: auto;
  img {
    border-radius: 3px;
  }
  span {
    font-size: 1.7rem;
  }
  h2 {
    font-size: 1.3rem;
    font-weight: 300;
  }
  a {
    color: white;
  }
`;

export default StyledCard;

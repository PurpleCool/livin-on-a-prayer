import styled from "styled-components";
import Button from "./Button";

const Wrapper = styled.div`
  background-color: rebeccapurple;
  border-radius: 5px;
  display: flex;
  width: 100vw;
  height: 130px;
  justify-content: space-evenly;
  align-items: center;
`;

const Footer = () => {
  return (
    <Wrapper>
      <Button>wish</Button>
      <Button>wish x10</Button>
    </Wrapper>
  );
};

export default Footer;

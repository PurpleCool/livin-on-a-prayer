import { ReactNode } from "react";
import styled from "styled-components";
import Header from "./Header";
import Footer from "./Footer";

const Wrapper = styled.div`
  background-color: #2b2b2b;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
`;

interface Props {
  children: ReactNode;
}

const Panel = ({ children }: Props) => {
  return (
    <Wrapper>
      <Header />
      {children}
      <Footer />
    </Wrapper>
  );
};

export default Panel;

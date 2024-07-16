import { ReactNode } from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  height: max-content;
  width: max-content;
`;

interface Props {
  children: ReactNode;
}

const Button = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Button;

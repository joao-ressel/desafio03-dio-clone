import { StyledButton } from "./style";

// eslint-disable-next-line react/prop-types
export const Button = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};

export default Button;

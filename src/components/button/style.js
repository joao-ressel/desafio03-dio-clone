import styled from "styled-components";

export const StyledButton = styled.button`
  width: 300px;
  padding: 0.5rem 1rem;
  position: relative;
  z-index: 1;

  font-size: 1.2rem;
  color: #fff;
  border: none;
  border-radius: 50px;
  background-color: #e4105d;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  &::before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    border-radius: 50px;
    border: 2px solid #e4105d;
  }
`;

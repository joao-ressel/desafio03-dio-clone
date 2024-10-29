import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  margin-top: 4rem;
  margin: auto 4rem;

  img {
    height: 366px;
    width: auto;
  }
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;

  width: 368px;
  gap: 4rem;

  .text {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h1 {
      font-size: 2rem;
      font-weight: 700;
      span {
        color: #e4105d;
      }
    }
  }

  button {
    width: 200px;
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
  }

  button::before {
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

import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  margin: auto 4rem;
  margin-top: 4rem;

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
`;

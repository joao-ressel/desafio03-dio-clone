import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  height: 100%;
  margin: auto 4rem;
  margin-top: 4rem;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;

  width: 768px;
  gap: 2rem;

  h2 {
    font-size: 20px;
    font-weight: 700;
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 270px;
  gap: 2rem;
  
  h2 {
    font-size: 18px;
    font-weight: 700;
    color: rgba(255,255,255,0.8);
  }
`;

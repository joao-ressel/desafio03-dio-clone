import styled from "styled-components";

export const ContainerProfile = styled.div`
  display: flex;
  gap: 1rem;
  width: 300px;
  span {
    font-weight: 700;
    font-size: 16px;
  }
  img {
    width: 42px;
    height: 42px;
    border: 3px solid #fff;
    border-radius: 100%;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  background-color: #ccc;
  border-radius: 5px;
  overflow: hidden;
`;

export const Progress = styled.div`
  width: ${(props) => props.progress || 0}%;
  height: 8px;
  background-color: #4caf50;
`;

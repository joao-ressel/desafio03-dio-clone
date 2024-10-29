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

  width: 388px;
  gap: 4rem;
  h1 {
    font-size: 2rem;
    font-weight: 700;
  }
`;

export const ContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 374px;
  gap: 2rem;
  h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  .title-subtitle {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .links {
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .green-link {
      font-weight: 700;
      font-size: 0.8rem;
      a {
        text-decoration: none;
        color: #23dd7a;
      }
    }
  }
`;

export const Form = styled.form`
  width: 300px;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

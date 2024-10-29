import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  margin: auto 4rem;
  margin-top: 4rem;
`;

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: column;

  width: 560px;
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

  width: 368px;
  gap: 3rem;
  h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  .title-subtitle{
            display: flex;
            flex-direction: column;
            gap: 0.4rem;
        }

  .links{
        width: 300px;
        display: flex;
        justify-content: space-between;
        
        a{
            text-decoration: none;
            font-size: 0.8rem;
            font-weight: 700;
        }
        .yellow-link{
            color: #E5E044;
        }
        .green-link{
            color: #23DD7A;
        }
    }
`;

export const Form = styled.form`
    width: 300px;
    height: 100%;
    
    display: flex;
    flex-direction: column;

   
`;
import styled from "styled-components";


export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 20px;
  width: 100%;
`;

export const Icon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 10px;
  color: #9B51E0;
`;

export const InputField = styled.input`
  background: none;
  border: none;
  border-bottom: 1px solid #333;
  padding: 10px 10px 10px 40px; /* Espaço para o ícone */
  color: #fff;
  font-size: 1rem;
  outline: none;
  width: 100%;

  &:focus {
    border-bottom: 1px solid #9B51E0;
  }

  &::placeholder {
    color: #ccc;
  }
`;
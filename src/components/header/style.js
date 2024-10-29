import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 0;
  display: flex;

  background-color: #151515;

  img {
    height: 25px;
    width: auto;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin: 0 4rem;
    width: 100%;
  }

  nav ul {
    display: flex;
    gap: 1rem;

    li {
      list-style: none;
      min-width: 120px;
      text-align: center;
      background-color: #565656;
      border-radius: 50px;

      &:hover {
        background-color: #333;
        cursor: pointer;
      }

      a {
        color: #fff;
        text-decoration: none;
      }
    }
  }
`;

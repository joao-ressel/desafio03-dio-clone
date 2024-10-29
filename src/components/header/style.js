import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  height: 50px;
  background-color: #151515;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 0 4rem;
  width: 100%;
`;

export const Logo = styled.img`
  height: 25px;
  width: auto;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const NavItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 120px;

  list-style: none;
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
`;

export const SearchInput = styled.input`
  padding: 0.3rem 0.8rem;
  border: none;
  border-radius: 5px;
`;

export const NavPerfil = styled.li`
  list-style: none;
  text-align: center;

  min-width: 120px;
  border-radius: 50px;

  img {
    width: 32px;
    height: 32px;

    border-radius: 50%;
    border: 3px solid #fff;
  }

  .list-drop {
    display: flex;
    flex-direction: column;

    position: absolute;
    padding: 0 2rem 0 0;

    background: #fff;
    border: 1px solid #ccc;
    border-radius: 5px;

    a {
      text-decoration: none;
      border-radius: 5px;
      color: #000;

      padding: 1rem;
      width: 100%;

      &:hover {
        background-color: #151515;
        color: #fff;
      }
    }
  }
`;

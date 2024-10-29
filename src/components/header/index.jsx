import { useState } from "react";
import { Link } from "react-router-dom";

import logoDIO from "../../assets/logo-dio.png";
import { HeaderContainer, Nav, Logo, NavList, NavItem, SearchInput, NavPerfil } from "./style";

// eslint-disable-next-line react/prop-types
export const Header = ({ isLoggedIn, onLogout, username }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo src={logoDIO} alt="Logo Dio." />
        {isLoggedIn ? (
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <SearchInput type="text" placeholder="Buscar..." />
            <NavList>
              <NavItem to="#" exact>
                Live Code
              </NavItem>
              <NavItem to="#" exact>
                Global
              </NavItem>
              <NavPerfil>
                <button
                  onClick={toggleDropdown}
                  style={{ background: "none", border: "none", cursor: "pointer" }}
                >
                  <img src={`https://github.com/${username}.png`} alt="" />
                </button>
                {isDropdownOpen && (
                  <div className="list-drop">
                    <Link to="#">Editar</Link>
                    <Link
                      to={"/login"}
                      onClick={() => {
                        onLogout();
                        setIsDropdownOpen(false);
                      }}
                    >
                      Sair
                    </Link>
                  </div>
                )}
              </NavPerfil>
            </NavList>
          </div>
        ) : (
          <NavList>
            <NavItem>
              <Link to="/">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/login">Entrar</Link>
            </NavItem>
            <NavItem>
              <Link to="/register">Cadastrar</Link>
            </NavItem>
          </NavList>
        )}
      </Nav>
    </HeaderContainer>
  );
};

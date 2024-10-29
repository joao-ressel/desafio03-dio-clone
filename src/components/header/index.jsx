import { Link } from "react-router-dom";
import logoDIO from "../../assets/logo-dio.png";
import { HeaderContainer } from "./style";

export const Header = () => {
  return (
    <HeaderContainer>
      <nav>
        <img src={logoDIO} alt="Logo Dio." />
        <ul>
          <li>
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            <Link to="/login">Entrar</Link>{" "}
          </li>
          <li>
            <Link to="/register">Cadastrar</Link>
          </li>
        </ul>
      </nav>
    </HeaderContainer>
  );
};

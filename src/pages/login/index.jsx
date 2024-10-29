import { Link } from "react-router-dom";
import { Container, ContainerLeft, ContainerRight, Form } from "./style";
import { Input } from "../../components/input";
import { FiLock, FiMail } from "react-icons/fi";
import Button from "../../components/button";

export const Login = () => {
  return (
    <Container>
      <ContainerLeft>
        <h1>
          A plataforma para você aprender com experts, dominar as principais tecnologias e entrar
          mais rápido nas empresas mais desejadas.
        </h1>
      </ContainerLeft>
      <ContainerRight>
        <div className="title-subtitle">
          <h1>Faça seu cadastro</h1>
          <p>Faça seu login e make the change._</p>
        </div>
        <Form action="">
          <Input type="text" placeholder="E-mail" icon={<FiMail size={20} />} />
          <Input type="text" placeholder="Password" icon={<FiLock size={20} />} />
          <Button>Entrar</Button>
        </Form>

        <div className="links">
          <Link className="yellow-link" href="#">
            Esqueci minha senha
          </Link>
          <Link className="green-link" href="#">
            Criar conta
          </Link>
        </div>
      </ContainerRight>
    </Container>
  );
};

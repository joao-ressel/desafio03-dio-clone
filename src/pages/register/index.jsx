import { Link } from "react-router-dom";
import { Container, ContainerLeft, ContainerRight, Form } from "./style";
import { Input } from "../../components/input";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import Button from "../../components/button";

export const Register = () => {
  return (
    <Container>
      <ContainerLeft>
        <h1>
        A plataforma para você aprender com experts, dominar as principais tecnologias e entrar mais
        rápido nas empresas mais desejadas.
        </h1>
      </ContainerLeft>
      <ContainerRight>
        <div className="title-subtitle">
          <h1>Comece agora grátis</h1>
          <p>Crie sua conta e make the change._</p>
        </div>
        <Form action="">
          <Input type="text" placeholder="Nome completo" icon={<FiUser size={20} />} />
          <Input type="text" placeholder="E-mail" icon={<FiMail size={20} />} />
          <Input type="text" placeholder="Password" icon={<FiLock size={20} />} />
          <Button>Criar minha conta</Button>
        </Form>

        <div className="links">
          <p>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</p>
          <p className="green-link">Já tenho conta.<Link  href="#">{" "}
            Fazer login
          </Link></p>
          
        </div>
      </ContainerRight>
    </Container>
  );
};

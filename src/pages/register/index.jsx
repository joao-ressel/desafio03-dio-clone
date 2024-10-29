import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiLock, FiMail, FiUser } from "react-icons/fi";

import Button from "../../components/button";
import { Input } from "../../components/input";
import { Container, ContainerLeft, ContainerRight, Form } from "./style";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post("http://localhost:3000/api/auth/register", {
        name,
        email,
        password,
      });

      if (response.status === 200) {
        navigate("/login");
      }
    } catch (err) {
      setError(err.response?.data?.msg || "An error occurred. Please try again.");
    }
  };

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
          <h1>Comece agora grátis</h1>
          <p>Crie sua conta e make the change._</p>
        </div>

        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Nome completo"
            icon={<FiUser size={20} />}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <Input
            type="email"
            placeholder="E-mail"
            icon={<FiMail size={20} />}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type="password"
            placeholder="Password"
            icon={<FiLock size={20} />}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button>Criar minha conta</Button>
        </Form>

        {error && <p className="error">{error}</p>}

        <div className="links">
          <p>{`Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.`}</p>
          <p className="green-link">
            Já tenho conta.<Link to="/login"> Fazer login</Link>
          </p>
        </div>
      </ContainerRight>
    </Container>
  );
};

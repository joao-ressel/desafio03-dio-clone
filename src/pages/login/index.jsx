import { useState } from "react";
import { FiLock, FiMail } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/button";
import { Input } from "../../components/input";
import { Container, ContainerLeft, ContainerRight, Form } from "./style";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg);
      }

      localStorage.setItem("authToken", data.token);
      localStorage.setItem("username", data.username);

      navigate("/feed");
    } catch (error) {
      console.error("Erro ao fazer login:", error);
      alert(error.message);
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
          <h1>Faça seu login</h1>
          <p>Faça seu login e make the change._</p>
        </div>
        <Form onSubmit={handleLogin}>
          <Input
            type="text"
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

          {error && <p style={{ color: "red" }}>{error}</p>}

          <Button type="submit">Entrar</Button>
        </Form>

        <div className="links">
          <Link className="yellow-link" to="#">
            Esqueci minha senha
          </Link>
          <Link className="green-link" to="#">
            Criar conta
          </Link>
        </div>
      </ContainerRight>
    </Container>
  );
};

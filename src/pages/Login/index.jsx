/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Modal,
  Container,
  CloseButton,
  Logo,
  Title,
  LoginLink,
  SubmitButton,
  Signup,
} from "./style";
import { InputField } from "../../components/InputField";

export const TwitchLogin = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login:", { user, password });
  };

  return (
    <Modal>
      <Container>
        <CloseButton>×</CloseButton>
        <Logo>
          <img src="src\assets\glitch_flat_purple.png" alt="Twitch Logo" />
          <Title>Entrar na Twitch</Title>
        </Logo>

        <form onSubmit={handleSubmit}>
          <InputField
            label="Usuário"
            type="text"
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          <InputField
            label="Senha"
            type={"password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <LoginLink href="#">Problemas para efetuar login?</LoginLink>

          <SubmitButton type="submit" disabled={!user || !password}>
            Entrar
          </SubmitButton>
        </form>

        <Signup>
          <a href="#">Ainda não possui uma conta? Cadastrar-se</a>
        </Signup>
      </Container>
    </Modal>
  );
};

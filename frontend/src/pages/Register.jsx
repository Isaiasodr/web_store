import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f0d2d7;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 30;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 20px;
`;
const Agreement = styled.p`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Criar conta</Title>
        <Form>
          <Input placeholder="nome" />
          <Input placeholder="Sobrenome" />
          <Input placeholder="E-mail" />
          <Input placeholder="Usuário" />
          <Input placeholder="Senha" />
          <Input placeholder="Confirmar Senha" />
          <Agreement>
            Ao criar uma conta, você está de acordo com os termos.{" "}
            <b>POLÍTICA DE PRIVACIDADE</b>
          </Agreement>
        </Form>
        <Button>Cadastrar</Button>
      </Wrapper>
    </Container>
  );
};

export default Register;

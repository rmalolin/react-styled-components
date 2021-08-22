import React from "react";
import {
  Container,
  Form,
  FormButton,
  FormLabel,
  Formh1,
  Text,
  FormContent,
  FormInput,
  FormWrap,
  Icon,
} from "./SigninElements";

const Signin = () => {
  return (
    <Container>
      <FormWrap>
        <Icon to="/">dolla</Icon>
        <FormContent>
          <Form action="#">
            <Formh1>Sign in to your account</Formh1>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" required />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" required />
            <FormButton type="submit">Continue</FormButton>
            <Text>Forgot password</Text>
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
  );
};

export default Signin;

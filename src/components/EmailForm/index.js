import React, { useState } from "react";
import {
  FormContainer,
  FormContentContainer,
  InputContainer,
  NameInput,
  EmailInput,
  MessageInput,
  SubmitButton,
} from "./EmailFormElements";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <FormContainer>
      <FormContentContainer>
        <InputContainer>
          <NameInput />
          <EmailInput />
          <MessageInput />
        </InputContainer>
        <SubmitButton />
      </FormContentContainer>
    </FormContainer>
  );
};

export default EmailForm;

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
          <NameInput
            id="name"
            name="name"
            onChange={(event) => {
              event.preventDefault();
              setName(event.target.value);
            }}
          />
          <EmailInput
            id="email"
            name="email"
            onChange={(event) => {
              event.preventDefault();
              setEmail(event.target.value);
            }}
          />
          <MessageInput
            id="message"
            name="message"
            onChange={(event) => {
              event.preventDefault();
              setMessage(event.target.value);
            }}
          />
        </InputContainer>
        <SubmitButton />
      </FormContentContainer>
    </FormContainer>
  );
};

export default EmailForm;

import React, { useState, useEffect } from "react";
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

  const sendMessage = (event) => {
    event.preventDefault();
    console.log(name, email, message);

    event.target.reset();
  };

  return (
    <FormContainer>
      <FormContentContainer>
        <InputContainer onSubmit={sendMessage}>
          <NameInput
            id="name"
            name="name"
            placeholder="Your name"
            required
            onChange={(event) => {
              event.preventDefault();
              setName(event.target.value);
            }}
          />
          <EmailInput
            id="email"
            name="email"
            placeholder="Your email"
            required
            onChange={(event) => {
              event.preventDefault();
              setEmail(event.target.value);
            }}
          />
          <MessageInput
            id="message"
            name="message"
            placeholder="Your message"
            rows="10"
            columns="50"
            required
            onChange={(event) => {
              event.preventDefault();
              setMessage(event.target.value);
            }}
          />
        </InputContainer>
        <SubmitButton value="send" type="submit">
          Send
        </SubmitButton>
      </FormContentContainer>
    </FormContainer>
  );
};

export default EmailForm;

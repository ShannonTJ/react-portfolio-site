import React, { useState } from "react";
import {
  FormContainer,
  FormContentContainer,
  InputContainer,
  NameInput,
  EmailInput,
  MessageInput,
  SubmitButton,
  MessageReceived,
} from "./EmailFormElements";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const sendMessage = (event) => {
    event.preventDefault();
    console.log(name, email, message);

    setName("");
    setEmail("");
    setMessage("");
    setShowConfirmation(true);
  };

  return (
    <FormContainer>
      <FormContentContainer>
        {showConfirmation && (
          <MessageReceived>
            Thank you! Your message has been received.
          </MessageReceived>
        )}
        {!showConfirmation && (
          <InputContainer>
            <NameInput
              id="name"
              name="name"
              value={name}
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
              value={email}
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
              value={message}
              placeholder="Your message"
              rows="10"
              columns="50"
              required
              onChange={(event) => {
                event.preventDefault();
                setMessage(event.target.value);
              }}
            />

            <SubmitButton
              value="send"
              type="submit"
              onClick={(event) => sendMessage(event)}
            >
              Send
            </SubmitButton>
          </InputContainer>
        )}
      </FormContentContainer>
    </FormContainer>
  );
};

export default EmailForm;

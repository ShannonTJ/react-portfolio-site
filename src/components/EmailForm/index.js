import emailjs from "emailjs-com";
import { init } from "emailjs-com";
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
  FormLabel,
  LabelTextContainer,
  FormTitle,
} from "./EmailFormElements";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const sendMessage = (event) => {
    event.preventDefault();
    console.log(name, email, message);

    const templateParams = {
      from_name: name + " " + email,
      to_name: "Shannon",
      message: message,
    };

    emailjs.send("service_xvwplsp", "template_pc94hop", templateParams).then(
      function (response) {
        setName("");
        setEmail("");
        setMessage("");
        setShowConfirmation(true);
        console.log("SUCCESS", response.status, response.text);
      },
      function (error) {
        console.log("FAILED", error);
      }
    );
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
            <FormTitle>Send a message</FormTitle>
            <LabelTextContainer>
              <FormLabel>Name</FormLabel>
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
            </LabelTextContainer>
            <LabelTextContainer>
              <FormLabel>Email Address</FormLabel>
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
            </LabelTextContainer>
            <LabelTextContainer>
              <FormLabel>Email Content</FormLabel>
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
            </LabelTextContainer>
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

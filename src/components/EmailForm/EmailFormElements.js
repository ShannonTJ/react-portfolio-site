import styled from "styled-components/macro";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
  margin-bottom: 2rem;
  max-width: 100%;

  @media screen and (max-width: 650px) {
    margin-bottom: 4rem;
  }
`;

export const FormContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #5d6d7e;
  padding: 30px;
  border-radius: 10px;
  height: 700px;

  @media screen and (max-width: 650px) {
    width: 350px;
  }
`;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NameInput = styled.input`
  padding: 16px 0 16px 10px;
  width: 500px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;

  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;

  @media screen and (max-width: 650px) {
    width: 340px;
  }
`;
export const EmailInput = styled.input`
  padding: 16px 0 16px 10px;
  width: 500px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;

  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;

  @media screen and (max-width: 650px) {
    width: 340px;
  }
`;
export const MessageInput = styled.textarea`
  padding: 16px 0 16px 10px;
  width: 500px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;

  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;

  @media screen and (max-width: 650px) {
    width: 340px;
  }
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  background-color: #5484aa;
  color: #fff;
  margin-top: 10px;

  padding: 16px 60px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: #fff;
    color: #5484aa;
  }
`;

export const MessageReceived = styled.p`
  display: flex;
  color: #fff;
`;

export const FormLabel = styled.label`
  display: flex;
  align-items: left;
  text-align: left;
  justify-content: flex-start;
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #fff;
  text-transform: uppercase;
`;

export const FormTitle = styled.h1`
  color: #fff;
  text-transform: uppercase;
  font-size: 25px;
  font-weight: 400;
  margin-bottom: 16px;
`;

export const LabelTextContainer = styled.div``;

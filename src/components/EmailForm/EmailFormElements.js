import styled from "styled-components/macro";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 8rem;
  margin-bottom: 2rem;
  max-width: 100%;

  @media screen and (max-width: 480px) {
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
  width: 400px;
  height: 100%;
`;

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const NameInput = styled.input`
  margin-top: 32px;
  padding: 16px 140px 16px 10px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;

  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
`;
export const EmailInput = styled.input`
  padding: 16px 140px 16px 10px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;

  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
`;
export const MessageInput = styled.textarea`
  padding: 16px 120px 16px 10px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;

  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
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

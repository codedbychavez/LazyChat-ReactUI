import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import ChatSubmitButtonIcon from "./ChatSubmitButtonIcon";

const ChatSubmitButton = () => {
  return (
    <StyledButton type="submit">
      <ChatSubmitButtonIcon />
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  width: 40px;
  height: 40px;
  outline-style: initial;
  border-radius: 100px;
  cursor: pointer;
  background-color: #9599e2;
  border: 0px;
  :hover {
    background-color: #8488d6;
  }
`;

export default ChatSubmitButton;

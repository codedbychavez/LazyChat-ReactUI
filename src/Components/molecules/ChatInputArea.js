import React, { useState } from "react";
import styled from "styled-components";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

import ChatSubmitButton from "../atoms/ChatSubmitButton";
import ChatTextInputField from "../atoms/ChatTextInputField";

const ChatInputArea = ({ handleMessageSubmit }) => {
  const [message, setMessage] = useState("");

  const handleMessageInputChange = (event) => setMessage(event.target.value);

  const handleSubmit = (event) => {
    handleMessageSubmit(message);
    setMessage("");
    event.preventDefault();
  };

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <Row>
          <Col>
            <ChatTextInputField
              message={message}
              handleMessageInputChange={handleMessageInputChange}
            />
          </Col>
          <Col xs="auto" md="auto">
            <ChatSubmitButton />
          </Col>
        </Row>
      </StyledForm>
    </FormWrapper>
  );
};

const StyledForm = styled(Form)`
  width: 32rem;
`;

const FormWrapper = styled.div`
  margin: auto;
  margin-top: 1rem;
`;

export default ChatInputArea;

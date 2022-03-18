import React from "react";
import Form from "react-bootstrap/Form";

const ChatTextInputField = (props) => {
  return (
    <Form.Control
      value={props.message}
      onChange={props.handleMessageInputChange}
      type="text"
      placeholder="Enter message..."
      required
    />
  );
};

export default ChatTextInputField;

import styled from "styled-components";
import UserArea from "../molecules/UserArea";

import ChatContentArea from "../molecules/ChatContentArea";

import { Card } from "react-bootstrap";
import ChatInputArea from "../molecules/ChatInputArea";
import { useState } from "react";

const ChatWindow = () => {
  const [messages, setMessages] = useState([]);

  const ChatAgentMessages = [
    "Hello",
    "whats up",
    "ok",
    "lets talk",
    "thats great",
    "what is the weather like?",
  ];

  const RandomNumber = Math.ceil(Math.random() * 5);

  const handleMessageSubmit = (message) => {
    setMessages((messages) => {
      return [...messages, message, ChatAgentMessages[RandomNumber]];
    });
  };

  return (
    <ChatWindowWrapper>
      <UserArea />

      <ChatContentArea messages={messages} />

      <ChatInputArea handleMessageSubmit={handleMessageSubmit} />
    </ChatWindowWrapper>
  );
};

const ChatWindowWrapper = styled(Card)`
  width: 40rem;
  height: 45rem;
  border-radius: 10px;
`;

export default ChatWindow;

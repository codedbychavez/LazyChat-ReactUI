import { Card } from "react-bootstrap";
import styled from "styled-components";
import ChatBubble from "../atoms/ChatBubble";

const ChatContentArea = ({ messages }) => {
  return (
    <ChatContentAreaWrapper>
      {messages.length > 0 ? (
        messages.map((message, messageIndex) => {
          return (
            <ChatBubble
              index={messageIndex}
              key={messageIndex}
              message={message}
            />
          );
        })
      ) : (
        <div>Send a message to Andy.</div>
      )}
    </ChatContentAreaWrapper>
  );
};

const ChatContentAreaWrapper = styled(Card)`
  height: 65%;
  width: 80%;
  margin: 5px auto 1rem auto;
  background-color: #f8f6f6;
  border: 0px;
  border-radius: 0px;
  padding: 1rem;
  overflow: scroll;
  overflow-x: hidden;

  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
    background: transparent; /* Optional: just make scrollbar invisible */
  }
  /* Optional: show position indicator in red */
  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }
`;

export default ChatContentArea;

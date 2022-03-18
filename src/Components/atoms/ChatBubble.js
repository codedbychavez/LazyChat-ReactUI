import React from 'react';
import { Card } from 'react-bootstrap';
import styled from "styled-components";

const ChatBubble = (props) => {
  const message = props.message;
  const index = props.index;
  if(index % 2 !== 0) {
    return (
        <UserChatBubbleWrapper>{message}</UserChatBubbleWrapper>
    )
  }
  return (
    <AgentChatBubbleWrapper>{message}</AgentChatBubbleWrapper>
  )
}

const UserChatBubbleWrapper = styled(Card)`
    background-color: #E9E7E7;
    padding: 5px 15px 5px 15px;
    border: 0px;
    border-radius: 20px;
    border-top-left-radius: 2px;
    margin-bottom: 1rem;
    font-size: 16px;
    font-weight: 300;
    width: fit-content;
`

const AgentChatBubbleWrapper = styled(Card)`
    background-color: #E9E7E7;
    padding: 5px 15px 5px 15px;
    border: 0px;
    border-radius: 20px;
    border-top-right-radius: 2px;
    margin-bottom: 1rem;
    font-size: 16px;
    font-weight: 300;
    width: fit-content;
    align-self: flex-end;
`

export default ChatBubble
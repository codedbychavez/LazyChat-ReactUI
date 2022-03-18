import styled from "styled-components";
import UserArea from "../molecules/UserArea";

import ChatContentArea from "../molecules/ChatContentArea";

import { Card } from "react-bootstrap";
import ChatInputArea from "../molecules/TextInputArea";


const ChatWindow = () => {
    return (
        <ChatWindowWrapper>

            <UserArea />
            <ChatContentArea/>
            <ChatInputArea />
           
        </ChatWindowWrapper>
    )
}

const ChatWindowWrapper = styled(Card)`
    width: 40rem;
    height: 45rem;
    border-radius: 10px;
`

export default ChatWindow;

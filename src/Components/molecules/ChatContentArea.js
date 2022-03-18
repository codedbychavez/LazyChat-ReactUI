import { Card } from "react-bootstrap";
import styled from "styled-components"

const ChatContentArea = () => {
    return (
        <ChatContentAreaWrapper>
            <div>Chat content area</div>
        </ChatContentAreaWrapper>
    )
}

const ChatContentAreaWrapper = styled(Card)`
    height: 65%;
    width: 80%;
    margin: 5px auto 1rem auto;
    background-color: #F8F6F6;
    border: 0px;
    border-radius: 0px;
    padding: 1rem;
`

export default ChatContentArea;
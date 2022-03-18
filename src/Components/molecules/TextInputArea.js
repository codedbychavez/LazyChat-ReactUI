import React from 'react'
import styled from "styled-components";
import { Col, Form, Row, Button } from 'react-bootstrap';
import SendSVGIcon from '../svgs/SendSVGIcon';

const ChatInputArea = () => {
  return (
      <FormWrapper>
        <StyledForm>
            <Row>
                <Col>
                    <Form.Control type="text" placeholder="Enter message..." />
                </Col>
                <Col xs="auto" md="auto">
                <StyledButton variant="primary" type="submit">
                    <SendSVGIcon/>
                </StyledButton>
                </Col>
            </Row>

           
        </StyledForm>
      </FormWrapper>
  )
}

const StyledForm = styled(Form)`
    width: 32rem;
`

const FormWrapper = styled.div`
    margin: auto;
    margin-top: 1rem;
`

const StyledButton = styled(Button)`
    width: 40px;
    height: 40px;
    outline-style:initial;
    border-radius: 100px;
    cursor: pointer;
    background-color: #9599E2;
    border: 0px;
    :hover{
        background-color: #8488D6;
    }
`

export default ChatInputArea
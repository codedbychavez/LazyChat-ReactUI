import styled from "styled-components";
import Card from "react-bootstrap/Card";
import UserImage from "../atoms/UserImage";
import UserName from "../atoms/UserName";
import UserStatus from "../atoms/UserStatus";

const UserArea = () => {
  return (
    <UserAreaWrapper>
      <FlexWrapper>
        <UserImage />
        <UserNameAndStatusContainer>
          <UserName />
          <UserStatus />
        </UserNameAndStatusContainer>
      </FlexWrapper>
    </UserAreaWrapper>
  );
};

const UserAreaWrapper = styled(Card)`
  height: 10%;
  width: 80%;
  border-radius: 0px;
  border: 0px;
  margin: 1rem auto 0px auto;
`;

const UserNameAndStatusContainer = styled.div`
  margin-left: 1rem;
`;

const FlexWrapper = styled.div`
  display: flex;
`;

export default UserArea;

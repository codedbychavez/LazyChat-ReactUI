import styled from "styled-components";

import { Image } from "react-bootstrap";
import UserPhoto from "../../assets/UserPhoto.jpeg";

const UserImage = () => {
  return <StyledImage fluid={true} roundedCircle={true} src={UserPhoto} />;
};

const StyledImage = styled(Image)`
  width: 3.5rem;
`;

export default UserImage;

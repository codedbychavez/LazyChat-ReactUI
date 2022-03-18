import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import styled from "styled-components";

import ChatWindow from "./components/organisms/ChatWindow";

const App = () => {
  return (
    <AppWrapper>
      <ChatWindow />
    </AppWrapper>
  );
};

const AppWrapper = styled(Container)`
  margin: 5rem;
`;

export default App;

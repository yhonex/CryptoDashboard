import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import "./App.css";

import DashBoard from "./pages/DashBoard";

const Container = styled.div`
  padding: 10px;
  overflow-x: none;
`;

function App() {
  return (
    <>
      <Container>
        <DashBoard />
      </Container>
    </>
  );
}

export default App;

import "./App.css";
import "bootswatch/dist/cyborg/bootstrap.min.css";
import SCSColumn from "./components/column";
import { Col, Row } from "react-bootstrap";
import StatusBar from "./components/statusbar";
import AuthInput from "./components/non_game/auth";

function App() {
  return (
    <div className="App">
      <div className="ColumnsContainer">
        <Row className="ColumnsRow">
          <Col>
            <SCSColumn title="Non-Game Functions">
              <AuthInput></AuthInput>
            </SCSColumn>
          </Col>
          <Col>
            <SCSColumn title="Visible Functions"></SCSColumn>
          </Col>
          <Col>
            <SCSColumn title="Invisible Functions"></SCSColumn>
          </Col>
          <Col>
            <SCSColumn title="Log"></SCSColumn>
          </Col>
        </Row>
      </div>
      <footer className="footer bg-dark text-light">
        <StatusBar></StatusBar>
      </footer>
    </div>
  );
}

export default App;

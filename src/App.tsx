import "./App.css";
import "bootswatch/dist/superhero/bootstrap.min.css";
import SCSColumn from "./components/column";
import { Col, Row } from "react-bootstrap";
import StatusBar from "./components/statusbar";
import AuthInput from "./components/non_game/auth";
import CreateGame from "./components/non_game/create_game";
import JoinGame from "./components/non_game/join_game";
import StartGame from "./components/non_game/start_game";
import ShootTrigger from "./components/visible/shoot";
import GotHit from "./components/visible/got_hit";
import InvisibleFunctions from "./components/invisible_functions";
import StatusDisplay from "./components/status";
import LogDisplay from "./components/log";

function App() {
  return (
    <div className="App">
      <div className="ColumnsContainer">
        <Row className="ColumnsRow">
          <Col>
            <SCSColumn title="Non-Game / API Functions">
              <span className="text-white fw-bold">Authenticate</span>
              <AuthInput />
              <hr />
              <span className="text-white fw-bold">Create Game</span>
              <CreateGame />
              <hr />
              <span className="text-white fw-bold">Join Game</span>
              <JoinGame />
              <hr />
              <span className="text-white fw-bold">StartGame</span>
              <StartGame />
              <hr />
            </SCSColumn>
          </Col>
          <Col>
            <SCSColumn title="Visible Functions">
              <span className="text-white fw-bold">Shoot</span>
              <ShootTrigger />
              <hr />
              <span className="text-white fw-bold">Got Hit</span>
              <GotHit />
              <hr />
            </SCSColumn>
          </Col>
          <Col>
            <SCSColumn title="Invisible Functions" halfHeight={true}>
              <InvisibleFunctions></InvisibleFunctions>
            </SCSColumn>
            <SCSColumn title="Status" halfHeight={true}>
              <StatusDisplay></StatusDisplay>
            </SCSColumn>
          </Col>
          <Col>
            <SCSColumn title="Log">
              <LogDisplay />
            </SCSColumn>
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

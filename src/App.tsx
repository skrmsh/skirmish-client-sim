import "./App.css";
import "bootswatch/dist/cyborg/bootstrap.min.css";
import SCSColumn from "./components/column";
import { Col, Row } from "react-bootstrap";
import StatusBar from "./components/statusbar";
import AuthInput from "./components/non_game/auth";
import CreateGame from "./components/non_game/create_game";
import JoinGame from "./components/non_game/join_game";
import StartGame from "./components/non_game/start_game";
import ShootTrigger from "./components/visible/shoot";
import GotHit from "./components/visible/got_hit";
import InvisibleFunctions from "./components/other/invisible_functions";
import StatusDisplay from "./components/other/status";
import LogDisplay from "./components/other/log";
import { useEffect, useState } from "react";
import { getApiConfiguration } from "./util/helperFunctions";
import { GameApi, UserApi } from "./Api/generated";

const __DEV__ = !process.env.NODE_ENV || process.env.NODE_ENV === "development";

function App() {
  const [serverUrl, setServerUrl] = useState(
    __DEV__
      ? "skirmish.olel.de"
      : `${window.location.hostname}:${window.location.port}`
  );
  const [secureConnection, setSecureConnection] = useState(
    __DEV__ ? true : false
  );

  const [connectionState, setConnectionState] = useState(false);
  const [accessToken, setAccessToken] = useState("-");

  const [userAPI, setUserAPI] = useState(
    new UserApi(getApiConfiguration(serverUrl, secureConnection))
  );
  const [gameAPI, setGameAPI] = useState(
    new GameApi(getApiConfiguration(serverUrl, secureConnection))
  );

  useEffect(() => {
    setUserAPI(new UserApi(getApiConfiguration(serverUrl, secureConnection)));
    setGameAPI(new GameApi(getApiConfiguration(serverUrl, secureConnection)));
  }, [serverUrl, secureConnection]);

  return (
    <div className="App">
      <div className="ColumnsContainer">
        <Row className="ColumnsRow">
          <Col>
            <SCSColumn title="Non-Game / API Functions">
              <span className="text-white fw-bold">Authenticate</span>
              <AuthInput userApi={userAPI} setAccessToken={setAccessToken} />
              <hr />
              <span className="text-white fw-bold">Create Game</span>
              <CreateGame gameApi={gameAPI} />
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
        <StatusBar
          serverUrl={serverUrl}
          setServerUrl={setServerUrl}
          secureConnection={secureConnection}
          setSecureConnection={setSecureConnection}
          connectionState={connectionState}
          accessToken={accessToken}
        />
      </footer>
    </div>
  );
}

export default App;

import "./status.css";
import { Col, Row } from "react-bootstrap";

function StatusDisplay() {
  return (
    <Row>
      <Col>
        <div className="mt-1">
          <span className="fw-bold">Running (Countdown): </span>
          <br />
          <pre>No (-1)</pre>
        </div>
        <div className="mt-1">
          <span className="fw-bold">GID / PID: </span>
          <br />
          <pre>WeirdName / 0</pre>
        </div>
        <div className="mt-1">
          <span className="fw-bold">Name: </span>
          <br />
          <pre>Hans Wurst</pre>
        </div>
        <div className="mt-1">
          <span className="fw-bold">Health: </span>
          <br />
          <pre>100</pre>
        </div>
        <div className="mt-1">
          <span className="fw-bold">Points: </span>
          <br />
          <pre>1700</pre>
        </div>
        <div className="mt-1">
          <span className="fw-bold">Color / Light: </span>
          <br />
          <div className="ColorCircle"></div>
          <pre style={{ display: "inline" }}> / On</pre>
        </div>
        <div className="mt-1">
          <span className="fw-bold">Max Shot Interval: </span>
          <br />
          <pre>300ms</pre>
        </div>
        <div className="mt-1">
          <span className="fw-bold">Ammo: </span>
          <br />
          <pre>-</pre>
        </div>
      </Col>
      <Col>
        <div className="mt-1">
          <span className="fw-bold">Player Rank / Count: </span>
          <br />
          <pre>1 / 2</pre>
        </div>
        <div className="mt-1">
          <span className="fw-bold">Team ID: </span>
          <br />
          <pre>-1</pre>
        </div>
        <div className="mt-1">
          <span className="fw-bold">Team Rank / Count: </span>
          <br />
          <pre>1 / 1</pre>
        </div>
        <div className="mt-1">
          <span className="fw-bold">Team Players (Points)</span>
          <br />
          <pre>1 (1700)</pre>
        </div>
        <div className="mt-1">
          <span className="fw-bold">Phaser Enabled </span>
          <br />
          <pre>🔫</pre>
        </div>
        <div className="mt-1">
          <span className="fw-bold">Inviolable: </span>
          <br />
          <pre>🛡️</pre>
        </div>
        <div className="mt-1">
          <span className="fw-bold">Ammo Enabled: </span>
          <br />
          <pre>No</pre>
        </div>
      </Col>
    </Row>
  );
}

export default StatusDisplay;

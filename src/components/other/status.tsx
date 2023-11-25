import { useEffect, useState } from "react";
import SocketManager from "../../util/socketManager";
import "./status.css";
import { Col, Row } from "react-bootstrap";
import TimeManager from "../../util/timeManager";
import Logger from "../../util/logger";

function parsePGTField(data: any, fieldName: string, setter: CallableFunction) {
  if (data[fieldName] !== undefined) {
    setter(data[fieldName]);
  }
}

function StatusDisplay() {
  const [pid, setPid] = useState(0);
  const [playerName, setPlayerName] = useState("");
  const [playerHealth, setPlayerHealth] = useState(0);
  const [playerPoints, setPlayerPoints] = useState(0);
  const [playerColorRed, setPlayerColorRed] = useState(0);
  const [playerColorGreen, setPlayerColorGreen] = useState(0);
  const [playerColorBlue, setPlayerColorBlue] = useState(0);
  const [playerColorBeforeGame, setPlayerColorBeforeGame] = useState(false);
  const [playerAmmoLimit, setPlayerAmmoLimit] = useState(false);
  const [playerAmmo, setPlayerAmmo] = useState(0);
  const [phaserEnable, setPhaserEnable] = useState(false);
  const [phaserDisableUntil, setPhaserDisableUntil] = useState(0);
  const [maxShotInterval, setMaxShotInterval] = useState(0);
  const [playerRank, setPlayerRank] = useState(0);
  const [playerInviolable, setPlayerInviolable] = useState(false);
  const [playerInviolableUntil, setPlayerInviolableUntil] = useState(0);
  const [playerInviolableLightsOff, setPlayerInviolableLightsOff] =
    useState(false);

  const [gid, setGid] = useState("");
  const [gamePlayerCount, setGamePlayerCount] = useState(0);
  const [gameTeamCount, setGameTeamCount] = useState(0);
  const [gameStartTime, setGameStartTime] = useState(0);
  const [gameCreatedAt, setGameCreatedAt] = useState(0);
  const [gameCreatedBy, setGameCreatedBy] = useState("");

  // create useEffect to set these values
  const [isLightOn, setLightOn] = useState(true);
  const [isPhaserEnabled, setIsPhaserEnabled] = useState(true);
  const [isGameRunning, setGameRunning] = useState(true);
  const [gameCountdown, setGameCountdown] = useState(NaN);
  const [isPlayerInviolable, setIsPlayerInviolable] = useState(false);

  const [timer, setTimer] = useState<any>(null);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    if (!!!timer) {
      setTimer(
        setInterval(() => {
          let currentTime = TimeManager.Instance.getTime();
          setCurrentTime(currentTime);
        }, 1000)
      );
    }
  }, []);

  useEffect(() => {
    // running / countdown
    if (gameStartTime > 0) {
      if (gameStartTime > currentTime) {
        setGameRunning(false);
        setGameCountdown(Math.floor(gameStartTime - currentTime));
      } else {
        setGameRunning(true);
      }
    } else {
      setGameRunning(false);
    }

    // phaserEnabled
    if (!!phaserDisableUntil) {
      if (phaserEnable === false) setIsPhaserEnabled(false);
      else if (phaserDisableUntil - currentTime > 0) setIsPhaserEnabled(false);
      else setIsPhaserEnabled(true);
    }

    // Inviolable
    if (!!playerInviolableUntil) {
      if (playerInviolable === true) setIsPlayerInviolable(true);
      else if (playerInviolableUntil - currentTime > 0)
        setIsPlayerInviolable(true);
      else setIsPlayerInviolable(false);
    }
  }, [
    currentTime,
    gameStartTime,
    phaserDisableUntil,
    phaserEnable,
    playerInviolable,
    playerInviolableUntil,
  ]);

  useEffect(() => {
    if (isPlayerInviolable && playerInviolableLightsOff) {
      setLightOn(false);
      return;
    }

    if (!isPhaserEnabled) {
      setLightOn(false);
      return;
    }

    if (!isGameRunning && !playerColorBeforeGame) {
      setLightOn(false);
      return;
    }

    setLightOn(true);
  }, [isPlayerInviolable, playerColorBeforeGame, isPhaserEnabled]);

  SocketManager.Instance.onMessage((data: any) => {
    parsePGTField(data, "p_id", setPid);
    parsePGTField(data, "p_n", setPlayerName);
    parsePGTField(data, "p_h", setPlayerHealth);
    parsePGTField(data, "p_p", setPlayerPoints);
    parsePGTField(data, "p_cr", setPlayerColorRed);
    parsePGTField(data, "p_cg", setPlayerColorGreen);
    parsePGTField(data, "p_cb", setPlayerColorBlue);
    parsePGTField(data, "p_cbg", setPlayerColorBeforeGame);
    parsePGTField(data, "p_al", setPlayerAmmoLimit);
    parsePGTField(data, "p_a", setPlayerAmmo);
    parsePGTField(data, "p_pe", setPhaserEnable);
    parsePGTField(data, "p_pdu", setPhaserDisableUntil);
    parsePGTField(data, "p_msi", setMaxShotInterval);
    parsePGTField(data, "p_r", setPlayerRank);
    parsePGTField(data, "p_i", setPlayerInviolable);
    parsePGTField(data, "p_iu", setPlayerInviolableUntil);
    parsePGTField(data, "p_ilo", setPlayerInviolableLightsOff);
    parsePGTField(data, "g_id", setGid);
    parsePGTField(data, "g_pc", setGamePlayerCount);
    parsePGTField(data, "g_tc", setGameTeamCount);
    parsePGTField(data, "g_st", setGameStartTime);
    parsePGTField(data, "g_ca", setGameCreatedAt);
    parsePGTField(data, "g_cb", setGameCreatedBy);
  });

  return (
    <Row>
      <Col>
        <div className="mt-1">
          <span className="fw-bold">Running (Countdown): </span>
          <br />
          <pre>
            {isGameRunning ? "Yes" : "No"} ({gameCountdown})
          </pre>
        </div>
        <div className="mt-1">
          <span className="fw-bold">GID / PID: </span>
          <br />
          <pre>
            {gid} / {pid}
          </pre>
        </div>
        <div className="mt-1">
          <span className="fw-bold">Name: </span>
          <br />
          <pre>{playerName}</pre>
        </div>
        <div className="mt-1">
          <span className="fw-bold">Health: </span>
          <br />
          <pre>{playerHealth}</pre>
        </div>
        <div className="mt-1">
          <span className="fw-bold">Points: </span>
          <br />
          <pre>{playerPoints}</pre>
        </div>
        <div className="mt-1">
          <span className="fw-bold">Color / Light: </span>
          <br />
          <div
            className="ColorCircle"
            style={{
              background: `rgba(${playerColorRed},${playerColorGreen},${playerColorBlue},255)`,
            }}
          ></div>
          <pre style={{ display: "inline" }}> / {isLightOn ? "Yes" : "No"}</pre>
        </div>
        <div className="mt-1">
          <span className="fw-bold">Max Shot Interval: </span>
          <br />
          <pre>{maxShotInterval}ms</pre>
        </div>
        <div className="mt-1">
          <span className="fw-bold">Ammo: </span>
          <br />
          <pre>{playerAmmo}</pre>
        </div>
      </Col>
      <Col>
        <div className="mt-1">
          <span className="fw-bold">Player Rank / Count: </span>
          <br />
          <pre>
            {playerRank} / {gamePlayerCount}
          </pre>
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
          <pre>{isPhaserEnabled ? "🔫" : ""}</pre>
        </div>
        <div className="mt-1">
          <span className="fw-bold">Inviolable: </span>
          <br />
          <pre>{isPlayerInviolable ? "🛡️" : ""}</pre>
        </div>
        <div className="mt-1">
          <span className="fw-bold">Ammo Limit Enabled: </span>
          <br />
          <pre>{playerAmmoLimit ? "Yes" : "No"}</pre>
        </div>
      </Col>
    </Row>
  );
}

export default StatusDisplay;

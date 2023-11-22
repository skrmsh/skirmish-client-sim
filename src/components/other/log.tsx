import "./log.css";
import { Col, Row } from "react-bootstrap";

function LogDisplay() {
  var logText = ``;
  for (let i = 0; i < 150; i++) {
    logText += "never\ngonna\ngive\nyou\nup!\n";
  }
  return (
    <>
      <div className="log">{logText}</div>
    </>
  );
}

export default LogDisplay;

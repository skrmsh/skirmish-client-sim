import "./log.css";
import { Col, Row } from "react-bootstrap";

interface LogDisplayParams {
  log: string;
}

function LogDisplay(params: LogDisplayParams) {
  return (
    <>
      <div className="log">{params.log}</div>
    </>
  );
}

export default LogDisplay;

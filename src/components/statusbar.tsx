import "./statusbar.css";
import { Button, Col, Form, InputGroup } from "react-bootstrap";

function StatusBar() {
  let connectionState = true;
  return (
    <div className="StatusBar">
      <div className="StatusElement">
        <Form.Control type="text" placeholder="Server URL"></Form.Control>
      </div>
      <div className="StatusElement ms-1">
        <Form.Check
          type="checkbox"
          label="Secure Connection"
          className="SecureConnectionCheck"
        ></Form.Check>
      </div>
      <div className="StatusElement ms-5">🟢 Connected to Server!</div>
      <div className="StatusElement ms-5">
        Access Token: o23fwpsdjf293jf9jdsklf293j (validated)
      </div>
    </div>
  );
}

export default StatusBar;

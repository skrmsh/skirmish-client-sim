import { useEffect, useState } from "react";
import "./statusbar.css";
import { Button, Col, Form, InputGroup } from "react-bootstrap";

interface StatusBarParams {
  serverUrl: string;
  setServerUrl: CallableFunction;
  secureConnection: boolean;
  setSecureConnection: CallableFunction;
  connectionState: boolean;
  accessToken: string;
}

function StatusBar(params: StatusBarParams) {
  const [serverUrlInput, setServerUrlInput] = useState(params.serverUrl);
  const [secureConnectionInput, setSecureConnectionInput] = useState(
    params.secureConnection
  );

  useEffect(() => {
    setServerUrlInput(params.serverUrl);
  }, [params.serverUrl]);
  useEffect(() => {
    setSecureConnectionInput(params.secureConnection);
  }, [params.secureConnection]);

  return (
    <div className="StatusBar">
      <div className="StatusElement">
        <Form.Control
          type="text"
          placeholder="Server URL"
          value={serverUrlInput}
          onChange={(e) => setServerUrlInput(e.target.value)}
        ></Form.Control>
      </div>
      <div className="StatusElement ms-1">
        <Form.Check
          type="checkbox"
          label="Secure Connection"
          className="SecureConnectionCheck"
          checked={secureConnectionInput}
          onChange={(e) => setSecureConnectionInput(e.target.checked)}
        ></Form.Check>
      </div>
      <div className="StatusElement ms-2">
        <Button
          size="sm"
          className="btn-primary"
          onClick={() => {
            params.setSecureConnection(secureConnectionInput);
            params.setServerUrl(serverUrlInput);
          }}
        >
          Save
        </Button>
      </div>
      <div className="StatusElement ms-5">
        {params.connectionState
          ? "🟢 Connected to Server!"
          : "🔴 Not Connected!"}
      </div>
      <div className="StatusElement ms-5">
        Access Token:{" "}
        <span style={{ fontFamily: "monospace", fontSize: "small" }}>
          {params.accessToken}
        </span>
      </div>
    </div>
  );
}

export default StatusBar;

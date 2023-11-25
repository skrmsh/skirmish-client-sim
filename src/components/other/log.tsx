import { useRef, useState } from "react";
import Logger from "../../util/logger";
import "./log.css";
import { Button, Form } from "react-bootstrap";
import SocketManager from "../../util/socketManager";

function LogDisplay() {
  const [logText, setLogText] = useState("");

  const [inputText, setInputText] = useState("");

  const bottomEl = useRef<null | HTMLDivElement>(null);

  Logger.Instance.onLog((rawText: string) => {
    setLogText(rawText);
    console.log(rawText);
    setTimeout(() => {
      bottomEl?.current?.scrollIntoView({ behavior: "auto", block: "end" });
    }, 50);
  });

  return (
    <div className="logParent">
      <div id="logContainer" className="log">
        <span ref={bottomEl}>{logText}</span>
      </div>
      <hr />
      <div className="logInput">
        <Form.Group>
          <Form.Label>Input (→ WS 'message' on return)</Form.Label>
          <Form.Control
            type="text"
            placeholder="JSON Data"
            onChange={(e) => {
              setInputText(e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                try {
                  let data = JSON.parse(inputText);
                  if (!!data) {
                    SocketManager.Instance.send(data);
                  }
                } catch (error) {
                  Logger.log("Invalid Input");
                }
              }
            }}
          />
        </Form.Group>
      </div>
    </div>
  );
}

export default LogDisplay;

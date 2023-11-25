import { Button, Form } from "react-bootstrap";
import SocketManager from "../../util/socketManager";
import { useEffect, useState } from "react";
import TimeManager from "../../util/timeManager";

function InvisibleFunctions() {
  const [displayTime, setDisplayTime] = useState("");

  useEffect(() => {
    SocketManager.Instance.onMessage((msg: any) => {
      if (msg.a?.includes(1)) {
        // ACTION TIMESYNC
        if (!!msg.TS) TimeManager.Instance.timesync(msg.TS);
      }
    });
  }, []);

  useEffect(() => {
    setInterval(() => {
      let timestamp = TimeManager.Instance.getTime();
      let date = new Date(timestamp * 1000);
      let hours = date.getHours();
      let minutes = "0" + date.getMinutes();
      let seconds = "0" + date.getSeconds();
      setDisplayTime(
        hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2)
      );
    });
  }, []);

  return (
    <>
      <span>
        Current Time: <span>{displayTime}</span>
      </span>
      <hr />
      <span>Keep Alive: ➡️</span>{" "}
      {/*Show -> everytime ka was send for a short period (100ms or so)*/}
      <hr />
      <Form.Group>
        <Form.Label>Battery Voltage (3786mV)</Form.Label>
        <Form.Control
          type="range"
          className="form-range"
          min={3200}
          max={4200}
        ></Form.Control>
      </Form.Group>
      <hr />
      <Button
        className="w-100 btn-info"
        onClick={() => {
          SocketManager.Instance.send({
            a: [12],
          });
        }}
      >
        Request Full Data Update
      </Button>
    </>
  );
}

export default InvisibleFunctions;

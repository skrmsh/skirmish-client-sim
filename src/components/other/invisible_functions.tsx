import { Button, Form } from "react-bootstrap";
import SocketManager from "../../util/socketManager";
import { useEffect, useState } from "react";
import TimeManager from "../../util/timeManager";
import Logger from "../../util/logger";

function InvisibleFunctions() {
  const [displayTime, setDisplayTime] = useState("");
  const [batteryValue, setBatteryValue] = useState(4200);

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
      <span>
        Keep Alive:{" "}
        <Button
          size="sm"
          className="btn-secondary"
          onClick={() => {
            SocketManager.Instance.send({ a: [0] });
          }}
        >
          ➡️
        </Button>
      </span>{" "}
      <hr />
      <Form.Group>
        <Form.Label>Battery Voltage ({batteryValue}mV)</Form.Label>
        <Form.Control
          type="range"
          className="form-range"
          min={3200}
          max={4200}
          value={batteryValue}
          onChange={(e) => {
            setBatteryValue(parseInt(e.target.value));
            SocketManager.Instance.send({
              a: [16],
              battery: parseInt(e.target.value),
            });
          }}
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

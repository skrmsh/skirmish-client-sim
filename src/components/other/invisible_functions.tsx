import { Button, Form } from "react-bootstrap";
import SocketManager from "../../util/socketManager";

function InvisibleFunctions() {
  return (
    <>
      <span>
        Current Time: <span>14:11:12</span>
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

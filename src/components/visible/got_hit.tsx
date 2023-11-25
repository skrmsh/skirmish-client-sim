import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Logger from "../../util/logger";
import SocketManager from "../../util/socketManager";

function GotHit() {
  const [pid, setPid] = useState(0);
  const [sid, setSid] = useState(0);
  const [hp, setHp] = useState(0);

  return (
    <>
      <Form.Group>
        <Form.Label>PID:</Form.Label>
        <Form.Control
          type="number"
          min="0"
          max="65535"
          value={pid}
          onChange={(e) => setPid(parseInt(e.target.value))}
        ></Form.Control>
        <Form.Label>SID:</Form.Label>
        <Form.Control
          type="number"
          min="0"
          max="65535"
          value={sid}
          onChange={(e) => setSid(parseInt(e.target.value))}
        ></Form.Control>
        <Form.Label>Hitpoint:</Form.Label>
        <Form.Select
          onChange={(e) => {
            setHp(parseInt(e.target.value));
          }}
        >
          <option value={0}>Phaser</option>
          <option value={1}>Chest</option>
          <option value={2}>Back</option>
          <option value={3}>Shoulder Left</option>
          <option value={4}>Shoulder Right</option>
          <option value={5}>Head</option>
          <option value={6}>Hitpoint (6)</option>
          <option value={7}>Undefined (7)</option>
        </Form.Select>
      </Form.Group>
      <Button
        className="mt-2 w-100 btn-danger"
        onClick={() => {
          SocketManager.Instance.send({
            a: [6],
            pid: pid,
            sid: sid,
            hp: hp,
          });
        }}
      >
        Got Hit
      </Button>
    </>
  );
}

export default GotHit;

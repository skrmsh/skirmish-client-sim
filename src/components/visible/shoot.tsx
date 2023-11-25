import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import SocketManager from "../../util/socketManager";

function ShootTrigger() {
  const [doInc, setDoInc] = useState(false);
  const [sid, setSid] = useState(0);

  return (
    <>
      <Form.Group>
        <Form.Label>SID:</Form.Label>
        <Form.Control
          type="number"
          min="0"
          max="65535"
          onChange={(e) => setSid(parseInt(e.target.value))}
          value={sid}
        ></Form.Control>
        <Form.Check
          type="checkbox"
          label="Increase"
          checked={doInc}
          onChange={(e) => setDoInc(e.target.checked)}
        ></Form.Check>
      </Form.Group>
      <Button
        className="mt-2 w-100 btn-success"
        onClick={() => {
          let currentSid = sid;
          SocketManager.Instance.send({
            a: [7],
            sid: currentSid,
          });
          if (doInc) {
            setSid(sid + 1);
          }
        }}
      >
        Shoot
      </Button>
    </>
  );
}

export default ShootTrigger;

import { Button, Form } from "react-bootstrap";
import SocketManager from "../../util/socketManager";
import { useEffect, useState } from "react";

interface JoinGameParams {
  gid: string;
  setGid: CallableFunction;
}

function JoinGame(params: JoinGameParams) {
  const [gidInput, setGidInput] = useState(params.gid);

  useEffect(() => {
    setGidInput(params.gid);
  }, [params.gid]);

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>GID:</Form.Label>
          <Form.Control
            type="text"
            placeholder="GID"
            value={gidInput}
            onChange={(e) => setGidInput(e.target.value)}
          />
        </Form.Group>
        <Button
          className="mt-2"
          onClick={() => {
            params.setGid(gidInput);
            SocketManager.Instance.send({
              a: [2],
              gid: gidInput,
            });
          }}
        >
          Join
        </Button>
      </Form>
    </>
  );
}

export default JoinGame;

import { Button, Form } from "react-bootstrap";
import SocketManager from "../../util/socketManager";

interface JoinGameParams {
  gid: string;
}

function JoinGame(params: JoinGameParams) {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>GID:</Form.Label>
          <Form.Control type="text" placeholder="GID" value={params.gid} />
        </Form.Group>
        <Button
          className="mt-2"
          onClick={() => {
            SocketManager.Instance.send({
              a: [2],
              gid: params.gid,
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

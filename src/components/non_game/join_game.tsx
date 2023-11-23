import { Button, Form } from "react-bootstrap";

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
        <Button className="mt-2">Join</Button>
      </Form>
    </>
  );
}

export default JoinGame;

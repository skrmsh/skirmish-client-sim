import { Button, Form } from "react-bootstrap";

function JoinGame() {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>GID:</Form.Label>
          <Form.Control type="text" placeholder="GID" />
        </Form.Group>
        <Button className="mt-2">Join</Button>
      </Form>
    </>
  );
}

export default JoinGame;

import { Button, Form } from "react-bootstrap";

function StartGame() {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Delay:</Form.Label>
          <Form.Control type="number" min="1" max="255" />
        </Form.Group>
        <Button className="mt-2">Start</Button>
      </Form>
    </>
  );
}

export default StartGame;

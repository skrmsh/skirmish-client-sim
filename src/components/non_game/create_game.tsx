import { Button, Form } from "react-bootstrap";

function CreateGame() {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Game Type:</Form.Label>
          <Form.Select />
        </Form.Group>
        <Button className="mt-2">Create</Button>
      </Form>
    </>
  );
}

export default CreateGame;

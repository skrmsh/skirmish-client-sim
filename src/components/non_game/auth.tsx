import { Button, Form } from "react-bootstrap";

function AuthInput() {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Username:</Form.Label>
          <Form.Control type="text" placeholder="Username"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Password"></Form.Control>
        </Form.Group>
        <Button className="mt-2">Authenticate</Button>
      </Form>
    </>
  );
}

export default AuthInput;

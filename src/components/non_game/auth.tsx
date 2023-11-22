import { useState } from "react";
import { Button, Form } from "react-bootstrap";

interface AuthInputParams {
  authCallback: CallableFunction;
}

function AuthInput(params: AuthInputParams) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>E-Mail:</Form.Label>
          <Form.Control
            type="text"
            placeholder="E-Mail"
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button
          className="mt-2 w-100"
          onClick={() => {
            if (!!email && !!password) {
              params.authCallback(email, password);
            }
          }}
        >
          Authenticate
        </Button>
      </Form>
    </>
  );
}

export default AuthInput;

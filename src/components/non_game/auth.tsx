import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { UserApi } from "../../Api/generated";
import { AxiosError, AxiosResponse } from "axios";

interface AuthInputParams {
  userApi: UserApi;
  setAccessToken: CallableFunction;
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
              params.userApi
                .authPost({
                  email: email,
                  password: password,
                })
                .catch(() => {})
                .then((e: void | AxiosResponse) => {
                  if (e && e.data.message === "authenticated") {
                    console.log(e);
                    params.setAccessToken(e.data.access_token);
                  }
                });
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

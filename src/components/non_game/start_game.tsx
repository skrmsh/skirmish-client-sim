import { Button, Form } from "react-bootstrap";
import { GameApi } from "../../Api/generated";
import { useState } from "react";

interface StartGameParams {
  gameApi: GameApi;
  gid: string;
  apiConfig: object;
}

function StartGame(params: StartGameParams) {
  const [delayInput, setDelayInput] = useState(1);
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Delay:</Form.Label>
          <Form.Control
            type="number"
            value={delayInput}
            onChange={(e) => setDelayInput(parseInt(e.target.value))}
          />
        </Form.Group>
        <Button
          className="mt-2"
          onClick={() => {
            params.gameApi
              .gameGidPut(params.gid, { delay: delayInput }, params.apiConfig)
              .catch((e) => {
                if (e) {
                  alert(
                    `Failed to start game (${e}):\n${JSON.stringify(
                      e.response.data
                    )}`
                  );
                  console.log(e);
                }
              })
              .then((e) => {});
          }}
        >
          Start
        </Button>
      </Form>
    </>
  );
}

export default StartGame;

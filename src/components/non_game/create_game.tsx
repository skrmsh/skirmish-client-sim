import { Button, Form } from "react-bootstrap";
import { GameApi } from "../../Api/generated";
import { useEffect, useState } from "react";
import { AxiosError, AxiosResponse } from "axios";

interface CreateGameParams {
  gameApi: GameApi;
}

function toTitleCase(str: string) {
  /* Code by Greg Dean & meyi @ https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript */
  return str.replace(/\w\S*/g, function (txt: string) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function CreateGame(params: CreateGameParams) {
  const [gamemodes, setGamemodes] = useState([]);
  const [selectedGamemode, setSelectedGamemode] = useState("");

  useEffect(() => {
    params.gameApi.gamemodeGet().then((e: void | AxiosResponse) => {
      if (e) {
        setGamemodes(e.data.gamemodes);
        setSelectedGamemode(e.data.gamemodes[0]);
      }
    });
  }, []);

  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Game Type:</Form.Label>
          <Form.Select
            onChange={(e) => {
              setSelectedGamemode(e.target.value);
            }}
          >
            {gamemodes.map((gm) => (
              <>
                <option value={gm} selected={selectedGamemode == gm}>
                  {toTitleCase(gm)}
                </option>
              </>
            ))}
          </Form.Select>
        </Form.Group>
        <Button className="mt-2">Create</Button>
      </Form>
    </>
  );
}

export default CreateGame;

import { Button, Form } from "react-bootstrap";

function ShootTrigger() {
  return (
    <>
      <Form.Group>
        <Form.Label>SID:</Form.Label>
        <Form.Control
          type="number"
          min="0"
          max="65535"
          value={0}
        ></Form.Control>
        <Form.Check
          type="checkbox"
          label="Increase"
          checked={true}
        ></Form.Check>
      </Form.Group>
      <Button className="mt-2 w-100 btn-success">Shoot</Button>
    </>
  );
}

export default ShootTrigger;

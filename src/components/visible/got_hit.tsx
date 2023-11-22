import { Button, Form } from "react-bootstrap";

function GotHit() {
  return (
    <>
      <Form.Group>
        <Form.Label>PID:</Form.Label>
        <Form.Control
          type="number"
          min="0"
          max="65535"
          value={0}
        ></Form.Control>
        <Form.Label>SID:</Form.Label>
        <Form.Control
          type="number"
          min="0"
          max="65535"
          value={0}
        ></Form.Control>
        <Form.Label>Hitpoint:</Form.Label>
        <Form.Select>
          <option value={0}>Phaser</option>
          <option value={1}>Chest</option>
          <option value={2}>Back</option>
          <option value={3}>Shoulder Left</option>
          <option value={4}>Shoulder Right</option>
          <option value={5}>Head</option>
          <option value={6}>Hitpoint (6)</option>
          <option value={7}>Undefined (7)</option>
        </Form.Select>
      </Form.Group>
      <Button className="mt-2 w-100 btn-danger">Got Hit</Button>
    </>
  );
}

export default GotHit;

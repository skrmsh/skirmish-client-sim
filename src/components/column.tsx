import { Card, CardBody, CardHeader } from "react-bootstrap";
import "./column.css";

interface SCSColumnParams {
  title: string;
  halfHeight?: boolean;
  children?: any;
}

function SCSColumn(params: SCSColumnParams) {
  return (
    <>
      <Card
        className={
          params.halfHeight || false ? "SCSColumnHalfHeight" : "SCSColumn"
        }
      >
        <CardHeader className="SCSColHeader">
          <div className="fw-bold">{params.title}</div>
        </CardHeader>
        <CardBody className="SCSColBody">{params.children}</CardBody>
      </Card>
    </>
  );
}

export default SCSColumn;

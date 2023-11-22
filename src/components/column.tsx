import { Card, CardBody, CardHeader } from "react-bootstrap";
import "./column.css";

interface SCSColumnParams {
  title: string;
  children?: any;
}

function SCSColumn(params: SCSColumnParams) {
  return (
    <>
      <Card className="SCSColumn">
        <CardHeader className="SCSColHeader">
          <div className="fw-bold">{params.title}</div>
        </CardHeader>
        <CardBody>{params.children}</CardBody>
      </Card>
    </>
  );
}

export default SCSColumn;

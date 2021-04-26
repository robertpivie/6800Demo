import { Card } from "react-bootstrap";

function Views() {
  return (
    <Card>
      <Card.Body>
        <h6 style={{ display: "flex", justifyContent: "space-between" }}>
          <span>VIEWS</span>
        </h6>
        <hr />
        <h1 style={{ textAlign: "center" }}>
          <strong>1200</strong>
        </h1>
      </Card.Body>
    </Card>
  );
}

export default Views;

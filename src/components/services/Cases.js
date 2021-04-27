import { Card } from "react-bootstrap";

function Cases() {
  return (
    <Card>
      <Card.Body>
        <h6 style={{ display: "flex", justifyContent: "space-between" }}>
          <span>NEW CASES</span>
          <small>Today</small>
        </h6>
        <hr />
        <h1>
          <strong>2</strong>
        </h1>
      </Card.Body>
    </Card>
  );
}

export default Cases;

import { Card } from "react-bootstrap";

function Earnings() {
  return (
    <Card>
      <Card.Body>
        <h6 style={{ display: "flex", justifyContent: "space-between" }}>
          <span>EARNINGS</span>
          <small>This Month</small>
        </h6>
        <hr />
        <h1 style={{ textAlign: "center" }}>
          <strong>$346.55</strong>
        </h1>
      </Card.Body>
    </Card>
  );
}

export default Earnings;

import { Card, Col, Row } from "react-bootstrap";
import Ratio from "./Ratio";

function Ratios() {
  return (
    <Card>
      <Card.Body>
        <h6 style={{ display: "flex", justifyContent: "space-between" }}>
          <span>SALES</span>
          <small>Week</small>
          <small>Month</small>
          <small>Year</small>
        </h6>
        <hr />
        <Row>
          <Col>
            <Ratio
              data={{
                type: "doughnut",
                showInLegend: false,
                legendText: "Conversions",
                dataPoints: [{ y: 75 }, { y: 25 }],
              }}
            />
          </Col>
          <Col>
            <Ratio
              data={{
                type: "doughnut",
                showInLegend: false,
                legendText: "Sales",
                dataPoints: [{ y: 75 }, { y: 25 }],
              }}
            />
          </Col>
          <Col>
            <Ratio
              data={{
                type: "doughnut",
                showInLegend: false,
                legendText: "Returns",
                dataPoints: [{ y: 75 }, { y: 25 }],
              }}
            />
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Ratios;

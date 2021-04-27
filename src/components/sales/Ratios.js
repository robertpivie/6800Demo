import { useEffect } from "react";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import Ratio from "./Ratio";

function Ratios() {
  const [show, setShow] = useState([true, false, false]);
  useEffect(() => {
    setTimeout(() => setShow([true, true, false]), 1200);
    setTimeout(() => setShow([true, true, true]), 2400);
  }, [setShow]);
  console.log("showing", show);

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
          <Col xs={4}>
            {show[0] && (
              <Ratio
                data={{
                  type: "doughnut",
                  showInLegend: false,
                  legendText: "Conversions",
                  dataPoints: [{ y: 75 }, { y: 25 }],
                }}
              />
            )}
          </Col>
          <Col xs={4}>
            {show[1] && (
              <Ratio
                data={{
                  type: "doughnut",
                  showInLegend: false,
                  legendText: "Sales",
                  dataPoints: [{ y: 75 }, { y: 25 }],
                }}
              />
            )}
          </Col>
          <Col xs={4}>
            {show[2] && (
              <Ratio
                data={{
                  type: "doughnut",
                  showInLegend: false,
                  legendText: "Returns",
                  dataPoints: [{ y: 75 }, { y: 25 }],
                }}
              />
            )}
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default Ratios;

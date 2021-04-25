import { Col, Row, ToggleButton, ToggleButtonGroup } from "react-bootstrap";

function Availability() {
  return (
    <Row>
      <Col xs={12}>
        <ToggleButtonGroup
          type="radio"
          name="availabilty"
          defaultValue={2}
          style={{ width: "100%" }}
        >
          <ToggleButton value={1}>Available</ToggleButton>
          <ToggleButton value={2}>Offline</ToggleButton>
        </ToggleButtonGroup>
      </Col>
    </Row>
  );
}

export default Availability;

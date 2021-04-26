import { Card, Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";

import ContactInformation from "./ContactInfo";
import LocationInformation from "./LocationInfo";

function DeliveryRegistration() {
  return (
    <div>
      <br />
      <p>To help you get started, we'll need a bit more information.</p>
      <Form>
        <Card>
          <Card.Body>
            <Row>
              <Col xs={6}>
                <Form.Check name="car" type="radio" label="I have a car." />
              </Col>
              <Col xs={6}>
                <Form.Check name="car" type="radio" label="I need a car." />
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <br />
        <ContactInformation></ContactInformation>
        <br />
        <LocationInformation></LocationInformation>
      </Form>
      <hr />
    </div>
  );
}

export default DeliveryRegistration;

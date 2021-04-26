import "./Landing.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTv,
  faHeadset,
  faShippingFast,
  faMoneyBill,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";

function Landing() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Button href="/delivery" variant="outline-danger" block>
            <h6>Delivery</h6>
            <FontAwesomeIcon size="4x" icon={faShippingFast} />
          </Button>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={12}>
          <Button href="/service" variant="outline-warning" block>
            <h6>Service</h6>
            <FontAwesomeIcon size="4x" icon={faHeadset} />
          </Button>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={12}>
          <Button href="/sales" variant="outline-success" block>
            <h6>Sales</h6>
            <FontAwesomeIcon size="4x" icon={faMoneyBill} />
          </Button>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={12}>
          <Button href="/training" variant="outline-primary" block>
            <h6>Training</h6>
            <FontAwesomeIcon size="4x" icon={faChalkboardTeacher} />
          </Button>
        </Col>
      </Row>
      <br />
      <Row>
        <Col xs={12}>
          <Button href="/influence" variant="outline-info" block>
            <h6>Influence</h6>
            <FontAwesomeIcon size="4x" icon={faTv} />
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default Landing;

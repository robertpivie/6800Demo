import "./Interests.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTv,
  faHeadset,
  faShippingFast,
  faMoneyBill,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
import DeliveryRegistration from "../components/registration/Delivery";
import ServiceRegistration from "../components/registration/Service";
import SalesRegistration from "../components/registration/Sales";
import TrainingRegistration from "../components/registration/Training";
import InfluencerRegistration from "../components/registration/Influencer";
import Approval from "../components/registration/Approval";

function Interests() {
  return (
    <Accordion>
      <Container>
        <Row>
          <Col xs={12} className="mt-3">
            <Accordion.Toggle
              className="btn btn-outline-danger btn-block"
              eventKey="0"
            >
              <h6>Delivery</h6>
              <FontAwesomeIcon size="4x" icon={faShippingFast} />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <DeliveryRegistration></DeliveryRegistration>
            </Accordion.Collapse>
          </Col>
          <Col xs={12} className="mt-3">
            <Accordion.Toggle
              className="btn btn-outline-warning btn-block"
              eventKey="1"
            >
              <h6>Service</h6>
              <FontAwesomeIcon size="4x" icon={faHeadset} />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <ServiceRegistration></ServiceRegistration>
            </Accordion.Collapse>
          </Col>
          <Col xs={12} className="mt-3">
            <Accordion.Toggle
              className="btn btn-outline-success btn-block"
              eventKey="2"
            >
              <h6>Sales</h6>
              <FontAwesomeIcon size="4x" icon={faMoneyBill} />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <SalesRegistration></SalesRegistration>
            </Accordion.Collapse>
          </Col>
          <Col xs={12} className="mt-3">
            <Accordion.Toggle
              className="btn btn-outline-primary btn-block"
              eventKey="3"
            >
              <h6>Training</h6>
              <FontAwesomeIcon size="4x" icon={faChalkboardTeacher} />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <TrainingRegistration></TrainingRegistration>
            </Accordion.Collapse>
          </Col>
          <Col xs={12} className="mt-3">
            <Accordion.Toggle
              className="btn btn-outline-info btn-block"
              eventKey="4"
            >
              <h6>Influencer</h6>
              <FontAwesomeIcon size="4x" icon={faTv} />
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <InfluencerRegistration></InfluencerRegistration>
            </Accordion.Collapse>
            <br />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Approval></Approval>
            <br />
            <Button href="/welcome" variant="primary" size="lg" block>
              Done
            </Button>
          </Col>
        </Row>
      </Container>
    </Accordion>
  );
}

export default Interests;

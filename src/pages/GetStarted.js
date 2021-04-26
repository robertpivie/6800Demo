import "./GetStarted.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { Button, Col, Form, Row } from "react-bootstrap";

function GetStarted() {
  return (
    <Form>
      <Form.Group>
        <Form.Control placeholder="Email/Phone" aria-label="contact" />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="password"
          placeholder="Password"
          aria-label="password"
        />
      </Form.Group>
      <Form.Group>
        <Form.Control
          type="password"
          placeholder="Confirm Password"
          aria-label="confirm"
        />
      </Form.Group>

      <Form.Check controlId="formBasicCheckbox">
        <Form.Check.Input type="checkbox" />
        <small>
          <Form.Check.Label>
            I have read and agree to the Terms of Service and Privacy Policy.
          </Form.Check.Label>
        </small>
      </Form.Check>
      <br />
      <Button href="/welcome" variant="primary" size="lg" block>
        Get Started
      </Button>
      <br />
      <Row>
        <Col xs={5}>
          <hr />
        </Col>
        <Col xs={2} className="middle-or">
          OR
        </Col>
        <Col xs={5}>
          <hr />
        </Col>
      </Row>
      <br />
      <Button
        href="/welcome"
        variant="dark"
        size="lg"
        block
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#4267B2",
          border: "none",
        }}
      >
        <span>
          <FontAwesomeIcon size="1x" icon={faFacebook} />
        </span>
        <span
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          Continue with Facebook
        </span>
      </Button>
      <Button
        href="/welcome"
        variant="dark"
        size="lg"
        block
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#4285F4",
          border: "none",
        }}
      >
        <span>
          <FontAwesomeIcon size="1x" icon={faGoogle} />
        </span>
        <span
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          Continue with Google
        </span>
      </Button>
    </Form>
  );
}

export default GetStarted;

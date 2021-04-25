import "./GetStarted.css";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

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
      <Form.Group>
        <Form.Check
          type="checkbox"
          label="I have read and agree to the Terms of Service and Privacy Policy"
        />
      </Form.Group>
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
      <Button href="/welcome" variant="primary" size="lg" block>
        Continue with Facebook
      </Button>
      <Button href="/welcome" variant="primary" size="lg" block>
        Continue with Google
      </Button>
    </Form>
  );
}

export default GetStarted;

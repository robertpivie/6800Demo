import "./Interests.css";
import logo from "../logo.png";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

function Interests() {
  return (
    <Container>
      <Row>
        <Col xs={12}>
          <Image src={logo} fluid />
        </Col>
      </Row>
      <Row>
        <Button href="/interests" variant="primary" size="lg" block>
          Pick My Interests
        </Button>
      </Row>
    </Container>
  );
}

export default Interests;

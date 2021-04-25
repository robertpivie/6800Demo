import { Card, Col, Row } from "react-bootstrap";

function TrainingCard({ data }) {
  const { image, title, text, views, donations } = data;
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        <Row>
          <Col>{views} Views</Col>
        </Row>
        <Row>
          <Col>${donations} in donations</Col>
        </Row>
      </Card.Footer>
    </Card>
  );
}
export default TrainingCard;

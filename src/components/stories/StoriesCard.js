import { Card } from "react-bootstrap";

function StoriesCard({ data }) {
  const { image, title, text, views, donations } = data;
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}
export default StoriesCard;

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function PersonalInformation() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          Personal Infomation<span className="text-danger">*</span>
        </Card.Title>
        <Form.Group controlId="formBasicSSN">
          <Form.Control
            type="text"
            placeholder="SSN"
            label="Social Security Number"
          />
        </Form.Group>
        <Form.Group controlId="formBasicBD">
          <Form.Control type="date" placeholder="Birthday" label="Birthday" />
          <Form.Text className="text-muted">
            We'll need this information to prepare sales forms.
          </Form.Text>
        </Form.Group>
      </Card.Body>
    </Card>
  );
}

export default PersonalInformation;

import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

function ContactInformation() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          Contact Infomation<span className="text-danger">*</span>
        </Card.Title>
        <Form.Group controlId="formBasicFN">
          <Form.Control
            type="first"
            placeholder="First Name"
            label="First Name"
          />
        </Form.Group>
        <Form.Group controlId="formBasicLN">
          <Form.Control type="last" placeholder="Last Name" label="Last Name" />
        </Form.Group>
        <Form.Group controlId="formBasicMbl">
          <Form.Control
            type="mobile"
            placeholder="Mobile"
            label="Mobile Number"
          />
          <Form.Text className="text-muted">
            We'll need this information to coordinate your new opportunities.
          </Form.Text>
        </Form.Group>
      </Card.Body>
    </Card>
  );
}

export default ContactInformation;

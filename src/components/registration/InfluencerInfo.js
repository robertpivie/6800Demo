import Form from "react-bootstrap/Form";

function InfluencerInformation() {
  return (
    <Form.Group controlId="formBasicURL">
      <Form.Control type="last" placeholder="URL" label="URL" />
      <Form.Text className="text-muted">
        This information will help us drive traffic to your content.
      </Form.Text>
    </Form.Group>
  );
}

export default InfluencerInformation;

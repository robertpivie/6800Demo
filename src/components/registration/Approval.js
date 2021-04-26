import Form from "react-bootstrap/Form";

function Approval() {
  return (
    <Form.Check controlId="formBasicCheckbox">
      <Form.Check.Input type="checkbox" />
      <Form.Check.Label>
        <small>I approve the necessary use of this information.</small>
      </Form.Check.Label>
    </Form.Check>
  );
}

export default Approval;

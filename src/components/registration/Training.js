import Form from "react-bootstrap/Form";

import ContactInformation from "./ContactInfo";

function TrainingRegistration() {
  return (
    <div>
      <br />
      <p>To help you get started, we'll need a bit more information.</p>
      <Form>
        <ContactInformation></ContactInformation>
      </Form>
      <hr />
    </div>
  );
}

export default TrainingRegistration;

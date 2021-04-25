import Form from "react-bootstrap/Form";

import ContactInformation from "./ContactInfo";
import LocationInformation from "./LocationInfo";

function DeliveryRegistration() {
  return (
    <div>
      <br />
      <p>To help you get started, we'll need a bit more information.</p>
      <Form>
        <ContactInformation></ContactInformation>
        <br />
        <LocationInformation></LocationInformation>
      </Form>
      <hr />
    </div>
  );
}

export default DeliveryRegistration;

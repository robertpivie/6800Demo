import Form from "react-bootstrap/Form";

import ContactInformation from "./ContactInfo";
import PersonalInformation from "./PersonalInfo";
import LocationInformation from "./LocationInfo";

function SalesRegistration() {
  return (
    <div>
      <br />
      <p>To help you get started, we'll need a bit more information.</p>
      <Form>
        <ContactInformation></ContactInformation>
        <br />
        <PersonalInformation></PersonalInformation>
        <br />
        <LocationInformation></LocationInformation>
      </Form>
      <hr />
    </div>
  );
}

export default SalesRegistration;

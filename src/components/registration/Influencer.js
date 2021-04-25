import Form from "react-bootstrap/Form";

import ContactInformation from "./ContactInfo";
import InfluencerInformation from "./InfluencerInfo";

function InfluencerRegistration() {
  return (
    <div>
      <br />
      <p>To help you get started, we'll need a bit more information.</p>
      <Form>
        <ContactInformation></ContactInformation>
        <br />
        <InfluencerInformation></InfluencerInformation>
      </Form>
      <hr />
    </div>
  );
}

export default InfluencerRegistration;

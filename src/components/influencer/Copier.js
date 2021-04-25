import { Button, FormControl, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClone } from "@fortawesome/free-solid-svg-icons";

function Copier() {
  return (
    <InputGroup>
      <FormControl
        placeholder="Influencer link"
        aria-label="Influencer link"
        aria-describedby="basic-addon2"
        defaultValue="https://nuinfluence.com/tix00p"
      />
      <InputGroup.Append>
        <Button variant="outline-secondary">
          <FontAwesomeIcon icon={faClone}></FontAwesomeIcon>
        </Button>
      </InputGroup.Append>
    </InputGroup>
  );
}
export default Copier;

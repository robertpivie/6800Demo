import { Fragment } from "react";
import { Button, FormControl, InputGroup, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUserCircle } from "@fortawesome/free-solid-svg-icons";

function List() {
  return (
    <Fragment>
      <InputGroup className="mb-3">
        <FormControl
          defaultValue="London"
          placeholder="Nearby Deliveries"
          aria-label="Nearby Deliveries"
          aria-describedby="basic-addon2"
        />
        <InputGroup.Append>
          <Button variant="outline-secondary">
            <FontAwesomeIcon size="1x" icon={faSearch} />
          </Button>
        </InputGroup.Append>
      </InputGroup>
      <h6>Deliveries</h6>
      <Table hover responsive="sm" size="sm">
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <p style={{ textAlign: "center" }} className="text-primary">
                <FontAwesomeIcon size="3x" icon={faUserCircle} />
              </p>
            </td>
            <td>
              <span>Mark Otto</span>
              <br />
              <small>The Hop Exchange SE1 1TY, United Kingdom</small>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <p style={{ textAlign: "center" }} className="text-danger">
                <FontAwesomeIcon size="3x" icon={faUserCircle} />
              </p>
            </td>
            <td>
              <span>Jacob Thornton</span>
              <br />
              <small>Cromwell Flats, Redcross Way, London SE1 9HP, UK</small>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <p style={{ textAlign: "center" }} className="text-warning">
                <FontAwesomeIcon size="3x" icon={faUserCircle} />
              </p>
            </td>
            <td>
              <span>Larry the Bird</span>
              <br />
              <small>6 Southwark St, London SE1 1TQ, UK</small>
            </td>
          </tr>
        </tbody>
      </Table>
    </Fragment>
  );
}
export default List;

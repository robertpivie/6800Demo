import { Fragment } from "react";
import { Button, FormControl, InputGroup, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function List() {
  return (
    <Fragment>
      <InputGroup className="mb-3">
        <FormControl
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
      <Table hover responsive="sm" size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Customer</th>
            <th>Delivery Address</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark Otto</td>
            <td>The Hop Exchange SE1 1TY, United Kingdom</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob Thornton</td>
            <td>Cromwell Flats, Redcross Way, London SE1 9HP, UK</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td>6 Southwark St, London SE1 1TQ, UK</td>
          </tr>
        </tbody>
      </Table>
    </Fragment>
  );
}
export default List;

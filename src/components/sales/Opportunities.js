import { Fragment } from "react";
import { Table } from "react-bootstrap";

function Opportunities() {
  return (
    <Fragment>
      <h6>My Opportunities</h6>
      <Table hover responsive="sm" size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <textarea></textarea>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <textarea></textarea>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td></td>
            <td>
              <textarea></textarea>
            </td>
          </tr>
        </tbody>
      </Table>
    </Fragment>
  );
}
export default Opportunities;

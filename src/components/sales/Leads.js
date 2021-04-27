import { Fragment } from "react";
import { Table } from "react-bootstrap";

function Leads() {
  return (
    <Fragment>
      <br />
      <h6>&nbsp;&nbsp;My Leads</h6>
      <Table hover responsive="sm" size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>
              <a href="tel:5551230101">5551230101</a>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>
              <a href="tel:5551231111">5551231111</a>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry the Bird</td>
            <td></td>
            <td>
              <a href="tel:5551231010">5551231010</a>
            </td>
          </tr>
        </tbody>
      </Table>
    </Fragment>
  );
}
export default Leads;

import { Fragment } from "react";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import TrainingRow from "./TrainingRow";

function List() {
  const data = [
    {
      name: "Mark Otto",
      sales: 435,
      salesPercent: 9,
      pay: 43500,
      commission: 5000,
    },
    {
      name: "Jacob Thornton",
      sales: 242,
      salesPercent: 7,
      pay: 43500,
      commission: 125,
    },
    {
      name: "Larry the Bird",
      sales: 98,
      salesPercent: -12,
      pay: 19725,
      commission: 2000,
    },
  ];
  return (
    <Fragment>
      <br />
      <p
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <h4>Commissions</h4>
        <h4>
          <FontAwesomeIcon size="1x" icon={faSyncAlt} className="text-info" />
          &nbsp;
          <small>Reload</small>
        </h4>
      </p>
      <Table hover responsive="sm" size="sm">
        <thead>
          <tr>
            <td>Employee</td>
            <td>
              <small>Sales</small>
            </td>
            <td>
              <small>Pay (YTD)</small>
            </td>
          </tr>
        </thead>
        <tbody>
          <TrainingRow data={data[0]} />
          <TrainingRow data={data[1]} />
          <TrainingRow data={data[2]} />
        </tbody>
      </Table>
    </Fragment>
  );
}
export default List;

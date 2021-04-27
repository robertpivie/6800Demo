import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

function TrainingRow({ data }) {
  const { name, sales, salesPercent, pay, commission } = data;
  return (
    <tr>
      <td>
        <br />
        <p
          style={{
            display: "flex",
            alignItems: "center",
            height: "100%",
          }}
        >
          <FontAwesomeIcon
            size="2x"
            icon={faUserCircle}
            className="text-primary"
          />
          &nbsp;&nbsp;
          <span>{name}</span>
        </p>
      </td>
      <td>
        <span>{sales} Sales</span>
        <p>
          <small className={salesPercent < 0 ? "text-danger" : "text-success"}>
            {salesPercent > 0 && "+"}
            {salesPercent}% than avg
          </small>
        </p>
      </td>
      <td>
        <span>${pay}</span>
        <p>
          <small className={commission < 0 ? "text-danger" : "text-success"}>
            {commission > 0 && "+"}
            {commission} Commission
          </small>
        </p>
      </td>
    </tr>
  );
}

export default TrainingRow;

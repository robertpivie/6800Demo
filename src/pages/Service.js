import { Fragment } from "react";
import Availability from "../components/services/Availability";
import History from "../components/services/History";

function Service() {
  return (
    <Fragment>
      <Availability></Availability>
      <br />
      <hr />
      <br />
      <History></History>
    </Fragment>
  );
}
export default Service;

import { Fragment } from "react";
import Availability from "../components/services/Availability";
import Cases from "../components/services/Cases";
import Earnings from "../components/services/Earnings";
import History from "../components/services/History";

function Service() {
  return (
    <Fragment>
      <Availability />
      <br />
      <Cases />
      <br />
      <History />
      <br />
      <Earnings />
    </Fragment>
  );
}
export default Service;

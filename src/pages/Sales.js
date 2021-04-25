import { Fragment } from "react";
import History from "../components/sales/History";
import Leads from "../components/sales/Leads";
import Opportunities from "../components/sales/Opportunities";

function Sales() {
  return (
    <Fragment>
      <Leads></Leads>
      <Opportunities></Opportunities>
      <br />
      <hr />
      <br />
      <History></History>
    </Fragment>
  );
}
export default Sales;

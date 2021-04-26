import { Fragment } from "react";
import Earnings from "../components/sales/Earnings";
import History from "../components/sales/History";
import Leads from "../components/sales/Leads";
import Opportunities from "../components/sales/Opportunities";
import Ratios from "../components/sales/Ratios";

function Sales() {
  return (
    <Fragment>
      <Ratios />
      <br />
      <Earnings />
      <br />
      <Leads />
      <Opportunities />
      <br />
      <hr />
      <br />
      <History />
    </Fragment>
  );
}
export default Sales;

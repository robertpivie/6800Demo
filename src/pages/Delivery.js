import { Fragment } from "react";
import Earnings from "../components/deliveries/Earnings";
import History from "../components/deliveries/History";
import List from "../components/deliveries/List";
import Map from "../components/deliveries/Map";

function Delivery() {
  return (
    <Fragment>
      {/* <br />
      <br />
      <Map></Map>
      <br />
      <hr /> */}
      <br />
      <List></List>
      <br />
      <Earnings></Earnings>
      {/* <History></History> */}
    </Fragment>
  );
}
export default Delivery;

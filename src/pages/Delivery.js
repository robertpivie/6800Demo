import { Fragment } from "react";
import History from "../components/deliveries/History";
import List from "../components/deliveries/List";
import Map from "../components/deliveries/Map";

function Delivery() {
  return (
    <Fragment>
      <Map></Map>
      <br />
      <hr />
      <br />
      <List></List>
      <br />
      <History></History>
    </Fragment>
  );
}
export default Delivery;

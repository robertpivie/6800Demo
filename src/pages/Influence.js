import { Fragment } from "react";
import Copier from "../components/influencer/Copier";
import History from "../components/influencer/History";

function Influence() {
  return (
    <Fragment>
      <Copier></Copier>
      <br />
      <hr />
      <br />
      <History></History>
    </Fragment>
  );
}
export default Influence;

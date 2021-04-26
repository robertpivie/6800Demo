import { Fragment } from "react";
import Copier from "../components/influencer/Copier";
import Views from "../components/influencer/Views";
import Earnings from "../components/influencer/Earnings";
import History from "../components/influencer/History";
import Likes from "../components/influencer/Likes";
import Usages from "../components/influencer/Usages";

function Influence() {
  return (
    <Fragment>
      <Copier />
      {/* <br />
      <hr />
      <br />
      <History></History> */}
      <br />
      <Earnings />
      <br />
      <Usages />
      <br />
      <Views />
      <br />
      <Likes />
    </Fragment>
  );
}
export default Influence;

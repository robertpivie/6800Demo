import { Fragment } from "react";
import StoriesCard from "../components/stories/StoriesCard";

function Stories() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1489514354504-1653aa90e34e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1951&q=80",
      title: "Gig workers are changing the world.",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      views: 15402,
      donations: "5030.07",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556740758-90de374c12ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      title: "How the sales dashboard helped me grow.",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      views: 503,
      donations: "5.00",
    },
    {
      image:
        "https://images.unsplash.com/photo-1609234656465-24ab323f237b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
      title: "Community service opportunities build bridges.",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      views: 70060,
      donations: "0.00",
    },
  ];
  return (
    <Fragment>
      <StoriesCard data={data[0]}></StoriesCard>
      <br />
      <StoriesCard data={data[1]}></StoriesCard>
      <br />
      <StoriesCard data={data[2]}></StoriesCard>
    </Fragment>
  );
}

export default Stories;

import { Fragment } from "react";
import { CoffeList } from "./components/CoffeList";
import { Intro } from "./components/Intro";

export function Home() {
  return (
    <Fragment>
      <Intro />
      <CoffeList />
    </Fragment>
  );
}

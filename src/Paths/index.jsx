import Home from "../pages/Home";
import Register from "../pages/Register";

import { Switch, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function Paths({ Data }) {
  return (
    <AnimatePresence>
      <Switch>
        <Route exact path="/">
          <Register Data={Data} />
        </Route>
        <Route exact path="/home/:id">
          <Home Data={Data} />
        </Route>
      </Switch>
    </AnimatePresence>
  );
}

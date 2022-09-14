import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {ROUTES} from "./Helpers/Routes";
import Landing from "./Pages/Landing/Landing";
import Listings from "./Pages/Listings/Listings";
import Detail from "./Pages/Detail/Detail";
function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path={ROUTES.landing}
          name="Landing Page"
          render={props => <Landing {...props} />}
        />
        <Route
          exact
          path={ROUTES.listing}
          name="Listings Page"
          render={props => <Listings {...props} />}
        />
        <Route
          exact
          path={ROUTES.details}
          name="Details Page"
          render={props => <Detail {...props} />}
        />
      </Switch>
    </Router>
  );
}

export default App;

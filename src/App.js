import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import {Auth, Home} from "./pages";

function App() {
  const isAuth = true;
  return (
    <Router>
      <div className="wrapper">
        <Switch>
          <Route
            exact
            path={["/login", "/registration"]}
            component={Auth}
          />
          <Route
            exact
            path="/"
            render={() => (isAuth ? <Home /> : <Redirect to="/login" />)}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

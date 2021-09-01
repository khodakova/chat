import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import {Auth, Home} from "./pages";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Route exact path={['/', '/login']} component={Auth} />
        <Route exact path={['/im']} component={Home} />
      </div>
    </Router>
  );
}

export default App;

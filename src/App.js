import Auth from "./pages/Auth";
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Auth/>
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import Sidebar from "./components/layouts/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Kitchens from "./components/Information/Kitchens";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main">
          <Navbar />

          <Switch>
            <Route exact path="/" component={Kitchens} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import Sidebar from "./components/layouts/Sidebar";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Kitchens from "./components/Information/Kitchens";
import Form from "./components/Forms/Form";
import EditForm from "./components/Forms/EditForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="main">
          <Navbar />

          <Switch>
            <Route exact path="/" component={() => <Redirect push to="/kitchen" />} />
            <Route exact path="/kitchen" component={Kitchens} />
            <Route exact path="/kitchen/addKitchen" component={Form} />
            <Route exact path="/kitchen/editKitchen/:id" component={EditForm} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

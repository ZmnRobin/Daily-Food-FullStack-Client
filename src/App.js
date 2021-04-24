import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import Header from './Components/Header/Header'
import SignUp from './Components/SignUp/SignUp';
import Shipment from './Components/Shipment/Shipment';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/home">
          <Home/>
        </Route>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/signup">
          <SignUp/>
        </Route>
        <Route path="/shipment">
          <Shipment/>
        </Route>
      </Switch>
    </Router>
  );
}
export default App;

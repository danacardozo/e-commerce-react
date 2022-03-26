import NavBar from "./components/NavBar"
import Product from "./components/Product";
import './App.css';
import Products from "./components/Products";
import CheckoutCard from "./components/CheckoutCard";
import CheckoutPage from "./components/CheckoutPage";
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App"> 
    <NavBar/> 
    <Switch>
      <Route path="/checkout-page">
         <CheckoutPage/> 
      </Route>
    <Route path="/">
       <Products/> 
    </Route>
    </Switch> 
    </div>
    </Router>
  );
}

export default App;

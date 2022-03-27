import NavBar from "./components/NavBar"
import Product from "./components/Product";
import './App.css';
import Products from "./components/Products";
import CheckoutCard from "./components/CheckoutCard";
import CheckoutPage from "./components/CheckoutPage";
import {Switch, BrowserRouter as Router, Route} from "react-router-dom";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import {useEffect} from "react";
import {auth} from "./firebase";
import {actionTypes} from "./reducer";
import {useStateValue} from "./StateProvider"
import Checkout from "./CheckoutForm/Checkout";

function App() {
  const [{user}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser){
        dispatch({
          type: actionTypes.SET_USER,
          user: authUser,
        })
      }
    })
  }, [])

  return (
    <Router>
    <div className="App"> 
    <NavBar/> 
    <Switch>
    <Route path="/signup">
         <SignUp/> 
      </Route>
    <Route path="/signin">
         <SignIn/> 
      </Route>
      <Route path="/checkout-page">
         <CheckoutPage/> 
      </Route>
      <Route path="/checkout">
         <Checkout/> 
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

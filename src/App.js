import NavBar from "./components/NavBar"
import Product from "./components/Product";
import './App.css';
import Products from "./components/Products";
import CheckoutCard from "./components/CheckoutCard";
import CheckoutPage from "./components/CheckoutPage";

function App() {
  return (
    <div className="App"> 
    <NavBar/> 
    <CheckoutPage/>
  { /* <CheckoutCard/> */}
   {/* <Products/>*/}
   {/* <Product />*/}
    </div>
  );
}

export default App;

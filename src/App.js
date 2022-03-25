import NavBar from "./components/NavBar"
import Product from "./components/Product";
import './App.css';
import Products from "./components/Products";

function App() {
  return (
    <div className="App"> 
    <NavBar/> 
    <Products/>
   {/* <Product />*/}
    </div>
  );
}

export default App;

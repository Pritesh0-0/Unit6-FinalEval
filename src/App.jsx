import './App.css';
import { Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import AllRoutes from "./Routes/AllRoutes"
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
function App() {
  return (
    <>
    <Navbar></Navbar>
    <Routes>
         <Route path="/login" element={<Login />}></Route>
        <Route path="/" element={<AllRoutes Components={HomePage} />}></Route>
        <Route path="/cart" element={<AllRoutes Components={Cart} />}></Route>
        <Route path="/ProductDetails/:pid" element={<AllRoutes Components={ProductDetails} />}></Route>
       </Routes>
    </>
    
  );
}

export default App;

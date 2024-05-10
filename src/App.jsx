
import { Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './page/HomePage';
import ProdId from './page/ProdId';
import Register from './page/Register';
import Login from './page/Login';
import Cart from './page/Cart';
import Purchases from './page/Purchases';
import ProtectedRoutes from './page/ProtectedRoutes';
import NavBar from './components/share/NavBar';


function App() {
  

  return (
  <div>
    <NavBar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/product/:id" element={<ProdId/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route element={<ProtectedRoutes/>}/>
      <Route element={<ProtectedRoutes/>}>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/purchases" element={<Purchases/>}/>
      </Route>
      </Routes>   
  </div>
  )
}

export default App;

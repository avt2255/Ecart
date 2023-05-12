
import './App.css';
import Home from './Pages/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Product from './Pages/Product';
import AdminRegister from '../src/Pages/AdminRegister'
import AdminLogin from './Pages/AdminLogin';
import CartPage from './Pages/CartPage';
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/add' element={<Product/>} />
          <Route path='/register' element={<AdminRegister/>} />
          <Route path='/login' element={<AdminLogin/>} />
          <Route path='/cart' element={<CartPage/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

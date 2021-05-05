import './neutron-ui.css';
import './App.css';
import {Routes,  Route,Link} from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Navbar from './Components/Navbar';
import Products from './Pages/Products';
import Login from './Pages/login';
import  { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
   <div><Toaster/></div>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="products" element={<Products/>}/>
    <Route path="cart" element={<Cart/>}/>
    <Route path="login" element={<Login />}/>
    </Routes>
    </div>
  );
}

export default App;

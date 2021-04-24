import './App.css';
import {Routes,  Route,Link} from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import './neutron-ui.css';
import Navbar from './Components/Navbar';
import Products from './Pages/Products';

function App() {
  
  return (
    <div className="App">
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="products" element={<Products/>}/>
    <Route path="cart" element={<Cart/>}/>
    </Routes>
    </div>
  );
}

export default App;

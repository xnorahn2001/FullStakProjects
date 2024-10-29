import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './pages/ProductList';
import Homepage from './pages/Homepage'; 
import Navbar from './components/navbar/Navbar'; 


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/products" element={<ProductList />} />
      </Routes>
    </Router>
       
  );
}

export default App;

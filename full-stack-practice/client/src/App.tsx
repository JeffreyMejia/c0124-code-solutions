import './App.css';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Catalog } from './Catalog';
import { ProductDetails } from './ProductDetails';
import { About } from './About';
import { Notfound } from './Notfound';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Catalog />} />
        <Route path="about" element={<About />} />
        <Route path="details/:productId" element={<ProductDetails />} />
        <Route path="*" element={<Notfound />} />
      </Route>
    </Routes>
  );
}

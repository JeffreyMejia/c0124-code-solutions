import './App.css';
import { Route, Routes } from 'react-router-dom';
import { NavBar } from './Components/NavBar';
import { Catalog } from './Catalog';
import { About } from './About';
import { ProductDetails } from './ProductDetails';
import { NotFound } from './NotFound';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Catalog />} />
          <Route path="about" element={<About />} />
          <Route path="detail/:productId" element={<ProductDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

import './App.css';
import { Carousel } from './Carousel';
const images = [
  '/images/itadori.webp',
  '/images/fushiguro.webp',
  '/images/kugisaki.webp',
  '/images/zen-in.webp',
  '/images/panda.webp',
  '/images/inumaki.webp',
];

export default function App() {
  return <Carousel images={images} />;
}

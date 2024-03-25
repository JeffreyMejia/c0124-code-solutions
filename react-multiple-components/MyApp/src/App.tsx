import { RotatingBanner } from './RotatingBanner';
import './App.css';
const animals = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

export default function App() {
  return <RotatingBanner animals={animals} />;
}

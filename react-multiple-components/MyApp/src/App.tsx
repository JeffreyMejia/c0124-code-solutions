import { Banner } from './Banner';
import { PreviousButton } from './PreviousButton';
import { Indicators } from './Indicators';
import { NextButton } from './NextButton';
import './App.css';

// const items = [
//   'Aardvark',
//   'Bengal',
//   'Caterpillar',
//   'Dromedary',
//   'Elephant',
//   'Ferret',
// ];

export default function App() {
  return (
    <>
      <Banner />
      <PreviousButton />
      <Indicators />
      <NextButton />
    </>
  );
}

import { Banner } from './Banner';
import { PreviousButton } from './PreviousButton';
import { Indicators } from './Indicators';
import { NextButton } from './NextButton';
import { useState } from 'react';
import './RotatingBanner.css';

type Props = {
  animals: string[];
};

export function RotatingBanner({ animals }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="RotatingBanner">
      <Banner animal={animals[currentIndex]} />
      <PreviousButton />
      <Indicators count={animals.length} current={currentIndex} />
      <NextButton />
    </div>
  );
}

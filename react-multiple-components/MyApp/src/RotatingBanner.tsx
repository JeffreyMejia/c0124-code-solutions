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

  function handleNext() {
    if (currentIndex >= animals.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function handlePrevious() {
    setCurrentIndex((currentIndex - 1 + animals.length) % animals.length);
  }

  function handleCurrent(animalIndex: number) {
    setCurrentIndex(animalIndex);
  }

  return (
    <div className="RotatingBanner">
      <Banner animal={animals[currentIndex]} />
      <PreviousButton prev={handlePrevious} />
      <Indicators
        thisIsCurrent={handleCurrent}
        count={animals.length}
        current={currentIndex}
      />
      <NextButton next={handleNext} />
    </div>
  );
}

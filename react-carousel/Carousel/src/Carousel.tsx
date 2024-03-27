import { Next } from './Next';
import { Previous } from './Previous';
import { Indicators } from './Indicators';
import { Images } from './Images';
import { useState, useEffect, useCallback } from 'react';

type Props = {
  images: string[];
};

export function Carousel({ images }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = useCallback(() => {
    setActiveIndex((activeIndex + 1) % images.length);
  }, [activeIndex, images]);

  useEffect(() => {
    const intervalId = setTimeout(handleNext, 3000);
    return () => {
      clearInterval(intervalId);
    };
  }, [handleNext]);

  function handleClick(student: number) {
    setActiveIndex(student);
  }

  function handlePrevious() {
    setActiveIndex((activeIndex - 1 + images.length) % images.length);
  }

  return (
    <div>
      <div className="row">
        <Previous onPrev={handlePrevious} />
        <Images image={images[activeIndex]} />
        <Next onNext={handleNext} />
      </div>
      <Indicators
        count={images.length}
        thisIsCurrent={handleClick}
        current={activeIndex}
      />
    </div>
  );
}

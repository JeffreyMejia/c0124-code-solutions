import './ImageContainer.css';
import { useState } from 'react';

type Props = {
  imageSrc: string[];
};

export function ImageContainer({ imageSrc }: Props) {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }
  const image = imageSrc[index];
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          onClick={handleClick}
          className="image-fill"
          src={image}
          alt="space-image"
        />
      </div>
    </div>
  );
}

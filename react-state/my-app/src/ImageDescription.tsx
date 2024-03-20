import { useState } from 'react';

type Props = {
  imageDescrip: string[];
};

export function ImageDescription({ imageDescrip }: Props) {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index >= imageDescrip.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  const des = imageDescrip[index];
  return (
    <div>
      <p onClick={handleClick}>{des}</p>
    </div>
  );
}

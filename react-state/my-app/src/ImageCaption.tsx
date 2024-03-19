import { useState } from 'react';

type Props = {
  imageCap: string[];
};

export function ImageCaption({ imageCap }: Props) {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex(index + 1);
  }

  const cap = imageCap[index];
  return (
    <div>
      <h3 onClick={handleClick}>{cap}</h3>
    </div>
  );
}

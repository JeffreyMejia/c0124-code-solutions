import { useState } from 'react';
import './hotButton.css';
type Props = {
  label: string;
  temp?: string;
};

export function HotButton({ label, temp }: Props) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  if (count < 3) {
    temp = 'cold';
  } else if (count < 6) {
    temp = 'cool';
  } else if (count < 9) {
    temp = 'tepid';
  } else if (count < 12) {
    temp = 'warm';
  } else if (count < 15) {
    temp = 'hot';
  } else {
    temp = 'nuclear';
  }

  return (
    <div>
      <button onClick={handleClick} className={temp}>
        {label}
      </button>
      <h1>{count}</h1>
    </div>
  );
}

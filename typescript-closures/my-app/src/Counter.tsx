import { useCallback, useEffect, useState } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    stuff;
    setCounter((prev) => prev + 1);
  }, []);

  const stuff = useCallback(function getData() {
    // fetch data
    return { foo: 'bar' };
  }, []);
  return <div>Fetching {counter} times</div>;
}

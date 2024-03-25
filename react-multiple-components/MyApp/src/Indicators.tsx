type Props = {
  current: number;
  count: number;
  thisIsCurrent: (current: number) => void;
};

export function Indicators({ current, count, thisIsCurrent }: Props) {
  const arr = [];
  for (let i = 0; i < count; i++) {
    let text;
    if (current === i) {
      text = 'active';
    }
    arr.push(
      <button onClick={() => thisIsCurrent(i)} key={i} className={text}>
        {i}
      </button>
    );
  }
  return arr;
}

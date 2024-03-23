type Props = {
  current: number;
  count: number;
};

export function Indicators({ current, count }: Props) {
  const arr = [];
  for (let i = 0; i < count; i++) {
    let text;
    if (current === i) {
      text = 'active';
    }
    arr.push(
      <button key={i} className={text}>
        {i}
      </button>
    );
  }
  return arr;
}

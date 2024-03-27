import { FaRegDotCircle } from 'react-icons/fa';
type Props = {
  count: number;
  current: number;
  thisIsCurrent: (current: number) => void;
};

export function Indicators({ count, current, thisIsCurrent }: Props) {
  const indicators = [];

  for (let i = 0; i < count; i++) {
    let text = '';
    if (current === i) {
      text = 'active';
    }
    indicators.push(
      <FaRegDotCircle
        key={i}
        className={`${text} jjk`}
        onClick={() => thisIsCurrent(i)}
      />
    );
  }

  return indicators;
}

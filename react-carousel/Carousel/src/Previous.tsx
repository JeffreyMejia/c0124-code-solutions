import { FaChevronLeft } from 'react-icons/fa6';

type Props = {
  onPrev: () => void;
};

export function Previous({ onPrev }: Props) {
  return <FaChevronLeft className="chevron" onClick={onPrev} />;
}

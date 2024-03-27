import { FaChevronRight } from 'react-icons/fa6';

type Props = {
  onNext: () => void;
};

export function Next({ onNext }: Props) {
  return <FaChevronRight className="chevron" onClick={onNext} />;
}

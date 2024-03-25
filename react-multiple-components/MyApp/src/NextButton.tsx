type Props = {
  next: () => void;
};
export function NextButton({ next }: Props) {
  return (
    <div>
      <button onClick={next}>Next</button>
    </div>
  );
}

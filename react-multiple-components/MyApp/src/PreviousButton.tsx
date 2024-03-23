type Props = {
  prev: () => void;
};

export function PreviousButton({ prev }: Props) {
  return (
    <div>
      <button onClick={prev}>Previous</button>
    </div>
  );
}

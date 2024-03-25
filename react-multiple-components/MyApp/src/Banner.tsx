type Props = {
  animal: string;
};

export function Banner({ animal }: Props) {
  return <h1>{animal}</h1>;
}

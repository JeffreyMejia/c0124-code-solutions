type Props = {
  image: string;
};

export function Images({ image }: Props) {
  return (
    <div className="row">
      <img src={image} />
    </div>
  );
}

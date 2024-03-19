type Props = {
  imageDescriptionText: string;
};

export function ImageDescription({ imageDescriptionText }: Props) {
  return (
    <div>
      <p>{imageDescriptionText}</p>
    </div>
  );
}

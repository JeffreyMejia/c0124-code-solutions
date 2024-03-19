type Props = {
  imageCaptionText: string;
};

export function ImageCaption({ imageCaptionText }: Props) {
  return (
    <div>
      <h3>{imageCaptionText}</h3>
    </div>
  );
}

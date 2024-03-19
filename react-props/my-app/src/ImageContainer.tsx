import './ImageContainer.css';

type Props = {
  imageUrl: string;
};

export function ImageContainer({ imageUrl }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img className="image-fill" src={imageUrl} alt="space-image" />
      </div>
    </div>
  );
}

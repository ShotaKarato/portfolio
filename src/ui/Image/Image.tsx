type Props = {
  readonly image: {
    readonly url: string;
    readonly width: number;
  };
  readonly imageSmall: {
    readonly url: string;
    readonly width: number;
  };
  readonly alt: string;
  readonly className?: string;
};
export const Image = ({ image, imageSmall, alt, className }: Props) => {
  const srcSet = `${imageSmall.url} ${imageSmall.width}w, ${image.url} ${image.width}w`;
  const sizes = `(max-width: 767px) 300px, 800px`;
  return (
    <img
      srcSet={srcSet}
      sizes={sizes}
      src={image.url}
      alt={alt}
      className={className}
    />
  );
};

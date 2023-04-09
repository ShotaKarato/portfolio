type Props = {
  readonly className?: string;
  readonly onClick?: () => void;
};
export const CloseIcon = ({ className, onClick }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="30"
    height="30"
    viewBox="0 96 960 960"
    className={className}
    onClick={onClick}
  >
    <path d="M249 849l-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231z"></path>
  </svg>
);

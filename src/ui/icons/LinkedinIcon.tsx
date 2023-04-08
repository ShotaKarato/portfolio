type Props = {
  readonly className?: string;
};

export const LinkedinIcon = ({ className }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="70"
    height="70"
    viewBox="0 0 70 70"
    className={className}
  >
    <defs>
      <linearGradient
        id="linear-gradient"
        x1="-1.971"
        x2="-1.264"
        y1="2.61"
        y2="3.317"
        gradientUnits="objectBoundingBox"
      >
        <stop offset="0"></stop>
        <stop offset="1"></stop>
      </linearGradient>
    </defs>
    <path
      d="M42.025 7.025a35 35 0 1035 35 35 35 0 00-35-35zm-9.338 51.921H25V34.119h7.685zm-3.879-28.078a4.581 4.581 0 114.544-4.581 4.563 4.563 0 01-4.544 4.581zm32.677 28.078h-7.647V45.914c0-3.574-1.358-5.569-4.184-5.569-3.076 0-4.683 2.078-4.683 5.569v13.032H37.6V34.119h7.37v3.344a8.659 8.659 0 017.481-4.1c5.264 0 9.033 3.214 9.033 9.864z"
      transform="translate(-7.025 -7.025)"
    ></path>
  </svg>
);

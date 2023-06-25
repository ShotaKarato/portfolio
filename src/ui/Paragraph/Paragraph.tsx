import { ReactNode } from "react";

type Props = {
  readonly children: ReactNode;
  readonly className?: string;
};

export const Paragraph = ({ children, className }: Props) => (
  <p className={className}>{children}</p>
);

import { ReactNode } from "react";
import { clsx } from "clsx";
import { headingStyle } from "./Heading.css";
type Props = {
  readonly children: ReactNode;
  readonly as?: "h1" | "h2" | "h3" | "h4";
  readonly className?: string;
};
export const Heading = ({ children, as: Tag = "h2", className }: Props) => (
  <Tag className={clsx(headingStyle, className)}>{children}</Tag>
);

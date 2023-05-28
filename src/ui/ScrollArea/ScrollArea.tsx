import { OverlayScrollbarsComponent, OverlayScrollbarsComponentProps } from "overlayscrollbars-react";
import { ReactNode, useMemo } from "react";
import "overlayscrollbars/overlayscrollbars.css";

type Props = {
  readonly children: ReactNode;
  readonly options?: Exclude<OverlayScrollbarsComponentProps["options"], false>;
  readonly className?: string;
};
export const ScrollArea = ({children, options, className}: Props) => {
  const scrollbarOptions = useMemo<OverlayScrollbarsComponentProps["options"]>(() => ({
    ...options,
    scrollbars: {
        autoHide: "leave",
        clickScrolling: false,
        ...(options?.scrollbars ? options?.scrollbars : {}),
      },
  }),[]);

  return (
    <OverlayScrollbarsComponent options={scrollbarOptions} className={className}>
      {children}
    </OverlayScrollbarsComponent>
  );
};

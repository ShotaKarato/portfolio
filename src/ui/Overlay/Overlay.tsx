import { ReactNode } from "react";
import { CloseIcon } from "../icons";
import { overlayStyle } from "./Overlay.css";
import { ScrollArea } from "../ScrollArea";

export type Props = {
  readonly children: ReactNode;
  readonly isOpen: boolean;
  readonly onClose: () => void;
};

export const Overlay = ({ children, isOpen, onClose }: Props) => (
  <div className={isOpen ? overlayStyle.overlayOpen : overlayStyle.overlay}>
    <ScrollArea className={overlayStyle.container}>
      <div className={overlayStyle.btnContainer}>
        <button className={overlayStyle.closeBtn}>
          <CloseIcon onClick={onClose} />
        </button>
      </div>
      <div>{children}</div>
    </ScrollArea>
  </div>
);

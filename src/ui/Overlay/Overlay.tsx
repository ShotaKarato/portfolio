import { ReactNode } from "react";
import { CloseIcon } from "../icons";
import { overlayStyle } from "./Overlay.css";

export type Props = {
  readonly children: ReactNode;
  readonly isOpen: boolean;
  readonly onClose: () => void;
};

export const Overlay = ({ children, isOpen, onClose }: Props) => (
  <div className={isOpen ? overlayStyle.overlayOpen : overlayStyle.overlay}>
    <div className={overlayStyle.container}>
      <div className={overlayStyle.btnContainer}>
        <button className={overlayStyle.closeBtn}>
          <CloseIcon onClick={onClose} />
        </button>
      </div>
      <div>{children}</div>
    </div>
  </div>
);

import { useCallback, useState } from "react";

export const useOverlay = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const handleOverlayOpen = useCallback(() => {
    setIsOverlayOpen(true);
  }, []);

  const handleOverlayClose = useCallback(() => {
    setIsOverlayOpen(false);
  }, []);

  return {
    isOverlayOpen,
    handleOverlayOpen,
    handleOverlayClose,
  };
};

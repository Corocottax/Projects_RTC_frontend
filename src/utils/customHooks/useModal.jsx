import { useState } from "react";

export const useModal = () => {
  const [openned, setOpenned] = useState(false);

  const openModal = () => {
    setOpenned(true);
  };

  const closeModal = () => {
    setOpenned(false);
  };

  return { openned, openModal, closeModal };
};
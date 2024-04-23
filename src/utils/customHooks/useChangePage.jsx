import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useChangePage = ({ path }) => {
  const [openned, setOpenned] = useState(false);

  const navigate = useNavigate();

  const transition = () => {
    setOpenned(true);
    setTimeout(() => {
      navigate(path);
    }, 500);
  };

  return {
    openned,
    transition,
  };
};
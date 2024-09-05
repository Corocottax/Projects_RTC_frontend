import { createContext } from "react";

export const SkeletonContext = createContext();

const SkeletonProvider = ({ status, children }) => {
  return (
    <SkeletonContext.Provider value={{ status }}>
      { children }
    </SkeletonContext.Provider>
  );
};

export default SkeletonProvider;

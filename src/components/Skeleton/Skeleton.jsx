import { useContext } from "react";
import "./Skeleton.css";
import { SkeletonContext } from "../../providers/SkeletonProvider";

const Skeleton = ({ children, w, h, br = "var(--rtc-br-primary)" }) => {

  const { status } = useContext(SkeletonContext);

  return (
    <>
      {!status ? (
        <div
          id="skeleton"
          className={br && "border-radius"}
          style={{ width: w, height: h, borderRadius: br }}
        >
          {status && children}
        </div>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default Skeleton;

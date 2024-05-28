import "./ImgWrp.css";

const ImgWrp = ({ children, borderRadius = "0px", w = "0px", h = "0px" }) => {
  return (
    <div
      className="img_wrp"
      style={{
        borderRadius: borderRadius,
        width: w,
        height: h,
      }}
    >
      {children}
    </div>
  );
};

export default ImgWrp;

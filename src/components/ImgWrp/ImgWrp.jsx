import "./ImgWrp.css";

const ImgWrp = ({ children, br = "0px", w = "0px", h = "0px" }) => {
  return (
    <div
      className="img_wrp"
      style={{
        borderRadius: br,
        width: w,
        height: h,
        minWidth: w,
        minHeight: h
      }}
    >
      {children}
    </div>
  );
};

export default ImgWrp;

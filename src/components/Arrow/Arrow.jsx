import "./Arrow.css";

const Arrow = ({ funct, position = "right", mode = "light" }) => {
  return (
    <div className={`arrow ${position}`} onClick={funct}>
      <img
        src={
          mode === "light"
            ? "/assets/icons/arrow-light.png"
            : "/assets/icons/arrow-dark.png"
        }
      />
    </div>
  );
};

export default Arrow;

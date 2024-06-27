import LoadingDots from "../LoadingDots/LoadingDots";
import "./Button.css";

const Button = ({
  onClick,
  className = "",
  children,
  mode = "light",
  size = "m",
  border = false,
  loading = false,
}) => {
  return (
    <button
      onClick={onClick}
      className={`main_button ${className} ${mode} ${size} ${
        border ? "border" : ""
      } ${loading ? "loading" : ""}`}
      disabled={loading}
    >
      {children}
      {loading && (
        <LoadingDots/>
      )}
    </button>
  );
};

export default Button;

import "./Cortinilla.css";

const Cortinilla = ({ openned, mode = "light", position = "right" }) => {
  return (
    <div
      className={`cortinilla ${openned ? "open" : ""}`}
      style={{
        background:
          mode === "light"
            ? "var(--rtc-bg-fifth)"
            : "linear-gradient(90deg, var(--rtc-bg-primary) 0%, var(--rtc-bg-secondary) 100%)",
        right: position === "right" ? "0px" : "auto",
        left: position === "left" ? "0px" : "auto",
      }}
    ></div>
  );
};

export default Cortinilla;

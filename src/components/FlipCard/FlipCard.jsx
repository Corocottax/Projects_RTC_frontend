import "./FlipCard.css";

const FlipCard = ({ children, w, h, minW = 0, toggle }) => {
  return (
    <div className="flip-card" style={{ width: w, height: h, minWidth: minW }}>
      <div className={`flip-card-inner ${toggle ? "front" : "back"}`}>
        {children}
      </div>
    </div>
  );
};

export default FlipCard;

import "./FlipCard.css";

const FlipCard = ({ children, w, h }) => {
  return (
    <div className="flip-card" style={{ width: w, height: h }}>
      <div className='flip-card-inner'>
        {children}
      </div>
    </div>
  );
};

export default FlipCard;

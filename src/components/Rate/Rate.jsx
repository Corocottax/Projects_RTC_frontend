import { useParams } from "react-router-dom";
import { API } from "../../API/API";
import "./Rate.css";
import { useState } from "react";

const Rate = ({ closeModal }) => {
  const [hover, setHover] = useState(0);
  const [voted, setVoted] = useState(false);
  const { id } = useParams();

  const vote = async (selection) => {
    await API({
      method: "PUT",
      endpoint: `/projects/interaction/${id}`,
      body: {
        vote: selection,
      },
    });
    setVoted(true);
    setTimeout(() => {
      closeModal();
    }, 2000);
    setTimeout(() => {
      setVoted(false);
    }, 2500);
  };

  return (
    <div className="rate">
      {!voted ? (
        <div>
          <h2>¿Ya viste mi proyecto?</h2>
          <h3>Dame tu opinión!</h3>
          <div onMouseLeave={() => setHover(0)}>
            <div
              className={`starRate ${hover >= 1 ? "select" : "no-select"}`}
              onMouseEnter={() => setHover(1)}
              onClick={() => vote(1)}
            ></div>
            <div
              className={`starRate ${hover >= 2 ? "select" : "no-select"}`}
              onMouseEnter={() => setHover(2)}
              onClick={() => vote(2)}
            ></div>
            <div
              className={`starRate ${hover >= 3 ? "select" : "no-select"}`}
              onMouseEnter={() => setHover(3)}
              onClick={() => vote(3)}
            ></div>
            <div
              className={`starRate ${hover >= 4 ? "select" : "no-select"}`}
              onMouseEnter={() => setHover(4)}
              onClick={() => vote(4)}
            ></div>
            <div
              className={`starRate ${hover >= 5 ? "select" : "no-select"}`}
              onMouseEnter={() => setHover(5)}
              onClick={() => vote(5)}
            ></div>
          </div>
        </div>
      ) : (
        <div>
          <h2>Gracias por tu voto! 🥳</h2>
        </div>
      )}
    </div>
  );
};

export default Rate;

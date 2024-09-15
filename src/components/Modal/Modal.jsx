import "./Modal.css";

const Modal = ({ children, openned, closeModal }) => {
  return (
    <div className={`modal ${openned ? "openned" : "closed"}`}>
      <img src="/assets/icons/x.png" alt="cerrar modal" onClick={closeModal}/>
      {children}
    </div>
  );
};

export default Modal;

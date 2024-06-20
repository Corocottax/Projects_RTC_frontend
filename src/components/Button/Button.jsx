import "./Button.css";

const Button = ({
  onClick,
  className = "",
  children,
  mode = "light",
  size = "m",
}) => {
  return (
    <button
      onClick={onClick}
      className={`main_button ${className} ${mode} ${size}`}
    >
      {children}
    </button>
  );
};

export default Button;

/* <button onClick={() => logout(dispatch, navigate)} className="logout">
        Logout
      </button> */

/* <button onClick={submit}>Enviar</button> */

/* 

Button({ onClick: () => {}, className: "Paquito", children: children });

<Button onClick={() => {}} className="Paquito" mode="dark">Cualquier cosa</Button>

*/

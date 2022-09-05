import "./App.css";

const Button = ({ className, active,  value, onClick }) => {
  return (
    <button className={`button ${className} ${active ? 'active' : ''}`} onClick={onClick} disabled={!active}>
      <p>{value}</p>
    </button>
  );
};

export default Button;
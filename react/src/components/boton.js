export const Boton = ({ children, onClick }) => {
  const styles = {
    backgroundColor: "black",
    color: "white",
    padding: "6px 15px",
    margin: "12px",
    border: "none",
  };

  return (
    <button style={styles} onClick={onClick}>
      {children}
    </button>
  );
};

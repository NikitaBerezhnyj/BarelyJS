export function Button({ onClick, children }) {
  return (
    <button className="my-button" onClick={onClick}>
      {children}
    </button>
  );
}

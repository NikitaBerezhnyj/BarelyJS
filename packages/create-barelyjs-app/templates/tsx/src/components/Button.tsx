import type { Props } from "barelyjs";

interface ButtonProps extends Props {
  onClick?: () => void;
}

export function Button({ onClick, children }: ButtonProps) {
  return (
    <button className="my-button" onClick={onClick}>
      {children}
    </button>
  );
}

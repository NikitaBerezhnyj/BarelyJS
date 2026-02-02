import { h } from "barelyjs";
import type * as Barely from "barelyjs";

export interface ButtonProps extends Barely.Props {
  onClick?: (e: MouseEvent) => void;
}

export const Button: Barely.FC<ButtonProps> = props => {
  const { onClick, children } = props ?? {};

  return h(
    "button",
    {
      class: "my-button",
      onClick
    },
    ...(children ?? [])
  );
};

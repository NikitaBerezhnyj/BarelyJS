import type { Props, VNodeChild } from "./types";

export function Fragment(props: Props): VNodeChild[] {
  const children = props.children;

  if (Array.isArray(children)) {
    return children;
  }

  if (children !== undefined && children !== null) {
    return [children];
  }

  return [];
}

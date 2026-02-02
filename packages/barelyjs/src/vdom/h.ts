import type { VNode, VNodeChild, FC, Props } from "../types";

export function h(type: string | FC, props: Props | null, ...children: VNodeChild[]): VNode {
  return {
    type,
    props: props || {},
    children
  };
}

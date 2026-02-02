export interface Props {
  [key: string]: any;
  children?: VNodeChild | VNodeChild[];
}

export type FC<P = Props> = (props?: P) => VNode;

export interface VNode {
  type: string | FC;
  props: Props;
  children: VNodeChild[];
}

export type VNodeChild = VNode | string | number | boolean | null | undefined;

export interface ComponentInstance {
  render: FC;
  container: HTMLElement;
  states: any[];
  stateIndex: number;
}

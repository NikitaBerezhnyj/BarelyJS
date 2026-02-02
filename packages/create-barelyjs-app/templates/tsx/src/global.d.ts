import { VNode } from "barelyjs";
import { h as _h, Fragment as _Fragment } from "barelyjs";

declare global {
  const h: typeof _h;
  const Fragment: typeof _Fragment;

  namespace JSX {
    interface IntrinsicElements {
      [elemName: string]: any;
    }

    interface Element extends VNode {}

    interface ElementClass {
      render: any;
    }

    interface ElementAttributesProperty {
      props: {};
    }

    interface ElementChildrenAttribute {
      children: {};
    }
  }
}

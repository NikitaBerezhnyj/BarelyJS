import type { ComponentInstance, FC } from "../types";
import { mount } from "../vdom/mount";
import { render } from "../vdom/render";

let currentComponent: ComponentInstance | null = null;

export function getCurrentComponent(): ComponentInstance | null {
  return currentComponent;
}

export function setCurrentComponent(component: ComponentInstance | null): void {
  currentComponent = component;
}

export function rerender(component: ComponentInstance): void {
  const { container, render } = component;

  container.innerHTML = "";

  setCurrentComponent(component);
  component.stateIndex = 0;

  mount(render(), container);
}

export function createComponent(renderFn: FC, container: HTMLElement): ComponentInstance {
  const component: ComponentInstance = {
    render: renderFn,
    container,
    states: [],
    stateIndex: 0
  };

  setCurrentComponent(component);
  component.stateIndex = 0;

  mount(renderFn(), container);

  return component;
}

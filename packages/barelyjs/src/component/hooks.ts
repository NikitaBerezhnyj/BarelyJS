import { getCurrentComponent, rerender } from "./component";

export type SetState<T> = (newValue: T | ((prevValue: T) => T)) => void;

export function useState<T>(initialValue: T): [T, SetState<T>] {
  const component = getCurrentComponent();

  if (!component) {
    throw new Error("useState can only be called inside a component");
  }

  if (!component.states) {
    component.states = [];
  }

  const stateIndex = component.stateIndex;

  if (component.states[stateIndex] === undefined) {
    component.states[stateIndex] = initialValue;
  }

  const setState: SetState<T> = newValue => {
    const currentValue = component.states[stateIndex];

    const nextValue =
      typeof newValue === "function" ? (newValue as (prevValue: T) => T)(currentValue) : newValue;

    if (nextValue !== currentValue) {
      component.states[stateIndex] = nextValue;
      rerender(component);
    }
  };

  const currentValue = component.states[stateIndex] as T;

  component.stateIndex++;

  return [currentValue, setState];
}

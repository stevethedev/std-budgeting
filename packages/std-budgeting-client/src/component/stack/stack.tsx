import {
  type ComponentType,
  createElement,
  type HTMLAttributes,
  type ReactElement,
  type ReactHTML,
  type ReactNode,
} from "react";
import styles from "./stack.module.scss";
import { getClassName } from "../../utils/class-name";
import { cssProperties } from "../../utils/css-properties";

export interface Props<
  T extends ComponentType<unknown> | keyof ReactHTML = "div",
> extends HTMLAttributes<T> {
  children: ReactNode;
  className?: string;
  isVertical?: boolean;
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  as?: T;
}

export function Stack<
  T extends ComponentType<unknown> | keyof ReactHTML = "div",
>({
  children,
  isVertical = false,
  gap = 2,
  className,
  as,
  ...props
}: Props<T>): ReactElement<T> {
  const style = cssProperties({ "--stack-gap": `var(--theme--size--${gap})` });
  const classes = getClassName([
    className,
    styles.stack,
    {
      [styles.vertical]: isVertical,
      [styles.horizontal]: !isVertical,
    },
  ]);

  const As = (as ?? "div") as T;

  const allProps = { className: classes, style, ...props } as object;

  return createElement(As, allProps, children) as ReactElement<T>;
}

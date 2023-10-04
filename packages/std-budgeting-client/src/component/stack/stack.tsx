import type { FC, ReactNode } from "react";
import styles from "./stack.module.scss";
import { getClassName } from "../../utils/class-name";
import { cssProperties } from "../../utils/css-properties";

export interface Props {
  children: ReactNode;

  className?: string;
  isVertical?: boolean;
  gap?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
}

export const Stack: FC<Props> = ({
  children,
  isVertical = false,
  gap = 2,
  className,
}) => {
  const style = cssProperties({ "--stack-gap": `var(--theme--size--${gap})` });
  const classes = getClassName([
    className,
    styles.stack,
    {
      [styles.vertical]: isVertical,
      [styles.horizontal]: !isVertical,
    },
  ]);
  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

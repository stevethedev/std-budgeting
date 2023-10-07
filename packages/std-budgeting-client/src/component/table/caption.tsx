import type { FC, ReactNode } from "react";
import styles from "./table.module.scss";
import { getClassName } from "../../utils/class-name";

export interface Props {
  className?: string;
  children: ReactNode;
}

export const Caption: FC<Props> = ({ children, className, ...props }) => {
  const classes = getClassName([className, styles.caption]);
  return (
    <caption className={classes} {...props}>
      {children}
    </caption>
  );
};

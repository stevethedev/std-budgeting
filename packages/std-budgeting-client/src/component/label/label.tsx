import { FC } from "react";
import { getClassName } from "../../utils/class-name";
import styles from "./label.module.scss";

export interface Props {
  children: string;
  className?: string;
  htmlFor?: string;
}

export const Label: FC<Props> = ({ children, className, ...props }) => {
  const classes = getClassName([className, styles.label]);

  return (
    <label className={classes} {...props}>
      {children}
    </label>
  );
};

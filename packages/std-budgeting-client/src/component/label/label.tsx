import { FC } from "react";
import { getClassName } from "../../utils/class-name";
import styles from "./label.module.scss";

export interface Props {
  className?: string;
  children: string;
}

export const Label: FC<Props> = ({ children, className }) => {
  const classes = getClassName([className, styles.label]);

  return <label className={classes}>{children}</label>;
};

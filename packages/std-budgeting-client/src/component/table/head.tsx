import type { FC, ReactComponentElement } from "react";
import type { Row } from "./row";
import styles from "./table.module.scss";
import { getClassName } from "../../utils/class-name";

export interface Props {
  className?: string;
  children:
    | ReactComponentElement<typeof Row>
    | Array<ReactComponentElement<typeof Row>>;
}

export const Head: FC<Props> = ({ children, className, ...props }) => {
  const classes = getClassName([className, styles.head]);
  return (
    <thead className={classes} {...props}>
      {children}
    </thead>
  );
};

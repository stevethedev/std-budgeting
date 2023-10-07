import type { FC, ReactComponentElement } from "react";
import { Row } from "./row";
import { getClassName } from "../../utils/class-name";
import styles from "./table.module.scss";

export interface Props {
  className?: string;
  children:
    | ReactComponentElement<typeof Row>
    | Array<ReactComponentElement<typeof Row>>;
}

export const Foot: FC<Props> = ({ children, className, ...props }) => {
  const classes = getClassName([className, styles.foot]);
  return (
    <tfoot className={classes} {...props}>
      {children}
    </tfoot>
  );
};

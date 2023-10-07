import type { FC, ReactComponentElement } from "react";
import type { Row } from "./row";
import { getClassName } from "../../utils/class-name";
import styles from "./table.module.scss";

export interface Props {
  className?: string;
  children:
    | ReactComponentElement<typeof Row>
    | Array<ReactComponentElement<typeof Row>>;
}

export const Body: FC<Props> = ({ children, className, ...props }) => {
  const classes = getClassName([className, styles.body]);
  return (
    <tbody className={classes} {...props}>
      {children}
    </tbody>
  );
};

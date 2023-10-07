import type { FC, ReactComponentElement } from "react";
import type { Cell } from "./cell";
import { getClassName } from "../../utils/class-name";
import styles from "./table.module.scss";

export interface Props {
  className?: string;
  children:
    | ReactComponentElement<typeof Cell>
    | Array<ReactComponentElement<typeof Cell>>;
}

export const Row: FC<Props> = ({ children, className, ...props }) => {
  const classes = getClassName([className, styles.row]);
  return (
    <tr className={classes} {...props}>
      {children}
    </tr>
  );
};

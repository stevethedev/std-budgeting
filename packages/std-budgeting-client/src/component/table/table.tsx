import type { FC, ReactComponentElement } from "react";
import type { Head } from "./head";
import type { Body } from "./body";
import type { Foot } from "./foot";
import type { Caption } from "./caption";
import { getClassName } from "../../utils/class-name";
import styles from "./table.module.scss";

export interface Props {
  className?: string;
  children:
    | ReactComponentElement<
        typeof Head | typeof Body | typeof Foot | typeof Caption
      >
    | Array<
        ReactComponentElement<
          typeof Head | typeof Body | typeof Foot | typeof Caption
        >
      >;
}

export const Table: FC<Props> = ({ children, className, ...props }) => {
  const classes = getClassName([className, styles.table]);
  return (
    <table className={classes} {...props}>
      {children}
    </table>
  );
};

import type { FC, HTMLAttributes, ReactNode } from "react";
import { getClassName } from "../../utils/class-name";
import styles from "./table.module.scss";

export interface Props extends HTMLAttributes<HTMLTableCellElement> {
  className?: string;
  children: ReactNode;
  isHeader?: boolean;
}

export const Cell: FC<Props> = ({
  children,
  isHeader = false,
  className,
  ...props
}) => {
  const classes = getClassName([className, styles.cell]);
  const As = isHeader ? "th" : "td";
  return (
    <As className={classes} {...props}>
      {children}
    </As>
  );
};

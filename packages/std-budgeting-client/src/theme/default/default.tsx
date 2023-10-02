import type { FC, ReactNode } from "react";
import styles from "./default.module.scss";

export interface Props {
  children: ReactNode;
}

export const Theme: FC<Props> = ({ children }) => (
  <div className={styles.theme}>{children}</div>
);

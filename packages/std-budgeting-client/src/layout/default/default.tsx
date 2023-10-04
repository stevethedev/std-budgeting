import type { FC, ReactNode } from "react";
import { Stack } from "../../component/stack";
import styles from "./default.module.scss";

export interface Props {
  children: ReactNode;
}

export const Default: FC<Props> = ({ children }) => {
  return (
    <Stack className={styles.default} isVertical>
      <section className={styles.header}>Menu Go Here</section>
      <main className={styles.content}>{children}</main>
      <section className={styles.footer}>Footer Go Here</section>
    </Stack>
  );
};

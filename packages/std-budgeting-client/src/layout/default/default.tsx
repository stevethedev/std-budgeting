import type { FC, ReactNode } from "react";
import { Stack } from "../../component/stack";

export interface Props {
  children: ReactNode;
}

export const Default: FC<Props> = ({ children }) => {
  return (
    <Stack isVertical>
      <section>Menu Go Here</section>
      <main>{children}</main>
      <section>Footer Go Here</section>
    </Stack>
  );
};

import type { FC, ReactElement } from "react";
import { Stack } from "../../component/stack";
import { List, Variant } from "../../component/list";

export interface Props {
  children: Array<ReactElement>;
  isVertical?: boolean;
}

export const Navigation: FC<Props> = ({ children, isVertical }) => (
  <Stack as="nav">
    <List variant={Variant.Unstyled} isVertical={isVertical}>
      {children}
    </List>
  </Stack>
);

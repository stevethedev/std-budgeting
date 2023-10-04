import React, { type FC, type ReactNode } from "react";
import { Variant } from "./variant";
import { Props as StackProps, Stack } from "../stack";
import style from "./list.module.scss";
import { getClassName } from "../../utils/class-name";

export interface Props extends StackProps {
  children: Array<ReactNode>;
  variant?: Variant;
}

const getTagName = (variant: Variant): "ul" | "ol" => {
  if (variant === Variant.Ordered) {
    return "ol";
  }
  return "ul";
};

export const List: FC<Props> = ({
  children,
  variant = Variant.Unordered,
  isVertical = true,
  className,
  ...props
}) => {
  const as = getTagName(variant);
  const classes = getClassName([
    className,
    style.list,
    {
      [style.ordered]: variant === Variant.Ordered,
      [style.unordered]: variant === Variant.Unordered,
      [style.unstyled]: variant === Variant.Unstyled,
    },
  ]);
  return (
    <Stack as={as} className={classes} isVertical={isVertical} {...props}>
      {children.map((child, index) => {
        return (
          <li className={style.item} key={`child-${index}`}>
            {child}
          </li>
        );
      })}
    </Stack>
  );
};

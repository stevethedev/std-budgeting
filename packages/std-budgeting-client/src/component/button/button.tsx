import type { FC, MouseEvent, ReactNode } from "react";
import { Variant } from "./variants";
import styles from "./button.module.scss";
import { getClassName } from "../../utils/class-name";

export interface Props {
  title?: string;
  tabIndex?: number;
  isDisabled?: boolean;
  variant?: Variant;
  className?: string;
  children: ReactNode;
  isUnderline?: boolean;
  isSelected?: boolean;

  onPress?: (e: MouseEvent<HTMLButtonElement> | KeyboardEvent) => void;
}

export const Button: FC<Props> = ({
  isDisabled = false,
  variant = Variant.Default,
  className = "",
  onPress,
  children,
  isUnderline = false,
  isSelected = false,
  ...props
}) => {
  const classString = getClassName([
    styles.button,
    className,
    {
      [styles.underline]: isUnderline,
      [styles.selected]: isSelected,
    },
    {
      [styles.danger]: variant === Variant.Danger,
      [styles.ghost]: variant === Variant.Ghost,
      [styles.primary]: variant === Variant.Primary,
      [styles.success]: variant === Variant.Success,
      [styles.warning]: variant === Variant.Warning,
      [styles.info]: variant === Variant.Info,
    },
  ]);

  return (
    <button
      {...props}
      className={classString}
      disabled={isDisabled}
      onClick={onPress}
    >
      {children ?? props.title}
    </button>
  );
};

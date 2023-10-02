import type { FC, MouseEvent, ReactNode } from "react";
import { Variant } from "./variants";
import styles from "./button.module.scss";

export interface Props {
  label?: string;
  tabIndex?: number;
  isDisabled?: boolean;
  variant?: Variant;
  className?: string;
  children: ReactNode;

  onPress?: (e: MouseEvent<HTMLButtonElement> | KeyboardEvent) => void;
}

export const Button: FC<Props> = ({
  label = "",
  tabIndex = 0,
  isDisabled = false,
  variant = Variant.Default,
  className = "",
  onPress,
  children,
  ...props
}) => {
  const classes = {
    [styles.button]: true,
    [styles.danger]: variant === Variant.Danger,
    [styles.ghost]: variant === Variant.Ghost,
    [styles.primary]: variant === Variant.Primary,
    [styles.success]: variant === Variant.Success,
    [styles.warning]: variant === Variant.Warning,
    [styles.info]: variant === Variant.Info,
    [className]: Boolean(className),
  };

  const classString = Object.entries(classes)
    .filter(([, value]) => value)
    .map(([key]) => String(key))
    .join(" ");

  return (
    <button
      {...props}
      className={classString}
      disabled={isDisabled}
      onClick={onPress}
      tabIndex={tabIndex}
      title={label}
    >
      {children || label}
    </button>
  );
};

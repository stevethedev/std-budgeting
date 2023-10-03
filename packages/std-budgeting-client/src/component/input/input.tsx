import { type ChangeEvent, type FC, useCallback } from "react";
import styles from "./input.module.scss";
import { getClassName } from "../../utils/class-name";

export interface Props {
  id?: string;
  name: string;
  value: string;
  onInput: (value: string) => void;
  className?: string;
  title?: string;
}

export const Input: FC<Props> = ({ onInput, className, ...props }) => {
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onInput(event.target.value);
    },
    [onInput],
  );

  const classString = getClassName([styles.input, className]);

  return <input className={classString} onChange={onChange} {...props} />;
};

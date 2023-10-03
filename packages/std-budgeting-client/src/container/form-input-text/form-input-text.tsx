import { Label } from "../../component/label";
import { Input } from "../../component/input";
import type { FC } from "react";
import { useId } from "react";
import { Stack } from "../../component/stack/stack";

export interface Props {
  label: string;
  name: string;
  value: string;
  id?: string;
  onInput: (value: string) => void;
}

export const FormInputText: FC<Props> = ({
  label,
  name,
  value,
  onInput,
  id,
}) => {
  const generatedId = useId();
  const componentId = id ?? generatedId;
  return (
    <Stack isVertical>
      <Label htmlFor={componentId}>{label}</Label>
      <Input
        id={componentId}
        name={name}
        title={label}
        value={value}
        onInput={onInput}
      />
    </Stack>
  );
};

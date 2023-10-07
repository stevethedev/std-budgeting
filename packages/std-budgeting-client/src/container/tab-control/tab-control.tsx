import { ReactComponentElement, ReactNode } from "react";
import { Props as StackProps, Stack } from "../../component/stack";
import { Button, Variant } from "../../component/button";

export interface Props<ID extends string | number> {
  selectedId: ID;
  onSelectId: (id: ID) => void;
  children: Array<ReactComponentElement<typeof Tab<ID>>>;
  variant?: Variant;
  isVertical?: boolean;
}

export function TabControl<ID extends string | number>({
  children,
  selectedId,
  onSelectId,
  variant = Variant.Primary,
  isVertical = true,
  ...props
}: Props<ID>): ReactComponentElement<typeof Stack> {
  const meta = children.map(({ props: { label, id }, key }) => ({
    label,
    id,
    key,
  }));

  return (
    <Stack isVertical={isVertical} {...props}>
      <Stack isVertical={!isVertical}>
        {meta.map(({ label, id, key }) => (
          <Button
            key={key}
            onPress={() => onSelectId(id)}
            isUnderline
            isSelected={id === selectedId}
            variant={variant}
          >
            {label}
          </Button>
        ))}
      </Stack>
      {children.find(({ props: { id } }) => id === selectedId)}
    </Stack>
  );
}

export interface TabProps<ID extends string | number>
  extends Omit<StackProps, "id"> {
  id: ID;
  label: string;
  children: ReactNode;
  key: string;
}

export function Tab<ID extends string | number>({
  id,
  label,
  key,
  children,
  ...props
}: TabProps<ID>): ReactComponentElement<typeof Stack> {
  return (
    <Stack isVertical data-label={label} data-id={id} key={key} {...props}>
      {children}
    </Stack>
  );
}

import { ReactComponentElement, ReactNode } from "react";
import { Props as StackProps, Stack } from "../../component/stack";
import { Button, Variant } from "../../component/button";

export interface Props<ID extends string | number> {
  selectedId: ID;
  onSelectId: (id: ID) => void;
  children: ReadonlyArray<ReactComponentElement<typeof Tab<ID>>>;
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
}: Readonly<Props<ID>>): ReactComponentElement<typeof Stack> {
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
}

export function Tab<ID extends string | number>({
  id,
  label,
  children,
  ...props
}: Readonly<TabProps<ID>>): ReactComponentElement<typeof Stack> {
  return (
    <Stack isVertical data-label={label} data-id={id} {...props}>
      {children}
    </Stack>
  );
}

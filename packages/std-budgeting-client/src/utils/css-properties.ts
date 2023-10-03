import type { CSSProperties } from "react";

export interface CSSPropertiesWithVariables extends CSSProperties {
  [key: `--${string}`]: string | undefined;
}

export const cssProperties = (
  ...props: Array<CSSPropertiesWithVariables | undefined | null | false>
): CSSProperties =>
  props.reduce<CSSProperties>((acc, prop) => ({ ...acc, ...prop }), {});

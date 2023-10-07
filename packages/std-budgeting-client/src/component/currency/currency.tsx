import type { FC } from "react";
import styles from "./currency.module.scss";
import { getClassName } from "../../utils/class-name";

export interface Props {
  className?: string;
  options?: Intl.NumberFormatOptions;
  locales?: string | string[];
  children: number;
  isBlock?: boolean;
}

export const Currency: FC<Props> = ({
  className,
  children,
  locales = "en-US",
  options,
  isBlock = false,
  ...props
}) => {
  const { prefix, value, suffix } = formatCurrency(children, locales, {
    style: "currency",
    currency: "USD",

    ...options,
  });

  const classes = getClassName([
    className,
    styles.currency,
    {
      [styles.block]: isBlock,
    },
  ]);

  return (
    <span
      className={classes}
      data-prefix={prefix}
      data-suffix={suffix}
      {...props}
    >
      {children === 0 ? "-" : value}
    </span>
  );
};

interface FormattedCurrencyProps {
  prefix: string;
  value: string;
  suffix: string;
}

const formatCurrency = (
  value: number,
  locales: string | string[],
  options: Intl.NumberFormatOptions,
): FormattedCurrencyProps => {
  const isZero = value === 0;
  const isNegative = value < 0;

  const formatter = new Intl.NumberFormat(locales, options);
  const parts = formatter.formatToParts(Math.abs(value));

  const prefixParts: string[] = [];
  const suffixParts: string[] = [];
  const valueParts: string[] = [];

  for (const part of parts) {
    switch (part.type) {
      case "nan":
      case "infinity":
        throw new Error("Cannot format infinity or NaN as currency.");

      case "integer":
      case "group":
      case "decimal":
      case "fraction":
        valueParts.push(part.value);
        break;

      case "plusSign":
      case "minusSign":
        // discard
        break;

      case "literal":
      case "percent":
      case "percentSign":
      case "currency":
      case "code":
      case "symbol":
      case "name":
      case "compact":
      case "exponentInteger":
      case "exponentMinusSign":
      case "exponentSeparator":
      case "unit":
      case "unknown":
        if (valueParts.length === 0) {
          prefixParts.push(part.value);
          break;
        }
        suffixParts.push(part.value);
        break;
      default:
        throw new Error(`Unknown part type: ${part.type}`);
    }
  }

  prefixParts.push(isNegative ? " (" : "  ");
  suffixParts.unshift(isNegative ? ") " : "  ");

  return {
    prefix: prefixParts.join(""),
    value: isZero ? "-" : valueParts.join(""),
    suffix: suffixParts.join(""),
  };
};

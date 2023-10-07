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
  const formatter = new Intl.NumberFormat(locales, {
    style: "currency",
    currency: "USD",

    ...options,
  });

  const isNegative = children < 0;
  const text = formatter.format(Math.abs(children));

  const {
    prefix,
    value = "",
    suffix = "",
  } = text.match(/^(?<prefix>\D+)?\s*(?<value>[\d.,]+)\s*(?<suffix>\D+)?$/)
    ?.groups ?? {};

  const dataPrefix = isNegative ? `${prefix} (` : `${prefix} `;
  const dataSuffix = isNegative ? `) ${suffix}` : ` ${suffix}`;

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
      data-prefix={dataPrefix}
      data-suffix={dataSuffix}
      {...props}
    >
      {children === 0 ? "-" : value}
    </span>
  );
};

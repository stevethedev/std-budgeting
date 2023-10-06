export interface Logic {
  type: "and" | "or";
  filters: Filter[];
}

export type Operator =
  | "eq"
  | "neq"
  | "gt"
  | "gte"
  | "lt"
  | "lte"
  | "contains"
  | "not_contains";

export interface Comparison {
  field: string;
  operator: Operator;
  value: string;
}

export type Filter = Logic | Comparison;

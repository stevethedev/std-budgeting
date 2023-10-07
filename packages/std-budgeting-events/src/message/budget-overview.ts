import type { Filter } from "../logic";

export interface RequestPayload {
  select: Array<{
    name: string;
    filter: Filter;
  }>;
}

export interface Spread {
  name: string;
  budgeted: number;
  actual: number;
}

export interface ResponsePayload {
  values: Array<Spread>;
}

declare module "../" {
  export interface EventRegistry {
    "budget-overview:request": RequestPayload;
    "budget-overview:response": ResponsePayload;
  }
}

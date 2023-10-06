import type { Filter } from "../logic";

export interface RequestPayload extends Record<string, Filter> {}

export interface Spread {
  budgeted: number;
  actual: number;
}

export interface ResponsePayload extends Record<string, Spread> {
  [key: string]: Spread;
}

declare module "../" {
  export interface EventRegistry {
    "budget-overview:request": RequestPayload;
    "budget-overview:response": ResponsePayload;
  }
}

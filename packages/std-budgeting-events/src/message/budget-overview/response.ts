export const EVENT_NAME = "budget-overview:repsonse";

export interface Spread {
  budgeted: number;
  actual: number;
}

export interface Payload extends Record<string, Spread> {
  [key: string]: Spread;
}

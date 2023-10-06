import { Filter } from "../../logic";

export const EVENT_NAME = "budget-overview:request";

export interface Payload extends Record<string, Filter> {}

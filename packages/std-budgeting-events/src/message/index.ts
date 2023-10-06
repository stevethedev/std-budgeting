export * from "./budget-overview";

export interface MessageDefinition<Name, Payload> {
  name: Name;
  payload: Payload;
}

export interface MessagePair<ReqName, ReqPayload, ResName, ResPayload> {
  request: MessageDefinition<ReqName, ReqPayload>;
  response: MessageDefinition<ResName, ResPayload>;
}

export interface EventRegistry {
  __test: unknown;
}

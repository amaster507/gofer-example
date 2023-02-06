import { Msg } from "ts-hl7";

export const onlyAllowEvents = (event: string[]) => (msg: Msg) =>
  event.includes(msg.get("MSH-9.1") as string);

import { Msg } from "ts-hl7";

export const addPrefix = (path: string, prefix: string) => (msg: Msg) =>
  msg.map<string>(path, <T>(location: T) => (prefix + location) as T);

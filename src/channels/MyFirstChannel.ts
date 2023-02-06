import { ChannelConfig } from "gofer-engine/dist/types/types";
import { onlyAllowEvents } from "../filters/onlyAllowEvents";
import { addPrefix } from "../transformers/addPrefix";

const channel: ChannelConfig = {
  name: "My First Channel",
  source: {
    tcp: {
      host: "localhost",
      port: 5500,
    },
  },
  ingestion: [
    onlyAllowEvents(["ADT", "ORM", "ORU"]),
    {
      ack: {
        msg: (ack, _msg, filtered) => {
          if (filtered) ack.set("MSA-1", "AR");
          return ack;
        },
      },
    },
    addPrefix("PV1-3[1].1", "HOSP."),
    { file: {} },
  ],
  routes: [],
  verbose: true,
};

export default channel;

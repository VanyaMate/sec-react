import { useSyncExternalStore as r } from "react";
const n = function(e) {
  return r(e.subscribe, e.get);
};
export {
  n as useStore
};

import { useSyncExternalStore } from 'react';
export const useStore = function (store) {
    return useSyncExternalStore(store.subscribe, store.get);
};

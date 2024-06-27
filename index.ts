import { Store } from '@vanyamate/sec';
import { useSyncExternalStore } from 'react';


export const useStore = function <T> (store: Store<T>) {
    return useSyncExternalStore(store.subscribe, store.get);
};
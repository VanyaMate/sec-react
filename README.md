# SEC React

Support for sec

```
npm i @vanyamate/sec-react
```

```typescript
// /model/todo/todo.model.ts
import { store } from '@vanyamate/sec';


export const todoLoading = store(false);
```

```typescript jsx
import { useStore } from '@vanyamate/sec-react';

// any react component
const loading = useStore(todoLoading);

if (loading) {
    return <Loader/>;
}

return (
    <Component/>
);
```

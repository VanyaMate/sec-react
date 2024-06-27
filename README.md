# SEC React

Support for sec

```typescript
// /model/todo/todo.model.ts
import { store } from '@vanyamate/sec';


export const todoLoading = store(false);
```

```typescript jsx
// any react component
const loading = useStore(todoLoading);

if (loading) {
    return <Loader/>;
}

return (
    <Component/>
);
```
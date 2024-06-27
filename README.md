# SEC React

Support for sec

```typescript
// /model/todo/todo.model.ts
import { useStore } from './index';


export const todoLoading = useStore(false);
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
## useKeyboardEvent

React hook to register keyboard events.

This hook is useful to hide away event addition and removal, and to add semantic context to your event registering.

### Usage

```js
useKeyboardEvent(
    key : String | String[],
    callback: Function,
    options?: {
        event: String           // One of `keyup`, `keydown` or `keypress`.
    })
```

#### Example
```js
import { useState } from 'react';

const [count, setCount] = useState(0);

const handleOnIncreaseCount = () => setCount(count + 1);

useKeyboardEvent('ArrowUp', handleOnIncreaseCount);
```
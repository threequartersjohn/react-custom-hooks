## useTraverseArray

React hook to traverse an array, which returns an active item and functions to move to the next or previous item in the array, or set a specific item.

This hook is useful for situations where you want only one specific element of an array at a time, and can discard the others meanwhile.

### Usage

```js
    useTraverseArray(
        array: Any[], 
        initialIndex?: Number
    )
```

This method will return the following array:
```js
    [
        activeArrayItem,            // Currently active array item.
        activeIndex,                // Currently active index.
        {
            setNextActive,          // Set next item in array as active.
            setPreviousActive,      // Set previous item in array as active.
            setActiveIndex,         // Set a specific index as active.
        }
    ]
```

#### Example
```js
const labels = [
    'foo',
    'bar',
];

const [
        activeLabel, 
        activeLabelIndex, 
        { setNextActive, setPreviousActive }
    ] = useTraverseArray(labels, 1);

const handleOnSetNextLabel = () => setNextActive();
const handleOnSetPreviousLabel = () => setPreviousActive();

return (
    <div>
        <button onClick={ handleOnSetNextLabel }>Set next label</button>
        <button onClick={ handleOnSetPreviousLabel }>Set previous label</button>
        <p>{ activeLabel }</p>
        <ul>
            { labels.map((_, index) => {
                return (
                    <li styles={{ color: index === activeLabelIndex ? 'red' : 'blue' }}>{ index }</li>
                )
            }) }
        </ul>
    </div>
)
```
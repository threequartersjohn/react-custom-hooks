## useTraverseArray

React hook to traverse an array, which returns an active item and functions to move to the next or previous item in the array.

### Usage

```js
    useTraverseArray(
        array: Any[], 
        initialIndex?: Number
    )
```

This method will return an array with the following items, in this order:
- `activeItem`: The item in the array in the current index;
- `activeItemIndex`: The currenctly active index;
-  `{ setNextActive, setPreviousActive }`: Functions to move the index further or backwards by one, respectively.


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
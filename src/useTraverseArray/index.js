import { useState } from 'react';

export const useTraverseArray = (array, initialIndex = 0) => {
    if (!Array.isArray(array)) {
        throw Error('Argument is not an array, please use an array.');
    }

    const [activeIndex, setActiveIndex] = useState(initialIndex);

    const setNextActive = () => setActiveIndex(Math.min(Math.max(activeIndex + 1, 0), array.length - 1))
    const setPreviousActive = () => setActiveIndex(Math.min(Math.max(activeIndex - 1, 0), array.length - 1))

    return [array[activeIndex], activeIndex, { setNextActive, setPreviousActive }];
}
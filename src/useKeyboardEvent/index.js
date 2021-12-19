import { useEffect } from 'react';

const keyboardEvents = [
    'keyup',
    'keydown',
    'keypress',
]

export const useKeyboardEvent = (keys, callback, { event = 'keydown' } = {}) => {
    if (!keyboardEvents.includes(event)) {
        throw Error('Non keyboard related event requested. Please use one of `keyup`, `keydown` or `keypress`.');
    }

    useEffect(() => {
        const keysArr = Array.isArray(keys) ? keys : [keys];

        const eventCallback = (event) => keysArr.includes(event.key) && callback()
                
        callback && window.addEventListener(event, eventCallback);

        return () => callback && window.removeEventListener(event, eventCallback)
    })
}
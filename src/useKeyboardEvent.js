import { useEffect } from 'react';

export const useKeyboardEvent = (keys, callback) => {
    useEffect(() => {
        const keysArr = Array.isArray(keys) ? keys : [keys];

        const eventCallback = (event) => keysArr.includes(event.key) && callback()
                
        callback && window.addEventListener('keydown', eventCallback);

        return () => callback && window.removeEventListener('keydown', eventCallback)
    })
}
import { useRef, useEffect } from 'react'
import classnames from 'classnames';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
    return twMerge(classnames(...inputs));
}

export function DocumentTitle(title) {
    useEffect(() => {
        document.title = title;
    }, [title]);
}
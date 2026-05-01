'use client';

import { useState, useEffect } from 'react';

type CursorPosition = {
    x: number,
    y: number
}

export function useCursorPosition(): CursorPosition {
    const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0});

    useEffect(() => {
        const handleMove = (e: MouseEvent) => {
            setPosition({
                x: e.x,
                y: e.y
            });
        }
        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);

    return position;
}

function cursorCssVars() {
    useEffect(() => {
        function handleMove(e: MouseEvent) {
            const root = document.documentElement;

            root.style.setProperty('--cursorX', `${e.clientX}px`);
            root.style.setProperty('--cursorY', `${e.clientY}px`);
        }

        window.addEventListener('mousemove', handleMove);
        return () => window.removeEventListener('mousemove', handleMove);
    }, []);
    return null;
}

export default cursorCssVars;
'use client';

import { useState, useEffect } from 'react';

function headerHeightVars(headerRef: React.RefObject<HTMLElement>): void {
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
            function updateHeaderHeight() {
                setHeaderHeight(headerRef.current?.offsetHeight || 0);
            }
        
            updateHeaderHeight();
            document.documentElement.style.setProperty('--headerHeight', `${headerHeight}px`);
    
            const observer = new ResizeObserver(updateHeaderHeight);
            return () => observer.disconnect();
    }, []);
}

export default headerHeightVars;
'use client';

import { useState, useEffect } from 'react'

type TClientOnlyProps = {
    children: React.ReactNode
}

const ClientOnly: React.FC<TClientOnlyProps> = ({ children }) => {
    const [hasMounted, setHasMounted] = useState<Boolean>(false);
    
    useEffect(() => {
        setHasMounted(true);
    }, []);

    if(!hasMounted) {
        return null;
    };

    return (
        <>
            {children}
        </>
    )
}

export default ClientOnly

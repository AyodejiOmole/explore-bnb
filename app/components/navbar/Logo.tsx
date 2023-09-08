"use client";
import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation"

const Logo = () => {
    const router = useRouter();

    return (
        <>
            {/* <Image 
                alt="Logo" 
                className="hidden md:block cursor-pointer" 
                height="100" 
                width="100"
                src=""
            /> */}
            <div onClick={() => router.push("/")} className="text-rose-500 text-base font-bold">Explorebnb</div>
        </>
    )
}

export default Logo;

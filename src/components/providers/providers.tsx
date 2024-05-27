"use client";

import React from 'react';
import { dark } from "@clerk/themes";
import { ClerkProvider } from '@clerk/nextjs';

interface Props {
    children: React.ReactNode;
}

const Providers = ({ children }: Props) => {
    return (
        <ClerkProvider appearance={{ baseTheme: dark }}>
            {children}
        </ClerkProvider>
    )
};

export default Providers

import { ClerkProvider } from '@clerk/nextjs'
import React from 'react'
import { dark } from '@clerk/themes'

interface Props {
    children: React.ReactNode
}

const MainLayout = ({ children }: Props) => {
    return (
        <ClerkProvider appearance={{ baseTheme: dark }}>
            {children}
        </ClerkProvider>
    )
};

export default MainLayout
import { cn } from "@/lib/utils";
import React from 'react'

interface Props {
    className?: string;
    children: React.ReactNode;
}

const Wrapper = ({ children, className }: Props) => {
    return (
        <div className={cn(
            "h-full mx-auto w-full max-w-screen-xl px-4 md:px-20",
            className
        )}>
            {children}
        </div>
    )
};

export default Wrapper

"use client";

import { useRef, useState, ReactNode, MouseEvent } from "react";

interface MagneticButtonProps {
    children: ReactNode;
    className?: string;
    href?: string;
    onClick?: () => void;
    strength?: number; // How strongly the button follows the cursor (default: 0.3)
}

export default function MagneticButton({
    children,
    className = "",
    href,
    onClick,
    strength = 0.3,
}: MagneticButtonProps) {
    const buttonRef = useRef<HTMLElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
        if (!buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - centerX) * strength;
        const deltaY = (e.clientY - centerY) * strength;

        setPosition({ x: deltaX, y: deltaY });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const style = {
        transform: `translate(${position.x}px, ${position.y}px)`,
    };

    const commonProps = {
        ref: buttonRef as React.RefObject<HTMLAnchorElement> & React.RefObject<HTMLButtonElement>,
        className: `btn-magnetic ${className}`,
        style,
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
    };

    if (href) {
        return (
            <a href={href} {...commonProps}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} {...commonProps}>
            {children}
        </button>
    );
}

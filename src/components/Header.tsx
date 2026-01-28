"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/95 backdrop-blur-sm border-b border-white/5">
            <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3 group">
                    <Image
                        src="/logo.jpg"
                        alt="Kraken Air & Electrical"
                        width={48}
                        height={48}
                        className="rounded-full border-2 border-[var(--color-action)] group-hover:shadow-[var(--glow-gold)] transition-shadow"
                        priority
                    />
                    <div className="hidden sm:block">
                        <span className="text-xl font-bold text-[var(--foreground)] font-[var(--font-montserrat)]">
                            KRAKEN
                        </span>
                        <span className="block text-xs text-[var(--color-neutral-muted)] uppercase tracking-wider">
                            Air & Electrical
                        </span>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <Link
                        href="/services/air-conditioning"
                        className="nav-link text-[var(--foreground)] hover:text-[var(--color-secondary)] transition-colors font-medium"
                    >
                        Air Conditioning
                    </Link>
                    <Link
                        href="/services/electrical"
                        className="nav-link text-[var(--foreground)] hover:text-[var(--color-action)] transition-colors font-medium"
                    >
                        Electrical
                    </Link>
                    <Link
                        href="/about"
                        className="nav-link text-[var(--foreground)] hover:text-[var(--foreground)] transition-colors font-medium"
                    >
                        About
                    </Link>
                    <Link
                        href="/contact"
                        className="nav-link text-[var(--foreground)] hover:text-[var(--foreground)] transition-colors font-medium"
                    >
                        Contact
                    </Link>
                </div>

                {/* CTA Button - Always visible */}
                <div className="flex items-center gap-4">
                    <a
                        href="tel:+61400000000"
                        className="btn-primary text-sm px-4 py-2 rounded-lg hidden sm:flex"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                            />
                        </svg>
                        Call Now
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-[var(--foreground)]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            {isMenuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-[var(--background-elevated)] border-t border-white/5">
                    <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
                        <Link
                            href="/services/air-conditioning"
                            className="text-[var(--foreground)] hover:text-[var(--color-secondary)] transition-colors font-medium py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Air Conditioning
                        </Link>
                        <Link
                            href="/services/electrical"
                            className="text-[var(--foreground)] hover:text-[var(--color-action)] transition-colors font-medium py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Electrical
                        </Link>
                        <Link
                            href="/about"
                            className="text-[var(--foreground)] hover:text-[var(--foreground)] transition-colors font-medium py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </Link>
                        <Link
                            href="/contact"
                            className="text-[var(--foreground)] hover:text-[var(--foreground)] transition-colors font-medium py-2"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </Link>
                        <a
                            href="tel:+61400000000"
                            className="btn-primary text-center py-3 rounded-lg mt-2"
                        >
                            Call Now
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}

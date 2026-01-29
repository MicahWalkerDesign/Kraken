import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    // Use a fixed year during build time to avoid hydration mismatch
    const currentYear = 2026;

    return (
        <footer className="bg-gradient-dark relative metallic-sheen">
            <div className="container mx-auto px-4 py-12">
                {/* Main Footer Grid - 2 cols on mobile for Services/Areas, 4 on desktop */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
                    {/* Brand Column - spans full width on mobile */}
                    <div className="col-span-2 lg:col-span-1 text-center lg:text-left">
                        <div className="flex items-center gap-3 mb-4 justify-center lg:justify-start">
                            <Image
                                src="/logo.jpg"
                                alt="Kraken Air & Electrical"
                                width={48}
                                height={48}
                                className="rounded-full border-2 border-[var(--color-action)]"
                            />
                            <div>
                                <span className="text-xl font-bold text-[var(--foreground)]">
                                    KRAKEN
                                </span>
                                <span className="block text-xs text-[var(--color-neutral-muted)] uppercase tracking-wider">
                                    Air & Electrical
                                </span>
                            </div>
                        </div>
                        <p className="text-[var(--color-neutral-muted)] text-sm">
                            Professional air conditioning and electrical services in Perth&apos;s
                            Northern Suburbs.
                        </p>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="text-[var(--foreground)] font-semibold mb-4">
                            Services
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/services/air-conditioning"
                                    className="text-[var(--color-neutral-muted)] hover:text-[var(--color-secondary)] transition-colors text-sm"
                                >
                                    Air Conditioning
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/air-conditioning#installation"
                                    className="text-[var(--color-neutral-muted)] hover:text-[var(--color-secondary)] transition-colors text-sm"
                                >
                                    Split System Installation
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/electrical"
                                    className="text-[var(--color-neutral-muted)] hover:text-[var(--color-action)] transition-colors text-sm"
                                >
                                    Electrical Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/services/electrical#repairs"
                                    className="text-[var(--color-neutral-muted)] hover:text-[var(--color-action)] transition-colors text-sm"
                                >
                                    Electrical Repairs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Service Areas Column */}
                    <div>
                        <h4 className="text-[var(--foreground)] font-semibold mb-4">
                            Service Areas
                        </h4>
                        <ul className="space-y-2 text-[var(--color-neutral-muted)] text-sm">
                            <li>Joondalup</li>
                            <li>Wanneroo</li>
                            <li>Mindarie</li>
                            <li>Clarkson</li>
                            <li>Butler</li>
                            <li>Alkimos</li>
                        </ul>
                    </div>

                    {/* Contact Column - spans full width on mobile */}
                    <div className="col-span-2 lg:col-span-1 text-center lg:text-left">
                        <h4 className="text-[var(--foreground)] font-semibold mb-4">
                            Contact
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="tel:+61400000000"
                                    className="inline-flex items-center gap-2 text-[var(--color-action)] hover:text-[var(--color-action-hover)] transition-colors font-semibold justify-center lg:justify-start"
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
                                    0400 000 000
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:info@krakenairelectrical.com.au"
                                    className="inline-flex items-center gap-2 text-[var(--color-neutral-muted)] hover:text-[var(--foreground)] transition-colors text-sm justify-center lg:justify-start"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 flex-shrink-0"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    info@krakenairelectrical.com.au
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 pt-8">
                    {/* Bank Details */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-6 p-4 bg-white/5 rounded-lg">
                        <span className="text-xs text-[var(--color-neutral-muted)] uppercase tracking-wider">
                            Bank Transfer
                        </span>
                        <div className="flex flex-wrap justify-center gap-4 text-sm">
                            <span className="text-[var(--color-neutral-muted)]">
                                <strong className="text-[var(--foreground)]">BSB:</strong> 000-000
                            </span>
                            <span className="text-[var(--color-neutral-muted)]">
                                <strong className="text-[var(--foreground)]">ACC:</strong> 0000 0000
                            </span>
                            <span className="text-[var(--color-neutral-muted)]">
                                <strong className="text-[var(--foreground)]">Name:</strong> Kraken Air & Electrical
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        {/* Copyright */}
                        <p className="text-[var(--color-neutral-muted)] text-sm">
                            © {currentYear} Kraken Air & Electrical. All rights reserved.
                        </p>

                        {/* License Verification */}
                        <div className="flex flex-wrap justify-center gap-4 text-xs text-[var(--color-neutral-muted)]">
                            <span className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-[var(--color-action)]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                </svg>
                                ARC License: AU00000
                            </span>
                            <span className="flex items-center gap-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-4 w-4 text-[var(--color-action)]"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M13 10V3L4 14h7v7l9-11h-7z"
                                    />
                                </svg>
                                Electrical License: EC00000
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

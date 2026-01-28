import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "About | Kraken Air & Electrical Perth",
    description:
        "Meet Gerrad, your local licensed HVAC and electrical technician serving Perth's Northern Suburbs. Professional, reliable service with a focus on quality.",
};

export default function AboutPage() {
    return (
        <>
            <Header />
            <main id="main-content">
                {/* Hero Section */}
                <section className="pt-32 pb-20 bg-gradient-radial">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h1 className="mb-6">About Kraken</h1>
                            <p className="text-lg md:text-xl text-[var(--color-neutral-muted)] max-w-2xl mx-auto">
                                Local expertise, professional service, and a commitment to
                                getting the job done right.
                            </p>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="section bg-[var(--background)]">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                            {/* Image */}
                            <div className="relative">
                                <div className="aspect-square rounded-2xl bg-[var(--background-card)] overflow-hidden border border-white/5">
                                    <Image
                                        src="/logo.jpg"
                                        alt="Kraken Air & Electrical"
                                        width={500}
                                        height={500}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Badge */}
                                <div className="absolute -bottom-4 -right-4 bg-[var(--color-action)] text-[var(--background)] px-6 py-3 rounded-xl font-semibold shadow-lg">
                                    Licensed & Insured
                                </div>
                            </div>

                            {/* Content */}
                            <div>
                                <h2 className="mb-6">Your Local HVAC & Electrical Expert</h2>
                                <div className="space-y-4 text-[var(--color-neutral-muted)]">
                                    <p>
                                        Kraken Air & Electrical was founded to provide Perth&apos;s
                                        Northern Suburbs with reliable, professional air conditioning
                                        and electrical services. We believe in doing the job right
                                        the first time, with honest pricing and no shortcuts.
                                    </p>
                                    <p>
                                        With both ARC and Electrical licenses, we offer a unique
                                        combination of skills that means you only need one tradesman
                                        for jobs that typically require two – like installing a split
                                        system that needs new electrical circuits.
                                    </p>
                                    <p>
                                        Based in the Northern Suburbs, we understand the local area
                                        and the specific challenges Perth&apos;s climate presents. From
                                        scorching summer days that push your AC to its limits, to
                                        electrical systems that need to handle modern appliances and
                                        EV chargers – we&apos;ve got you covered.
                                    </p>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[var(--color-action)]/20 flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-[var(--color-action)]"
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
                                        </div>
                                        <span className="font-medium">ARC Licensed</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[var(--color-action)]/20 flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-[var(--color-action)]"
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
                                        </div>
                                        <span className="font-medium">Electrical License</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[var(--color-action)]/20 flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-[var(--color-action)]"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                />
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                />
                                            </svg>
                                        </div>
                                        <span className="font-medium">Local to Perth</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[var(--color-action)]/20 flex items-center justify-center">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 text-[var(--color-action)]"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                />
                                            </svg>
                                        </div>
                                        <span className="font-medium">Same Day Service</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="section bg-[var(--background-elevated)]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-center mb-12">Our Values</h2>
                        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8 text-[var(--color-action)]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Quality</h3>
                                <p className="text-[var(--color-neutral-muted)] text-sm">
                                    Every job completed to the highest standard. No shortcuts.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8 text-[var(--color-action)]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Honesty</h3>
                                <p className="text-[var(--color-neutral-muted)] text-sm">
                                    Upfront pricing with no hidden fees. Honest advice.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 rounded-full bg-[var(--color-primary)]/20 flex items-center justify-center mx-auto mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-8 w-8 text-[var(--color-action)]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Reliability</h3>
                                <p className="text-[var(--color-neutral-muted)] text-sm">
                                    We show up when we say we will. Every time.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section bg-[var(--color-primary)] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div
                            className="absolute inset-0"
                            style={{
                                backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-action) 1px, transparent 0)`,
                                backgroundSize: "30px 30px",
                            }}
                        />
                    </div>

                    <div className="container mx-auto text-center relative z-10">
                        <h2 className="mb-4 text-white">Ready to Work Together?</h2>
                        <p className="text-white/80 max-w-xl mx-auto mb-8">
                            Get in touch for a quote or to discuss your project. We&apos;re
                            here to help with all your air conditioning and electrical needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+61400000000"
                                className="btn-primary px-8 py-4 text-lg rounded-xl"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
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
                            <Link
                                href="/contact"
                                className="px-8 py-4 text-lg rounded-xl bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-colors font-semibold"
                            >
                                Request a Quote
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

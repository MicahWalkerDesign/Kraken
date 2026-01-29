import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Electrical Services | Kraken Air & Electrical Perth",
    description:
        "Licensed electrician serving Perth's Northern Suburbs. Switchboard upgrades, safety inspections, lighting installation, and emergency electrical repairs.",
    keywords: [
        "Electrician Joondalup",
        "Electrician Wanneroo",
        "Switchboard upgrade Perth",
        "Electrical repairs Northern Suburbs",
        "Safety inspection Perth",
        "Licensed electrician Perth",
    ],
};

export default function ElectricalPage() {
    return (
        <>
            <Header />
            <main id="main-content">
                {/* Hero Section */}
                <section className="pt-32 pb-20 bg-gradient-radial relative overflow-hidden">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl">
                            {/* Breadcrumb */}
                            <nav className="mb-6 text-sm">
                                <Link
                                    href="/"
                                    className="text-[var(--color-neutral-muted)] hover:text-[var(--foreground)]"
                                >
                                    Home
                                </Link>
                                <span className="mx-2 text-[var(--color-neutral-muted)]">/</span>
                                <span className="text-[var(--color-action)]">
                                    Electrical Services
                                </span>
                            </nav>

                            <h1 className="mb-6">
                                <span className="text-[var(--color-action)]">Electrical</span>{" "}
                                Services
                            </h1>
                            <p className="text-lg md:text-xl text-[var(--color-neutral-muted)] mb-8 max-w-2xl">
                                Safe, reliable electrical work for your home or business. From
                                switchboard upgrades to lighting installations, we deliver
                                quality workmanship with a focus on safety.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
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
                                    Call for Electrical Service
                                </a>
                                <Link
                                    href="/contact"
                                    className="btn-ghost px-8 py-4 text-lg rounded-xl"
                                >
                                    Request a Quote
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services Grid */}
                <section className="section bg-[var(--background)]" id="services">
                    <div className="container mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="mb-4">Our Electrical Services</h2>
                            <p className="text-[var(--color-neutral-muted)] max-w-2xl mx-auto">
                                Comprehensive electrical solutions for homes and light commercial
                                properties in Perth&apos;s Northern Suburbs.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {/* Switchboard Upgrades */}
                            <div className="card card-electrical">
                                <div className="w-14 h-14 rounded-xl bg-[var(--color-action)]/10 flex items-center justify-center mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7 text-[var(--color-action)]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[var(--color-action)]">
                                    Switchboard Upgrades
                                </h3>
                                <p className="text-[var(--color-neutral-muted)] text-sm">
                                    Upgrade from old ceramic fuses to modern safety switches.
                                    Increase capacity for new appliances and EV chargers.
                                </p>
                            </div>

                            {/* Safety Inspections */}
                            <div className="card card-electrical">
                                <div className="w-14 h-14 rounded-xl bg-[var(--color-action)]/10 flex items-center justify-center mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7 text-[var(--color-action)]"
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
                                <h3 className="text-xl font-semibold mb-2 text-[var(--color-action)]">
                                    Safety Inspections
                                </h3>
                                <p className="text-[var(--color-neutral-muted)] text-sm">
                                    Pre-purchase electrical inspections and compliance
                                    certificates. Identify hazards before they become problems.
                                </p>
                            </div>

                            {/* Lighting */}
                            <div className="card card-electrical">
                                <div className="w-14 h-14 rounded-xl bg-[var(--color-action)]/10 flex items-center justify-center mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7 text-[var(--color-action)]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[var(--color-action)]">
                                    Lighting Installation
                                </h3>
                                <p className="text-[var(--color-neutral-muted)] text-sm">
                                    LED upgrades, downlights, outdoor lighting, and smart home
                                    integration. Transform your space with modern lighting.
                                </p>
                            </div>

                            {/* Fault Finding */}
                            <div className="card card-electrical" id="repairs">
                                <div className="w-14 h-14 rounded-xl bg-[var(--color-action)]/10 flex items-center justify-center mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7 text-[var(--color-action)]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[var(--color-action)]">
                                    Fault Finding & Repairs
                                </h3>
                                <p className="text-[var(--color-neutral-muted)] text-sm">
                                    Tripping breakers? Flickering lights? Dead outlets? Fast
                                    diagnosis and repair of electrical faults.
                                </p>
                            </div>

                            {/* Powerpoints & Circuits */}
                            <div className="card card-electrical">
                                <div className="w-14 h-14 rounded-xl bg-[var(--color-action)]/10 flex items-center justify-center mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7 text-[var(--color-action)]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M13 10V3L4 14h7v7l9-11h-7z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[var(--color-action)]">
                                    Powerpoints & Circuits
                                </h3>
                                <p className="text-[var(--color-neutral-muted)] text-sm">
                                    Additional powerpoints, dedicated circuits for high-draw
                                    appliances, USB outlets, and outdoor power.
                                </p>
                            </div>

                            {/* Ceiling Fans */}
                            <div className="card card-electrical">
                                <div className="w-14 h-14 rounded-xl bg-[var(--color-action)]/10 flex items-center justify-center mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7 text-[var(--color-action)]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[var(--color-action)]">
                                    Ceiling Fan Installation
                                </h3>
                                <p className="text-[var(--color-neutral-muted)] text-sm">
                                    Beat the heat with ceiling fans. Installation of new fans or
                                    replacement of existing units.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Section */}
                <section className="section bg-[var(--background-elevated)]">
                    <div className="container mx-auto">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="mb-8 text-center">Why Choose Kraken Electrical?</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[var(--color-action)]/20 flex items-center justify-center shrink-0">
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
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Fully Licensed</h4>
                                        <p className="text-sm text-[var(--color-neutral-muted)]">
                                            Licensed electrical contractor with all work compliant to
                                            Australian standards.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[var(--color-action)]/20 flex items-center justify-center shrink-0">
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
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Safety First</h4>
                                        <p className="text-sm text-[var(--color-neutral-muted)]">
                                            Every job completed with safety as the priority. Proper
                                            testing and certification.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[var(--color-action)]/20 flex items-center justify-center shrink-0">
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
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Clean & Tidy</h4>
                                        <p className="text-sm text-[var(--color-neutral-muted)]">
                                            We treat your home with respect. Clean worksite, protective
                                            covers, and tidy finish.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[var(--color-action)]/20 flex items-center justify-center shrink-0">
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
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-1">Guaranteed Work</h4>
                                        <p className="text-sm text-[var(--color-neutral-muted)]">
                                            All workmanship guaranteed. We stand behind the quality of
                                            our electrical work.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="section bg-gradient-dark relative overflow-hidden" id="booking">
                    <div className="container mx-auto text-center relative z-10">
                        <h2 className="mb-4 text-[var(--foreground)]">Need an Electrician?</h2>
                        <p className="text-[var(--color-neutral-muted)] max-w-xl mx-auto mb-8">
                            From simple repairs to complete rewires, we&apos;re here to help.
                            Call now for professional electrical service in Perth&apos;s
                            Northern Suburbs.
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
                                className="btn-ghost px-8 py-4 text-lg rounded-xl"
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

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Air Conditioning Services | Kraken Air & Electrical Perth",
    description:
        "Professional air conditioning installation, repairs and maintenance in Perth's Northern Suburbs. ARC licensed technician specializing in split systems, ducted AC, and refrigerant services.",
    keywords: [
        "Air conditioning Joondalup",
        "Split system installation Perth",
        "AC repair Wanneroo",
        "Ducted air conditioning Perth",
        "Refrigerant regas Perth",
        "HVAC Northern Suburbs",
    ],
};

export default function AirConditioningPage() {
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
                                <span className="text-[var(--color-secondary)]">
                                    Air Conditioning
                                </span>
                            </nav>

                            <h1 className="mb-6">
                                <span className="text-[var(--color-secondary)]">
                                    Air Conditioning
                                </span>{" "}
                                Services
                            </h1>
                            <p className="text-lg md:text-xl text-[var(--color-neutral-muted)] mb-8 max-w-2xl">
                                Beat the Perth heat with expert HVAC services. From split system
                                installations to emergency repairs, we keep your home cool and
                                comfortable year-round.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href="tel:+61400000000"
                                    className="btn-secondary px-8 py-4 text-lg rounded-xl"
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
                                    Call for AC Service
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
                            <h2 className="mb-4">Our AC Services</h2>
                            <p className="text-[var(--color-neutral-muted)] max-w-2xl mx-auto">
                                Comprehensive air conditioning solutions for residential and light
                                commercial properties.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                            {/* Split System Installation */}
                            <div className="card card-hvac" id="installation">
                                <div className="w-14 h-14 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7 text-[var(--color-secondary)]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[var(--color-secondary)]">
                                    Split System Installation
                                </h3>
                                <p className="text-[var(--color-neutral-muted)] text-sm">
                                    Professional installation of wall-mounted and multi-split
                                    systems. All major brands including Daikin, Mitsubishi, and
                                    Fujitsu.
                                </p>
                            </div>

                            {/* Ducted AC */}
                            <div className="card card-hvac">
                                <div className="w-14 h-14 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7 text-[var(--color-secondary)]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[var(--color-secondary)]">
                                    Ducted Air Conditioning
                                </h3>
                                <p className="text-[var(--color-neutral-muted)] text-sm">
                                    Whole-home climate control with zoned ducted systems.
                                    Installation, repairs, and upgrades for existing systems.
                                </p>
                            </div>

                            {/* AC Repairs */}
                            <div className="card card-hvac">
                                <div className="w-14 h-14 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7 text-[var(--color-secondary)]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[var(--color-secondary)]">
                                    AC Repairs
                                </h3>
                                <p className="text-[var(--color-neutral-muted)] text-sm">
                                    Fast diagnosis and repair of all AC issues. Not cooling? Strange
                                    noises? Water leaks? We&apos;ll get you comfortable again.
                                </p>
                            </div>

                            {/* Refrigerant Services */}
                            <div className="card card-hvac">
                                <div className="w-14 h-14 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7 text-[var(--color-secondary)]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[var(--color-secondary)]">
                                    Refrigerant Services
                                </h3>
                                <p className="text-[var(--color-neutral-muted)] text-sm">
                                    ARC licensed for all refrigerant work. Leak detection, regas,
                                    and environmentally responsible refrigerant recovery.
                                </p>
                            </div>

                            {/* Maintenance */}
                            <div className="card card-hvac">
                                <div className="w-14 h-14 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7 text-[var(--color-secondary)]"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-[var(--color-secondary)]">
                                    Preventative Maintenance
                                </h3>
                                <p className="text-[var(--color-neutral-muted)] text-sm">
                                    Regular servicing to keep your system running efficiently.
                                    Filter cleaning, coil inspection, and performance testing.
                                </p>
                            </div>

                            {/* Emergency Service */}
                            <div className="card card-hvac">
                                <div className="w-14 h-14 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center mb-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-7 w-7 text-[var(--color-secondary)]"
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
                                <h3 className="text-xl font-semibold mb-2 text-[var(--color-secondary)]">
                                    Emergency AC Service
                                </h3>
                                <p className="text-[var(--color-neutral-muted)] text-sm">
                                    AC emergency in the Perth heat? We offer same-day callouts to
                                    get your cooling back online fast.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Why Choose Section */}
                <section className="section bg-[var(--background-elevated)]">
                    <div className="container mx-auto">
                        <div className="max-w-4xl mx-auto">
                            <h2 className="mb-8 text-center">Why Choose Kraken for AC?</h2>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-[var(--color-secondary)]"
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
                                        <h4 className="font-semibold mb-1">ARC Licensed</h4>
                                        <p className="text-sm text-[var(--color-neutral-muted)]">
                                            Fully licensed for all refrigerant handling and HVAC work.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-[var(--color-secondary)]"
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
                                        <h4 className="font-semibold mb-1">All Major Brands</h4>
                                        <p className="text-sm text-[var(--color-neutral-muted)]">
                                            Daikin, Mitsubishi, Fujitsu, Samsung, LG and more.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-[var(--color-secondary)]"
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
                                        <h4 className="font-semibold mb-1">Local to Northern Suburbs</h4>
                                        <p className="text-sm text-[var(--color-neutral-muted)]">
                                            Based in the area, fast response times to Joondalup, Wanneroo, and beyond.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)]/20 flex items-center justify-center shrink-0">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5 text-[var(--color-secondary)]"
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
                                        <h4 className="font-semibold mb-1">Upfront Pricing</h4>
                                        <p className="text-sm text-[var(--color-neutral-muted)]">
                                            Clear quotes with no hidden fees. Know the cost before we start.
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
                        <h2 className="mb-4 text-[var(--foreground)]">
                            Need AC Service Today?
                        </h2>
                        <p className="text-[var(--color-neutral-muted)] max-w-xl mx-auto mb-8">
                            Don&apos;t sweat it out. Call now for fast, professional air
                            conditioning service in Perth&apos;s Northern Suburbs.
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

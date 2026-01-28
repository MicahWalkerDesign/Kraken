import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingCalendar from "@/components/BookingCalendar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book an Appointment | Kraken Air & Electrical",
    description:
        "Book your air conditioning or electrical service appointment online. Real-time availability for Perth's Northern Suburbs.",
    keywords: [
        "book electrician Perth",
        "HVAC appointment Joondalup",
        "air conditioning service booking",
    ],
};

export default function ContactPage() {
    return (
        <>
            <Header />
            <main id="main-content">
                {/* Hero Section */}
                <section className="pt-32 pb-12 bg-gradient-radial">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto text-center">
                            <h1 className="mb-4">Book an Appointment</h1>
                            <p className="text-lg text-[var(--color-neutral-muted)]">
                                Select an available time slot below, or call us directly for
                                urgent requests.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Booking Section */}
                <section className="pb-20 bg-[var(--background)]">
                    <div className="container mx-auto px-4">
                        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                            {/* Contact Info */}
                            <div className="lg:col-span-1 order-2 lg:order-1">
                                <div className="sticky top-24">
                                    <h2 className="text-2xl font-semibold mb-6">Contact Info</h2>

                                    {/* Phone */}
                                    <div className="mb-6">
                                        <h4 className="text-sm text-[var(--color-neutral-muted)] uppercase tracking-wider mb-2">
                                            Phone
                                        </h4>
                                        <a
                                            href="tel:+61400000000"
                                            className="text-xl font-semibold text-[var(--color-action)] hover:text-[var(--color-action-hover)] transition-colors flex items-center gap-2"
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
                                        <p className="text-sm text-[var(--color-neutral-muted)] mt-1">
                                            For urgent/emergency callouts
                                        </p>
                                    </div>

                                    {/* Email */}
                                    <div className="mb-6">
                                        <h4 className="text-sm text-[var(--color-neutral-muted)] uppercase tracking-wider mb-2">
                                            Email
                                        </h4>
                                        <a
                                            href="mailto:info@krakenairelectrical.com.au"
                                            className="text-[var(--foreground)] hover:text-[var(--color-action)] transition-colors"
                                        >
                                            info@krakenairelectrical.com.au
                                        </a>
                                    </div>

                                    {/* Service Areas */}
                                    <div className="mb-6">
                                        <h4 className="text-sm text-[var(--color-neutral-muted)] uppercase tracking-wider mb-2">
                                            Service Areas
                                        </h4>
                                        <p className="text-[var(--foreground)]">
                                            Perth&apos;s Northern Suburbs including Joondalup, Wanneroo,
                                            Mindarie, Clarkson, Butler, Alkimos, and surrounding areas.
                                        </p>
                                    </div>

                                    {/* Hours */}
                                    <div>
                                        <h4 className="text-sm text-[var(--color-neutral-muted)] uppercase tracking-wider mb-2">
                                            Hours
                                        </h4>
                                        <p className="text-[var(--foreground)]">
                                            Monday – Friday: 7am – 5pm
                                            <br />
                                            Saturday: By appointment
                                            <br />
                                            <span className="text-[var(--color-action)]">
                                                Emergency callouts available
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Booking Calendar */}
                            <div className="lg:col-span-2 order-1 lg:order-2">
                                <div className="card p-6 md:p-8">
                                    <BookingCalendar />

                                    <p className="text-xs text-[var(--color-neutral-muted)] text-center mt-6">
                                        By booking, you agree to our privacy policy. We&apos;ll only use
                                        your information to contact you about your appointment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

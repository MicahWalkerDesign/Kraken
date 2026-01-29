import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MagneticButton from "@/components/MagneticButton";
import Link from "next/link";
import ClientBookingWrapper from "@/components/ClientBookingWrapper";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center bg-gradient-radial relative overflow-hidden pt-20">
          {/* Floating Gradient Orbs */}
          <div className="gradient-orb orb-gold w-96 h-96 -top-20 -right-20 float-delay-1" />
          <div className="gradient-orb orb-blue w-80 h-80 top-1/3 -left-20 float-delay-2" />
          <div className="gradient-orb orb-purple w-64 h-64 bottom-20 right-1/4 float-delay-3" />

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, var(--color-action) 1px, transparent 0)`,
                backgroundSize: "40px 40px",
              }}
            />
          </div>

          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--background-card)] rounded-full border border-white/10 mb-8 animate-fade-in-up">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-sm text-[var(--color-neutral-muted)]">
                  Available Today in Perth Northern Suburbs
                </span>
              </div>

              {/* Headline */}
              <h1 className="mb-6 hero-title">
                Professional{" "}
                <span className="text-[var(--color-secondary)]">Air Conditioning</span>{" "}
                &{" "}
                <span className="text-[var(--color-action)]">Electrical</span>{" "}
                Services
              </h1>

              {/* Subheadline */}
              <p className="text-lg md:text-xl text-[var(--color-neutral-muted)] mb-10 max-w-2xl mx-auto hero-subtitle">
                Licensed HVAC and electrical technician serving Joondalup, Wanneroo,
                and Perth&apos;s Northern Suburbs. Quality workmanship guaranteed.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center hero-cta">
                <MagneticButton
                  href="tel:+61400000000"
                  className="btn-primary px-8 py-4 text-lg rounded-xl"
                  strength={0.4}
                >
                  <span className="inline-flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 flex-shrink-0"
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
                  </span>
                </MagneticButton>
                <MagneticButton
                  href="#book"
                  className="btn-ghost px-8 py-4 text-lg rounded-xl"
                  strength={0.4}
                >
                  Request a Quote
                </MagneticButton>
              </div>

              {/* Trust Badges */}
              <div
                className="flex flex-wrap justify-center gap-6 mt-12 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <div className="flex items-center gap-2 text-sm text-[var(--color-neutral-muted)]">
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
                  Fully Licensed
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--color-neutral-muted)]">
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
                  Same Day Service
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--color-neutral-muted)]">
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
                  Local to Northern Suburbs
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-[var(--color-neutral-muted)]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </section>

        {/* Services Section */}
        <section className="section bg-[var(--background)]" id="services">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-4">Our Services</h2>
              <p className="text-[var(--color-neutral-muted)] max-w-2xl mx-auto">
                Comprehensive air conditioning and electrical solutions for homes
                and businesses in Perth&apos;s Northern Suburbs.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* Air Conditioning Card */}
              <Link
                href="/services/air-conditioning"
                className="card card-hvac group hover:scale-[1.02] transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[var(--color-secondary)]/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-secondary)]/20 transition-colors">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-[var(--color-secondary)]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[var(--color-secondary)]">
                      Air Conditioning
                    </h3>
                    <p className="text-[var(--color-neutral-muted)] text-sm mb-4">
                      Installation, repairs, and maintenance for split systems,
                      ducted systems, and commercial HVAC. ARC licensed with
                      expertise in refrigerant fluids.
                    </p>
                    <ul className="space-y-1 text-sm text-[var(--color-neutral-muted)]">
                      <li>• Split System Installation</li>
                      <li>• Ducted AC Repairs</li>
                      <li>• Refrigerant Regas</li>
                      <li>• Preventative Maintenance</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[var(--color-secondary)] font-medium text-sm">
                    Learn More
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[var(--color-secondary)] group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </Link>

              {/* Electrical Card */}
              <Link
                href="/services/electrical"
                className="card card-electrical group hover:scale-[1.02] transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[var(--color-action)]/10 flex items-center justify-center shrink-0 group-hover:bg-[var(--color-action)]/20 transition-colors">
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
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[var(--color-action)]">
                      Electrical Services
                    </h3>
                    <p className="text-[var(--color-neutral-muted)] text-sm mb-4">
                      Full range of residential and light commercial electrical
                      work. Licensed electrician with a focus on safety and
                      compliance.
                    </p>
                    <ul className="space-y-1 text-sm text-[var(--color-neutral-muted)]">
                      <li>• Switchboard Upgrades</li>
                      <li>• Safety Inspections</li>
                      <li>• Lighting Installation</li>
                      <li>• Fault Finding & Repairs</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[var(--color-action)] font-medium text-sm">
                    Learn More
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[var(--color-action)] group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section bg-[var(--background-elevated)]">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="mb-4">Why Choose Kraken?</h2>
              <p className="text-[var(--color-neutral-muted)] max-w-2xl mx-auto">
                Local expertise, licensed professionals, and a commitment to
                getting the job done right.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {/* Feature 1 */}
              <div className="text-center p-6">
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
                <h3 className="text-lg font-semibold mb-2">Fully Licensed</h3>
                <p className="text-[var(--color-neutral-muted)] text-sm">
                  ARC and Electrical licenses for complete peace of mind.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="text-center p-6">
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
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Local Expert</h3>
                <p className="text-[var(--color-neutral-muted)] text-sm">
                  Based in Northern Suburbs, serving Joondalup to Alkimos.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="text-center p-6">
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
                <h3 className="text-lg font-semibold mb-2">Quick Response</h3>
                <p className="text-[var(--color-neutral-muted)] text-sm">
                  Same day service available for urgent repairs.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="text-center p-6">
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
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Quality Work</h3>
                <p className="text-[var(--color-neutral-muted)] text-sm">
                  Professional workmanship with attention to detail.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Section */}
        <section className="section bg-[var(--background)]" id="book">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-4">Book an Appointment</h2>
              <p className="text-[var(--color-neutral-muted)] max-w-xl mx-auto">
                Select an available time slot below. We&apos;ll call you to confirm
                the details.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Contact Info Sidebar */}
              <div className="lg:col-span-1 order-2 lg:order-1">
                <div className="card p-6">
                  <h3 className="text-lg font-semibold mb-4">Contact Info</h3>

                  {/* Phone */}
                  <div className="mb-4">
                    <h4 className="text-xs text-[var(--color-neutral-muted)] uppercase tracking-wider mb-1">
                      Phone
                    </h4>
                    <a
                      href="tel:+61400000000"
                      className="text-lg font-semibold text-[var(--color-action)] hover:text-[var(--color-action-hover)] transition-colors flex items-center gap-2"
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
                    <p className="text-xs text-[var(--color-neutral-muted)] mt-1">
                      For urgent/emergency callouts
                    </p>
                  </div>

                  {/* Email */}
                  <div className="mb-4">
                    <h4 className="text-xs text-[var(--color-neutral-muted)] uppercase tracking-wider mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:info@krakenairelectrical.com.au"
                      className="text-sm text-[var(--foreground)] hover:text-[var(--color-action)] transition-colors"
                    >
                      info@krakenairelectrical.com.au
                    </a>
                  </div>

                  {/* Hours */}
                  <div>
                    <h4 className="text-xs text-[var(--color-neutral-muted)] uppercase tracking-wider mb-1">
                      Hours
                    </h4>
                    <p className="text-sm text-[var(--foreground)]">
                      Monday – Friday: 7am – 5pm
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
                <div className="card p-6">
                  <ClientBookingWrapper />
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

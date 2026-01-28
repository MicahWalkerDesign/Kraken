"use client";

import { useState, FormEvent, useRef, useEffect } from "react";

interface SelectedSlot {
    date: string;
    slotId: string;
    slotLabel: string;
    displayTime: string;
}

interface BookingModalProps {
    slot: SelectedSlot;
    onClose: () => void;
    onSuccess: () => void;
}

export default function BookingModal({ slot, onClose, onSuccess }: BookingModalProps) {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        suburb: "",
        description: "",
    });
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");
    const modalRef = useRef<HTMLDivElement>(null);

    // Format date for display
    const formattedDate = new Date(slot.date).toLocaleDateString("en-AU", {
        weekday: "long",
        day: "numeric",
        month: "long",
    });

    // Close on escape key
    useEffect(() => {
        const handleEscape = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        document.addEventListener("keydown", handleEscape);
        return () => document.removeEventListener("keydown", handleEscape);
    }, [onClose]);

    // Close on click outside
    const handleBackdropClick = (e: React.MouseEvent) => {
        if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose();
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setError("");
        setSubmitting(true);

        try {
            const response = await fetch("/api/booking", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...formData,
                    slot: {
                        date: slot.date,
                        time: slot.slotId,
                        label: `${slot.slotLabel} (${slot.displayTime})`,
                    },
                }),
            });

            if (response.ok) {
                setSuccess(true);
                setTimeout(() => {
                    onSuccess();
                }, 3000);
            } else {
                const data = await response.json();
                setError(data.error || "Failed to submit booking. Please try again.");
            }
        } catch {
            setError("Network error. Please check your connection and try again.");
        }

        setSubmitting(false);
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in-up"
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
        >
            <div
                ref={modalRef}
                className="relative w-full max-w-md bg-[var(--background-elevated)] rounded-2xl border border-white/10 shadow-2xl"
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-[var(--color-neutral-muted)] hover:text-[var(--foreground)] transition-colors"
                    aria-label="Close"
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
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                {success ? (
                    /* Success state */
                    <div className="p-8 text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8 text-green-500"
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
                        <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">
                            Booking Request Sent!
                        </h3>
                        <p className="text-[var(--color-neutral-muted)]">
                            Thank you. You will receive a phone call shortly to clarify details.
                        </p>
                    </div>
                ) : (
                    /* Form state */
                    <div className="p-6">
                        {/* Header */}
                        <div className="mb-6">
                            <h3
                                id="booking-modal-title"
                                className="text-xl font-semibold text-[var(--foreground)] mb-2"
                            >
                                Book Appointment
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-[var(--color-action)]">
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
                                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                    />
                                </svg>
                                <span>
                                    {formattedDate} • {slot.slotLabel} ({slot.displayTime})
                                </span>
                            </div>
                        </div>

                        {error && (
                            <div className="mb-4 p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                                {error}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-[var(--foreground)] mb-1"
                                >
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="input"
                                    placeholder="John Smith"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-[var(--foreground)] mb-1"
                                >
                                    Phone Number *
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="input"
                                    placeholder="0400 000 000"
                                />
                            </div>

                            {/* Suburb */}
                            <div>
                                <label
                                    htmlFor="suburb"
                                    className="block text-sm font-medium text-[var(--foreground)] mb-1"
                                >
                                    Suburb *
                                </label>
                                <input
                                    type="text"
                                    id="suburb"
                                    required
                                    value={formData.suburb}
                                    onChange={(e) => setFormData({ ...formData, suburb: e.target.value })}
                                    className="input"
                                    placeholder="Joondalup"
                                />
                            </div>

                            {/* Problem Description */}
                            <div>
                                <label
                                    htmlFor="description"
                                    className="block text-sm font-medium text-[var(--foreground)] mb-1"
                                >
                                    Problem Description *
                                </label>
                                <textarea
                                    id="description"
                                    required
                                    rows={3}
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    className="input resize-none"
                                    placeholder="Brief description of the issue..."
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={submitting}
                                className="btn-primary w-full py-3 text-base disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {submitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg
                                            className="animate-spin h-5 w-5"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            />
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                            />
                                        </svg>
                                        Submitting...
                                    </span>
                                ) : (
                                    "Confirm Booking"
                                )}
                            </button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
}

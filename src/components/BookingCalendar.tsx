"use client";

import { useState, useEffect } from "react";
import BookingModal from "./BookingModal";

// Time slot definitions
const TIME_SLOTS = [
    { id: "morning", label: "Morning", start: "09:00", end: "12:00", displayTime: "9am - 12pm" },
    { id: "midday", label: "Midday", start: "12:00", end: "15:00", displayTime: "12pm - 3pm" },
    { id: "afternoon", label: "Afternoon", start: "15:00", end: "18:00", displayTime: "3pm - 6pm" },
] as const;

type SlotId = typeof TIME_SLOTS[number]["id"];

interface SlotAvailability {
    date: string;
    slots: {
        morning: boolean;
        midday: boolean;
        afternoon: boolean;
    };
}

interface SelectedSlot {
    date: string;
    slotId: SlotId;
    slotLabel: string;
    displayTime: string;
}

// Get next 10 weekdays (2 business weeks)
function getWeekdayDates(startDate: Date, count: number = 5): Date[] {
    const dates: Date[] = [];
    const current = new Date(startDate);

    while (dates.length < count) {
        const day = current.getDay();
        // Skip Saturday (6) and Sunday (0)
        if (day !== 0 && day !== 6) {
            dates.push(new Date(current));
        }
        current.setDate(current.getDate() + 1);
    }
    return dates;
}

function formatDateKey(date: Date): string {
    return date.toISOString().split("T")[0];
}

function formatDayLabel(date: Date): { day: string; date: string; isToday: boolean } {
    const today = new Date();
    const isToday = date.toDateString() === today.toDateString();
    return {
        day: date.toLocaleDateString("en-AU", { weekday: "short" }),
        date: date.toLocaleDateString("en-AU", { day: "numeric", month: "short" }),
        isToday,
    };
}

export default function BookingCalendar() {
    const [weekOffset, setWeekOffset] = useState(0);
    const [availability, setAvailability] = useState<SlotAvailability[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedSlot, setSelectedSlot] = useState<SelectedSlot | null>(null);
    const [modalOpen, setModalOpen] = useState(false);

    // Calculate the start of the current viewing week
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const weekStart = new Date(today);
    weekStart.setDate(today.getDate() + weekOffset * 5); // Jump by 5 weekdays
    const weekDates = getWeekdayDates(weekStart, 5);

    // For static export, show all slots as available
    useEffect(() => {
        setLoading(true);
        // Simulate loading then show all available
        setTimeout(() => {
            setAvailability(
                weekDates.map((date) => ({
                    date: formatDateKey(date),
                    slots: { morning: true, midday: true, afternoon: true },
                }))
            );
            setLoading(false);
        }, 300);
    }, [weekOffset]);

    const handleSlotClick = (date: Date, slot: typeof TIME_SLOTS[number]) => {
        const dateKey = formatDateKey(date);
        const dayAvailability = availability.find((a) => a.date === dateKey);
        const isAvailable = dayAvailability?.slots[slot.id] ?? true;

        if (!isAvailable) return;

        setSelectedSlot({
            date: dateKey,
            slotId: slot.id,
            slotLabel: slot.label,
            displayTime: slot.displayTime,
        });
        setModalOpen(true);
    };

    const handleBookingSuccess = () => {
        setModalOpen(false);
        setSelectedSlot(null);
        // Refresh availability after booking
        setWeekOffset((prev) => prev);
    };

    const isSlotAvailable = (date: Date, slotId: SlotId): boolean => {
        // Don't allow booking past times
        const now = new Date();
        const slotDate = new Date(date);
        const slot = TIME_SLOTS.find((s) => s.id === slotId);
        if (slot) {
            const [hours] = slot.end.split(":").map(Number);
            slotDate.setHours(hours, 0, 0, 0);
            if (slotDate < now) return false;
        }

        const dateKey = formatDateKey(date);
        const dayAvailability = availability.find((a) => a.date === dateKey);
        return dayAvailability?.slots[slotId] ?? true;
    };

    return (
        <div className="booking-calendar">
            {/* Header with navigation */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-[var(--foreground)]">
                    Select a Time Slot
                </h3>
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => setWeekOffset(Math.max(0, weekOffset - 1))}
                        disabled={weekOffset === 0}
                        className="p-2 rounded-lg bg-[var(--background-card)] border border-white/10 hover:bg-[var(--background-hover)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        aria-label="Previous week"
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
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </button>
                    <span className="text-sm text-[var(--color-neutral-muted)] min-w-[140px] text-center">
                        {weekDates[0].toLocaleDateString("en-AU", { month: "short", day: "numeric" })} -{" "}
                        {weekDates[weekDates.length - 1].toLocaleDateString("en-AU", { month: "short", day: "numeric" })}
                    </span>
                    <button
                        onClick={() => setWeekOffset(Math.min(1, weekOffset + 1))}
                        disabled={weekOffset >= 1}
                        className="p-2 rounded-lg bg-[var(--background-card)] border border-white/10 hover:bg-[var(--background-hover)] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        aria-label="Next week"
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
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Calendar Grid */}
            {loading ? (
                <div className="grid grid-cols-5 gap-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="animate-pulse">
                            <div className="h-8 bg-[var(--background-card)] rounded mb-2" />
                            <div className="space-y-2">
                                {TIME_SLOTS.map((slot) => (
                                    <div
                                        key={slot.id}
                                        className="h-16 bg-[var(--background-card)] rounded"
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-5 gap-2 md:gap-3">
                    {weekDates.map((date) => {
                        const { day, date: dateStr, isToday } = formatDayLabel(date);
                        return (
                            <div key={formatDateKey(date)} className="flex flex-col">
                                {/* Day header */}
                                <div
                                    className={`text-center pb-2 mb-2 border-b border-white/10 ${isToday ? "text-[var(--color-action)]" : "text-[var(--color-neutral-muted)]"
                                        }`}
                                >
                                    <div className="text-xs font-medium">{day}</div>
                                    <div className={`text-sm ${isToday ? "font-bold" : ""}`}>{dateStr}</div>
                                </div>

                                {/* Time slots */}
                                <div className="space-y-2">
                                    {TIME_SLOTS.map((slot) => {
                                        const available = isSlotAvailable(date, slot.id);
                                        return (
                                            <button
                                                key={slot.id}
                                                onClick={() => handleSlotClick(date, slot)}
                                                disabled={!available}
                                                className={`
                          w-full py-3 px-2 rounded-lg text-xs font-medium transition-all
                          ${available
                                                        ? "bg-[var(--background-card)] border border-white/10 hover:border-[var(--color-action)] hover:bg-[var(--color-action)]/10 hover:shadow-[var(--glow-gold)] cursor-pointer"
                                                        : "bg-[var(--background-elevated)] text-[var(--color-neutral-muted)] opacity-40 cursor-not-allowed"
                                                    }
                        `}
                                            >
                                                <div className={available ? "text-[var(--foreground)]" : ""}>
                                                    {slot.label}
                                                </div>
                                                <div className="text-[10px] opacity-70">{slot.displayTime}</div>
                                                {!available && (
                                                    <div className="text-[10px] mt-1 text-red-400">Busy</div>
                                                )}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {/* Legend */}
            <div className="flex items-center gap-6 mt-6 text-xs text-[var(--color-neutral-muted)]">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-[var(--background-card)] border border-white/10" />
                    <span>Available</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-[var(--background-elevated)] opacity-40" />
                    <span>Busy</span>
                </div>
            </div>

            {/* Booking Modal */}
            {modalOpen && selectedSlot && (
                <BookingModal
                    slot={selectedSlot}
                    onClose={() => {
                        setModalOpen(false);
                        setSelectedSlot(null);
                    }}
                    onSuccess={handleBookingSuccess}
                />
            )}
        </div>
    );
}

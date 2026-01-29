"use client";

import dynamic from "next/dynamic";
import BookingCalendarSkeleton from "@/components/BookingCalendarSkeleton";

const BookingCalendar = dynamic(() => import("@/components/BookingCalendar"), {
    loading: () => <BookingCalendarSkeleton />,
    ssr: false,
});

export default function ClientBookingWrapper() {
    return <BookingCalendar />;
}

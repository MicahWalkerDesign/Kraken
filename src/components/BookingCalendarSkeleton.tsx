export default function BookingCalendarSkeleton() {
    return (
        <div className="booking-calendar">
            {/* Header Skeleton */}
            <div className="flex items-center justify-between mb-6 animate-pulse">
                <div className="h-7 w-48 bg-[var(--background-card)] rounded" />
                <div className="flex items-center gap-2">
                    <div className="h-9 w-9 bg-[var(--background-card)] rounded-lg" />
                    <div className="h-5 w-32 bg-[var(--background-card)] rounded" />
                    <div className="h-9 w-9 bg-[var(--background-card)] rounded-lg" />
                </div>
            </div>

            {/* Grid Skeleton */}
            <div className="grid grid-cols-5 gap-2 md:gap-3">
                {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="animate-pulse">
                        {/* Date Header */}
                        <div className="h-12 bg-[var(--background-card)] rounded mb-2 mx-auto w-full" />

                        {/* Time Slots */}
                        <div className="space-y-2">
                            {Array.from({ length: 3 }).map((_, j) => (
                                <div
                                    key={j}
                                    className="h-[60px] bg-[var(--background-card)] rounded w-full"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Legend Skeleton */}
            <div className="flex items-center gap-6 mt-6 animate-pulse">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-[var(--background-card)]" />
                    <div className="h-3 w-16 bg-[var(--background-card)] rounded" />
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-[var(--background-card)]" />
                    <div className="h-3 w-12 bg-[var(--background-card)] rounded" />
                </div>
            </div>
        </div>
    );
}

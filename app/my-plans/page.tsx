import {
    Check,
    ChevronDown,
    Clock3,
    Flame,
    Star,
    X,
  } from "lucide-react";
  
const MyPlan = () => {
    return (
        <main className=" px-4 py-8 lg:py-10">
            <div className="mx-auto container">

                {/* ================= HEADER ================= */}
                <div>
                    <h1 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
                        My Plan
                    </h1>

                    <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                        Cap of five lifts for today. Finish them, then load more.
                    </p>
                </div>

                {/* ================= STATS ================= */}
                <div className="mt-5 grid grid-cols-1 overflow-hidden rounded-xl border border-[#242832] bg-[#15171c] sm:grid-cols-3">

                {/* Exercises */}
                <div className="border-b border-[#242832] px-5 py-5 sm:border-b-0 sm:border-r">
                    <p className="text-[10px] font-medium text-gray-500">
                    Exercises
                    </p>

                    <p className="mt-1 text-3xl font-black leading-none text-[#c6ff00]">
                    2
                    </p>
                </div>

                {/* Minutes */}
                <div className="border-b border-[#242832] px-5 py-5 sm:border-b-0 sm:border-r">
                    <p className="text-[10px] font-medium text-gray-500">
                    Minutes
                    </p>

                    <p className="mt-1 text-3xl font-black leading-none">
                    23
                    </p>
                </div>

                {/* Calories */}
                <div className="px-5 py-5">
                    <p className="text-[10px] font-medium text-gray-500">
                    Calories
                    </p>

                    <p className="mt-1 text-3xl font-black leading-none">
                    190
                    </p>
                </div>

                </div>

                {/* ================= FILTER BAR ================= */}
                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                {/* Tabs */}
                <div className="flex w-fit rounded-lg border border-[#242832] bg-[#15171c] p-1">
                    <button className="rounded-md bg-[#242832] px-4 py-2 text-[11px] font-bold text-white">
                    Today's Plan
                    </button>

                    <button className="rounded-md px-4 py-2 text-[11px] font-medium text-gray-500 transition hover:text-white">
                    Saved
                    </button>
                </div>

                {/* Sort */}
                <div className="flex items-center gap-2">
                    <span className="text-[10px] text-gray-500">
                    Sort By
                    </span>

                    <button className="flex items-center gap-2 rounded-lg border border-[#242832] bg-[#15171c] px-3 py-2 text-[11px] text-gray-300">
                    Duration
                    <ChevronDown size={13} />
                    </button>
                </div>

                </div>

                {/* ================= PLAN LIST ================= */}
                <div className="mt-4 space-y-3">

                {/* Plan Item */}
                <div className="rounded-xl border border-[#242832] bg-[#15171c] p-3 sm:p-4">

                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center">

                    {/* Image + Information */}
                    <div className="flex min-w-0 flex-1 items-center gap-3">

                        {/* Image */}
                        <div className="h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-[#22252c] sm:h-[58px] sm:w-[105px]">
                        {/* Image goes here */}
                        </div>

                        {/* Content */}
                        <div className="min-w-0">

                        <h3 className="truncate text-sm font-black uppercase sm:text-base">
                            Russian Twist
                        </h3>

                        <p className="mt-0.5 text-[10px] text-gray-500">
                            Medicine Ball
                        </p>

                        {/* Meta */}
                        <div className="mt-2 flex flex-wrap items-center gap-3 text-[10px] text-gray-400">

                            <span className="flex items-center gap-1">
                            <Clock3
                                size={11}
                                className="text-[#c6ff00]"
                            />
                            8 min
                            </span>

                            <span className="flex items-center gap-1">
                            <Flame
                                size={11}
                                className="text-[#c6ff00]"
                            />
                            70 kcal
                            </span>

                            <span className="flex items-center gap-1">
                            <Star
                                size={11}
                                className="text-[#c6ff00]"
                            />
                            4.1
                            </span>

                        </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between gap-2 lg:justify-end">

                        <button className="rounded-full border border-[#303640] px-4 py-2 text-[10px] font-medium text-gray-300 transition hover:border-gray-500 hover:text-white">
                        View Details
                        </button>

                        <button className="flex items-center gap-1.5 rounded-full bg-[#c6ff00] px-4 py-2 text-[10px] font-black text-black transition hover:bg-[#d5ff40]">
                        <Check size={12} strokeWidth={3} />
                        Mark as Done
                        </button>

                        <button className="flex h-8 w-8 items-center justify-center text-gray-600 transition hover:text-white">
                        <X size={15} />
                        </button>

                    </div>

                    </div>
                </div>

                {/* Plan Item 2 */}
                <div className="rounded-xl border border-[#242832] bg-[#15171c] p-3 sm:p-4">

                    <div className="flex flex-col gap-4 lg:flex-row lg:items-center">

                    <div className="flex min-w-0 flex-1 items-center gap-3">

                        <div className="h-16 w-24 shrink-0 overflow-hidden rounded-lg bg-[#22252c] sm:h-[58px] sm:w-[105px]" />

                        <div className="min-w-0">

                        <h3 className="truncate text-sm font-black uppercase sm:text-base">
                            Pull-Up
                        </h3>

                        <p className="mt-0.5 text-[10px] text-gray-500">
                            Pull-up Bar
                        </p>

                        <div className="mt-2 flex flex-wrap items-center gap-3 text-[10px] text-gray-400">

                            <span className="flex items-center gap-1">
                            <Clock3
                                size={11}
                                className="text-[#c6ff00]"
                            />
                            15 min
                            </span>

                            <span className="flex items-center gap-1">
                            <Flame
                                size={11}
                                className="text-[#c6ff00]"
                            />
                            120 kcal
                            </span>

                            <span className="flex items-center gap-1">
                            <Star
                                size={11}
                                className="text-[#c6ff00]"
                            />
                            4.7
                            </span>

                        </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between gap-2 lg:justify-end">

                        <button className="rounded-full border border-[#303640] px-4 py-2 text-[10px] font-medium text-gray-300 transition hover:border-gray-500 hover:text-white">
                        View Details
                        </button>

                        <button className="flex items-center gap-1.5 rounded-full bg-[#c6ff00] px-4 py-2 text-[10px] font-black text-black transition hover:bg-[#d5ff40]">
                        <Check size={12} strokeWidth={3} />
                        Mark as Done
                        </button>

                        <button className="flex h-8 w-8 items-center justify-center text-gray-600 transition hover:text-white">
                        <X size={15} />
                        </button>

                    </div>

                    </div>
                </div>

                </div>

            </div>
        </main>
    );
};
  
export default MyPlan;
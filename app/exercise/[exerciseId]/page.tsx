import { Bookmark, CalendarPlus } from "lucide-react";

const WorkoutDetailsPage = () => {
  return (
    <main className="px-4 py-8 lg:py-12">
      <section className="mx-auto container">

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-10">

          {/* ================= LEFT IMAGE ================= */}
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="aspect-4/3 w-full bg-card sm:aspect-16/11 lg:aspect-4/3">
              {/* Workout image goes here */}

              {/* Example:
              <img
                src="/images/bench-press.jpg"
                alt="Barbell Bench Press"
                className="h-full w-full object-cover"
              />
              */}
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="min-w-0">

            {/* Title */}
            <h1 className="text-3xl font-black uppercase leading-none tracking-tight sm:text-4xl lg:text-[32px]">
              Barbell Bench Press
            </h1>

            {/* Description */}
            <p className="mt-3 max-w-2xl text-sm leading-5 text-gray-400 sm:text-[15px]">
              A compound press that builds chest thickness, triceps, and
              pressing power from a stable bench.
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-black text-black">
                Chest
              </span>

              <span className="rounded-full bg-primary px-3 py-1 text-[10px] font-black text-black">
                Arms
              </span>
            </div>

            {/* ================= INFO TABLE ================= */}
            <div className="mt-5 overflow-hidden rounded-xl border border-border bg-card">

              {/* Equipment */}
              <div className="flex min-h-11 items-center justify-between gap-5 border-b border-border px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
                  Equipment
                </span>

                <span className="text-right text-xs text-gray-300">
                  Barbell, Bench
                </span>
              </div>

              {/* Difficulty */}
              <div className="flex min-h-11 items-center justify-between gap-5 border-b border-border px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
                  Difficulty
                </span>

                <span className="text-right text-xs text-gray-300">
                  Intermediate
                </span>
              </div>

              {/* Sets */}
              <div className="flex min-h-11 items-center justify-between gap-5 border-b border-border px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
                  Sets
                </span>

                <span className="text-right text-xs text-gray-300">
                  4
                </span>
              </div>

              {/* Reps */}
              <div className="flex min-h-11 items-center justify-between gap-5 border-b border-[#252a33] px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
                  Reps
                </span>

                <span className="text-right text-xs text-gray-300">
                  6–8
                </span>
              </div>

              {/* Duration */}
              <div className="flex min-h-11 items-center justify-between gap-5 border-b border-border px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
                  Duration
                </span>

                <span className="text-right text-xs text-gray-300">
                  25 min
                </span>
              </div>

              {/* Calories */}
              <div className="flex min-h-11 items-center justify-between gap-5 border-b border-border px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
                  Calories
                </span>

                <span className="text-right text-xs text-gray-300">
                  180 kcal
                </span>
              </div>

              {/* Rating */}
              <div className="flex min-h-11 items-center justify-between gap-5 px-4 py-3">
                <span className="text-[10px] font-bold uppercase tracking-wide text-gray-500">
                  Rating
                </span>

                <span className="text-right text-xs text-gray-300">
                  4.8
                </span>
              </div>

            </div>

            {/* ================= INSTRUCTIONS ================= */}
            <div className="mt-6">

              <h2 className="text-sm font-black uppercase tracking-wide font-header">
                Instructions
              </h2>

              <ol className="mt-4 space-y-3">
                <li className="flex gap-3 text-xs leading-5 text-gray-400">
                  <span className="shrink-0 text-gray-500">1.</span>
                  <span>
                    Lie on the bench with eyes under the bar and feet planted.
                  </span>
                </li>

                <li className="flex gap-3 text-xs leading-5 text-gray-400">
                  <span className="shrink-0 text-gray-500">2.</span>
                  <span>
                    Unrack with locked elbows and lower the bar to mid-chest.
                  </span>
                </li>

                <li className="flex gap-3 text-xs leading-5 text-gray-400">
                  <span className="shrink-0 text-gray-500">3.</span>
                  <span>
                    Press up in a slight arc until elbows lock without
                    bouncing.
                  </span>
                </li>

                <li className="flex gap-3 text-xs leading-5 text-gray-400">
                  <span className="shrink-0 text-gray-500">4.</span>
                  <span>
                    Keep shoulder blades pinched and a natural arch in the
                    back.
                  </span>
                </li>
              </ol>

            </div>

            {/* ================= BUTTONS ================= */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              <button className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-xs font-black text-black transition hover:bg-[#d4ff3d] cursor-pointer">
                <CalendarPlus size={15} />
                Add to today's plan
              </button>

              <button className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-[#303641] px-5 text-xs font-medium text-gray-300 transition hover:border-gray-500 hover:text-white cursor-pointer">
                <Bookmark size={15} />
                Save for later
              </button>

            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default WorkoutDetailsPage;
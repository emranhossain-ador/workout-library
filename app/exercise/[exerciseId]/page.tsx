import { Bookmark, CalendarPlus } from "lucide-react";
import Image from "next/image";

interface WorkoutProps{
  params: Promise<{
    exerciseId: string
  }>
}

const WorkoutDetailsPage = async({params}:WorkoutProps) => {

  const { exerciseId } = await params;

  const res = await fetch(`https://api.abcz.workers.dev/api/fitlog/${exerciseId}`);
  const exercise = await res.json();

  const infoTable = [
    { label:"Equipment", value: exercise.equipment },
    { label:"Difficulty", value: exercise.difficulty },
    { label:"Sets", value: exercise.sets },
    { label:"Reps", value: exercise.reps },
    { label:"Duration", value: exercise.duration },
    { label:"Calories", value: exercise.calories },
    { label:"Rating", value: exercise.rating },
  ]
  


  return (
    <main className="px-4 py-8 lg:py-12">
      <section className="mx-auto container">

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-10">

          {/* ================= LEFT IMAGE ================= */}
          <div className="overflow-hidden rounded-xl border border-border bg-card">
            <div className="aspect-4/3 w-full bg-card sm:aspect-16/11 lg:aspect-4/3">
              {/* Workout image goes here */}

              <Image src={exercise.image} alt={exercise.name} width={500} height={500} className="w-full h-full object-cover" />
             
            </div>
          </div>

          {/* ================= RIGHT CONTENT ================= */}
          <div className="min-w-0">

            {/* Title */}
            <h1 className="text-3xl font-black uppercase leading-none tracking-tight sm:text-4xl lg:text-[32px]">
              {exercise.name}
            </h1>

            {/* Description */}
            <p className="mt-3 max-w-2xl text-sm leading-5 text-gray-400 sm:text-[15px]">
              {exercise.description}
            </p>

            {/* Tags */}
            <div className="mt-4 flex flex-wrap gap-2">
              {
                exercise.muscleGroups.map((muscle:string, i:number)=> 
                  <span key={i} className="rounded-full bg-primary px-3 py-1 text-sm font-medium text-black">
                    {muscle}
                  </span>
                )
              }
            </div>

            {/* ================= INFO TABLE ================= */}
            <div className="mt-6 divide-y divide-border overflow-hidden rounded-2xl border border-border">

              {
                infoTable.map(info=> 
                  <div key={info.label} className="grid grid-cols-1 gap-1 bg-card px-4 py-3 sm:grid-cols-2 sm:items-center">
                    <span className="font-header text-sm font-bold">
                      {info.label}
                    </span>

                    <span className="font-header text-sm font-bold">
                      {info.value}
                    </span>
                  </div>
                )
              }
              
            </div>

            {/* ================= INSTRUCTIONS ================= */}
            <div className="mt-6">

              <h2 className="text-xl font-black uppercase tracking-wide font-header">
                Instructions
              </h2>

              <ol className="mt-4 list-decimal space-y-3 pl-5">
                {
                  exercise.instructions.map((instruct:string, inx:number)=> {
                    return (
                      <li key={inx} className="">
                        {instruct}
                      </li>
                    )
                  })
                }
              </ol>

            </div>

            {/* ================= BUTTONS ================= */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">

              <button className="inline-flex py-3 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-black text-black transition hover:bg-[#d4ff3d] cursor-pointer font-header">
                <CalendarPlus size={15} />
                Add to today's plan
              </button>

              <button className="inline-flex py-3 items-center justify-center gap-2 rounded-lg border border-[#303641] px-5 text-sm font-header font-medium text-gray-300 transition hover:border-gray-500 hover:text-white cursor-pointer">
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
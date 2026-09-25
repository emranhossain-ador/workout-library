import { Check,
    Clock3,
    Flame,
    Star,
    X, } from "lucide-react";
import { ExerciseType } from "../type/exerciseType";
import Image from "next/image";

interface SavePlansCardProps {
    exercise: ExerciseType
}

const SavePlansCard = ({exercise}:SavePlansCardProps)=> {
    
    return (
        <div className="rounded-xl border border-[#242832] bg-[#15171c] p-3 sm:p-4">

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center">

                {/* Image + Information */}
                <div className="flex min-w-0 flex-1 items-center gap-3">

                    {/* Image */}
                    <div className="relative h-28 w-full shrink-0 overflow-hidden rounded-2xl sm:h-24 sm:w-36 bg-[#22252c]">
                        <Image src={exercise.image} width={500} height={500} className="w-full h-full object-cover" alt={exercise.name} />
                    </div>

                    {/* Content */}
                    <div className="min-w-0">

                        <h3 className="truncate text-lg md:text-xl font-header font-black uppercase">
                            {exercise.name}
                        </h3>

                        <p className="mt-0.5 text-base text-gray-500">
                            {exercise.equipment}
                        </p>

                        {/* Meta */}
                        <div className="mt-2 flex flex-wrap gap-3 text-base">

                            <span className="inline-flex items-center gap-1">
                            <Clock3 size={15} className="text-primary"/>
                            {exercise.duration} min
                            </span>

                            <span className="inline-flex items-center gap-1">
                            <Flame size={15} className="text-primary"/>
                            {exercise.caloriesBurned} kcal
                            </span>

                            <span className="inline-flex items-center gap-1">
                            <Star size={15} className="text-primary"/>
                                {exercise.rating}
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
    )
}

export default SavePlansCard;
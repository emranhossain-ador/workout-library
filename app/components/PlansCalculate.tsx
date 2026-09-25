import { ExerciseType } from "../type/exerciseType";

interface PlansCalculateProps{
    exercise: ExerciseType[]
}

const PlansCalculate = ({exercise}:PlansCalculateProps)=>{
    return (
        <div className="mt-5 grid grid-cols-1 overflow-hidden rounded-xl border border-[#242832] bg-[#15171c] sm:grid-cols-3">

            {/* Exercises */}
            <div className="border-b border-border px-5 py-5 sm:border-b-0 sm:border-r">
                <p className="text-sm tracking-wide font-medium text-foreground/80">Exercises</p>
                <p className="mt-1 text-3xl font-black leading-none text-primary">
                    {exercise.length}
                </p>
            </div>

            {/* Minutes */}
            <div className="border-b border-[#242832] px-5 py-5 sm:border-b-0 sm:border-r">
                <p className="text-sm tracking-wide font-medium text-foreground/80">Minutes</p>
                <p className="mt-1 text-3xl font-black leading-none">
                    {exercise.reduce((sum, exe) => sum + exe.duration, 0)}
                </p>
            </div>

            {/* Calories */}
            <div className="px-5 py-5">
                <p className="text-sm tracking-wide font-medium text-foreground/80">Calories</p>
                <p className="mt-1 text-3xl font-black leading-none">
                {exercise.reduce((sum, exe) => sum + exe.caloriesBurned, 0)}
                </p>
            </div>

        </div>
    )
}

export default PlansCalculate;
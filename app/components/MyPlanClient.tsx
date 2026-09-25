'use client'

import { useContext, useState } from "react";
import PlansCalculate from "./PlansCalculate";
import SavePlansCard from "./SavePlansCard";
import { ExerciseContext } from "../providers/exerciseProvider";
import Link from "next/link";

const MyPlanClient = ()=>
{
    const context = useContext(ExerciseContext);
    if(!context){
        throw new Error("Context data not found!");
    }
    
    const {myPlans, savePlans} = context;

    const [tap, setTap] = useState<"todayPlans"|"saved">('todayPlans');
    const [sortBy, setSortBy] = useState<"duration" | "calories" | "rating">('duration');

    const handleTap = (value: "todayPlans"|"saved")=>
    {
        setTap(value)
    }


    const sortExercise = ()=>{
        const tabSelectPlan = tap === "todayPlans" ? myPlans : savePlans;

        const exercise = [...tabSelectPlan];

        if(sortBy === "duration"){
            exercise.sort((a,b)=> b.duration - a.duration);
        }else if(sortBy === 'calories'){
            exercise.sort((a,b)=> b.caloriesBurned - a.caloriesBurned);
        }else if(sortBy === 'rating'){
            exercise.sort((a,b) => b.rating - a.rating);
        }

        return exercise;
    }

    const selectExercise = sortExercise();

    return (
        <>
            <PlansCalculate exercise={selectExercise}/>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div className="flex w-fit rounded-lg border border-[#242832] bg-[#15171c] p-1">
                    <button onClick={()=>handleTap('todayPlans')} 
                        className={`rounded-md px-4 py-2 text-sm font-semibold tracking-wide cursor-pointer ${tap === "todayPlans" ? 'bg-[#242832] text-primary':'text-gray-500 transition hover:text-white'}`}>
                        Today's Plan
                    </button>

                    <button onClick={()=>handleTap('saved')} 
                        className={`rounded-md px-4 py-2 text-sm font-semibold tracking-wide cursor-pointer ${tap === "saved" ? 'bg-[#242832] text-primary':'text-gray-500 transition hover:text-white'}`}>
                        Saved
                    </button>
                </div>
                <div className="w-full max-w-xs">
                    <h5 className="text-foreground/90">Sort By</h5>
                    <select 
                        value={sortBy}
                        onChange={(e)=>setSortBy(e.target.value as "duration" | "calories" | "rating")}
                        className="select text-base border-border bg-background min-h-12 rounded-2xl w-full max-w-xs">
                        <option value={"duration"}>Duration</option>
                        <option value={"calories"}>Calories</option>
                        <option value={"rating"}>Rating</option>
                    </select>
                </div>

            </div>

            <div className="mt-4 space-y-3">
                {
                    selectExercise.length === 0 ?
                    isEmpty()
                        :
                    selectExercise.map((plan)=><SavePlansCard selectedTap={tap} key={plan.id} exercise={plan}/>)
                }
                
            </div>
        </>
    )
}


function isEmpty(){
    return (
        <div className="rounded-2xl border border-border bg-card p-10 text-center">
            <p className="text-2xl font-bold font-header">Nothing here yet</p>
            <p className="mt-2 text-foreground/80">Browse the library and add a lift to get today moving.</p>
            <div className="mt-5">
                <Link className="px-5 py-2.5 font-semibold bg-primary text-black rounded-2xl" href="/">Go to workouts</Link>
            </div>
        </div>
    )
}

export default MyPlanClient;
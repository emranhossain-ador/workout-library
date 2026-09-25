'use client'

import { useContext, useState } from "react";
import PlansCalculate from "./PlansCalculate";
import SavePlansCard from "./SavePlansCard";
import { ChevronDown } from "lucide-react";
import { ExerciseContext } from "../providers/exerciseProvider";
import { ExerciseType } from "../type/exerciseType";
import Link from "next/link";

const MyPlanClient = ()=>
{

    const context = useContext(ExerciseContext);

    if(!context){
        throw new Error("Context data not found!");
    }

    const [tap, setTap] = useState<string>('todayPlans');

    const handleTap = (value:string)=>
    {
        setTap(value)
    }

    const {myPlans, savePlans} = context;

    const selectExercise = tap === "todayPlans" ? myPlans : savePlans;

    // console.log(selectExercise);


    return (
        <>
            <PlansCalculate/>

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

            <div className="mt-4 space-y-3">
                {
                    selectExercise.length === 0 ?
                    isEmpty()
                        :
                    selectExercise.map((plan)=><SavePlansCard key={plan.id} exercise={plan}/>)
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
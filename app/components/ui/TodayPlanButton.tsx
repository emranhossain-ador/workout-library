"use client"
import { ExerciseContext } from "@/app/providers/exerciseProvider";
import { ExerciseType } from "@/app/type/exerciseType";
import { CalendarPlus } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

interface TodayPlanButtonProps {
    exercise: ExerciseType
}

const TodayPlanButton = ({exercise}:TodayPlanButtonProps)=> {
    
    const context = useContext(ExerciseContext);

    if(!context){
        throw new Error("Context Data not founded");
        console.log("Context Data not founded");
    }
    
    const {myPlans, setMyPlans} = context;

    const handleTodayPlan = ()=>
    {
        const exits = myPlans.some((plan:ExerciseType)=> plan.id === exercise.id);

        if(exits){
            toast.warning('This plan already added!');
            return;
        }

        setMyPlans([...myPlans, exercise]);
        toast.success("Today's Plan added successful");
    }


    return (
        <button onClick={handleTodayPlan} className="inline-flex py-3 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-black text-black transition hover:bg-[#d4ff3d] cursor-pointer font-header">
            <CalendarPlus size={15} />
            Add to today's plan
        </button>
    );
}

export default TodayPlanButton;

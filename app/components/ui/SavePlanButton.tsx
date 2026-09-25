"use client"

import { ExerciseContext } from "@/app/providers/exerciseProvider";
import { ExerciseType } from "@/app/type/exerciseType";
import { Bookmark } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

interface SavePlanButtonProps {
    exercise: ExerciseType;
}

const SavePlanButton = ({exercise}:SavePlanButtonProps)=> {

    const context = useContext(ExerciseContext);

    if(!context){
        throw new Error("Context Data not founded");
    }

    const {savePlans, setSavePlans} = context;
    
    const handleSavePlan = ()=>{

        const exits = savePlans.some((save:ExerciseType)=> save.id === exercise.id );

        if(exits){
            toast.warning('Already in your save list!');
            return;
        }

        setSavePlans([...savePlans, exercise]);
        toast.success("Save for later");
    }

    return (
        <button onClick={handleSavePlan} className="inline-flex py-3 items-center justify-center gap-2 rounded-lg border border-[#303641] px-5 text-sm font-header font-medium text-gray-300 transition hover:border-gray-500 hover:text-white cursor-pointer">
            <Bookmark size={15} />
            Save for later
        </button>
    );
}

export default SavePlanButton;
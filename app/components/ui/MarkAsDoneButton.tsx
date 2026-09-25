import { ExerciseContext } from "@/app/providers/exerciseProvider";
import { Check, X } from "lucide-react";
import { useContext } from "react";
import { toast } from "react-toastify";

interface MarkAsDoneButtonProps {
    planid:number;
    selectedTap: string
}

const MarkAsDoneButton = ({planid, selectedTap}: MarkAsDoneButtonProps)=> 
{

    const context = useContext(ExerciseContext);

    if(!context){
        throw new Error("Context not found!");
    }

    const {myPlans, setMyPlans, savePlans, setSavePlans} = context;
    
    const handleMarkDone = ()=>
    {
        if(selectedTap === "todayPlans")
        {
            const doneExercise = myPlans.filter((p) => p.id !== planid ); 
            setMyPlans(doneExercise);
            toast.success("Workout logged — good job")
        }
        else if(selectedTap === "saved")
        {
            const doneExercise = savePlans.filter((p) => p.id !== planid ); 
            setSavePlans(doneExercise);
            toast.success("Workout logged — good job")
        }
    }

    return (
        <button onClick={handleMarkDone} 
        className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold cursor-pointer text-black transition hover:bg-[#d5ff40]">
            <Check size={12} strokeWidth={4} />
            Mark as Done
        </button>
    );
}

export default MarkAsDoneButton;
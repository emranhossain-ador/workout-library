import { ExerciseContext } from "@/app/providers/exerciseProvider";
import { X } from "lucide-react";
import { useContext } from "react";

interface SavePlanDeleteButtonProps {
    planid:number;
    selectedTap: string
}

const SavePlanDeleteButton = ({planid, selectedTap}: SavePlanDeleteButtonProps)=> 
{

    const context = useContext(ExerciseContext);

    if(!context){
        throw new Error("Context not found!");
    }

    const {myPlans, setMyPlans, savePlans, setSavePlans} = context;
    
    const handlePlanDelete = ()=>
    {
        if(selectedTap === "todayPlans")
        {
            const removeExercise = myPlans.filter((p) => p.id !== planid ); 
            setMyPlans(removeExercise);
        }
        else if(selectedTap === "saved")
        {
            const removeExercise = savePlans.filter((p) => p.id !== planid ); 
            setSavePlans(removeExercise);
        }
    }

    return (
        <button onClick={handlePlanDelete} className="flex h-8 w-8 items-center justify-center text-gray-600 transition hover:text-red-500 cursor-pointer">
            <X size={20} strokeWidth={3}/>
        </button>
    );
}

export default SavePlanDeleteButton;
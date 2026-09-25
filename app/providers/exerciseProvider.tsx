"use client";
import { createContext, useState, type ReactNode, type Dispatch, type SetStateAction } from "react";
import { ExerciseType } from "../type/exerciseType";

interface ExerciseContextType{
    myPlans: ExerciseType[];
    setMyPlans: Dispatch<SetStateAction<ExerciseType[]>>;

    savePlans: ExerciseType[];
    setSavePlans: Dispatch<SetStateAction<ExerciseType[]>>;
}

export const ExerciseContext = createContext<ExerciseContextType | null>(null);

export default function ExerciseProvider({children}: {children: ReactNode})
{
    const [myPlans, setMyPlans] = useState<ExerciseType[]>([]);
    const [savePlans, setSavePlans] = useState<ExerciseType[]>([]);

    const value = {
        myPlans,
        setMyPlans,
        savePlans,
        setSavePlans
    }

    return (
        <ExerciseContext.Provider value={value}>
            {children}
        </ExerciseContext.Provider>
    );
}
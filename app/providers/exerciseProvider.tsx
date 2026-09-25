"use client";

import {
    createContext,
    useEffect,
    useState,
    type ReactNode,
    type Dispatch,
    type SetStateAction,
} from "react";

import { ExerciseType } from "../type/exerciseType";

interface ExerciseContextType {
    myPlans: ExerciseType[];
    setMyPlans: Dispatch<SetStateAction<ExerciseType[]>>;

    savePlans: ExerciseType[];
    setSavePlans: Dispatch<SetStateAction<ExerciseType[]>>;
}

export const ExerciseContext =
    createContext<ExerciseContextType | null>(null);

export default function ExerciseProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [myPlans, setMyPlans] = useState<ExerciseType[]>([]);
    const [savePlans, setSavePlans] = useState<ExerciseType[]>([]);

    const [isLoaded, setIsLoaded] = useState(false);

    // Load data from localStorage
    useEffect(() => {
        try {
            const storedMyPlans = localStorage.getItem("myPlans");
            const storedSavePlans = localStorage.getItem("savePlans");
    
            if (storedMyPlans && storedMyPlans !== "undefined") {
                setMyPlans(JSON.parse(storedMyPlans));
            }
    
            if (storedSavePlans && storedSavePlans !== "undefined") {
                setSavePlans(JSON.parse(storedSavePlans));
            }
        } catch (error) {
            console.error("Failed to load plans:", error);
        } finally {
            setIsLoaded(true);
        }
    }, []);

    // Save myPlans
    useEffect(() => {
        if (!isLoaded) return;
    
        localStorage.setItem(
            "myPlans",
            JSON.stringify(myPlans)
        );
    }, [myPlans, isLoaded]);
    
    useEffect(() => {
        if (!isLoaded) return;
    
        localStorage.setItem(
            "savePlans",
            JSON.stringify(savePlans)
        );
    }, [savePlans, isLoaded]);

    const value = {
        myPlans,
        setMyPlans,
        savePlans,
        setSavePlans,
    };

    return (
        <ExerciseContext.Provider value={value}>
            {children}
        </ExerciseContext.Provider>
    );
}
import { Clock, Flame, Star } from "lucide-react";
import { ExerciseType } from "../type/exerciseType";
import Image from "next/image";
import Link from "next/link";

interface LibraryCardProps{
    exerciseData: ExerciseType
}

const LibraryCard = ({exerciseData}:LibraryCardProps) => {

    const  {id, name, image, muscleGroups, equipment, duration, caloriesBurned, rating} = exerciseData;

    return (
        <Link href={`/exercise/${id}`} className="overflow-hidden rounded-2xl border border-border bg-card transition-all hover:border-primary">
            {/* Image */}
            <Image src={image} alt={name} width={200} height={200} className="h-52 sm:h-60 w-full object-cover" />
    
            <div className="p-6">
    
                {/* Tags */}
                <div className="mb-4 flex gap-2">
                    {
                        muscleGroups.map((muscle, i) => 
                            <span key={i}  className="rounded-full bg-primary px-3 py-1 text-[11px] font-black uppercase text-black">
                                {muscle}
                            </span>
                        )
                    }
                </div>
        
                {/* Title */}
                <h3 className="text-lg font-header font-black uppercase text-white">
                    {name}
                </h3>
        
                <p className="mt-1 text-sm text-gray-400">
                    {equipment}
                </p>
        
                {/* Divider */}
                <div className="my-4 h-px bg-border" />
        
                {/* Information */}
                <div className="flex items-center gap-4 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><Clock size={15}/> {duration} min</span>
                    <span className="flex items-center gap-1"><Flame size={15}/> {caloriesBurned} kcal</span>
                    <span className="flex items-center gap-1"><Star size={15}/> {rating}</span>
                </div>
    
            </div>
        </Link>
    );
};

export default LibraryCard;
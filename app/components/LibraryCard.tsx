import { Clock, Flame, Star } from "lucide-react";

const LibraryCard = () => {
    return (
        <article className="overflow-hidden rounded-2xl border border-[#242832] bg-[#15171c]">
            {/* Image */}
            <div className="h-52 bg-[#181a20] sm:h-60" />
    
            <div className="p-6">
    
            {/* Tags */}
            <div className="mb-4 flex gap-2">
                <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-black uppercase text-black">
                Category
                </span>
    
                <span className="rounded-full bg-primary px-3 py-1 text-[11px] font-black uppercase text-black">
                Muscle
                </span>
            </div>
    
            {/* Title */}
            <h3 className="text-lg font-header font-black uppercase text-white">
                Workout Name
            </h3>
    
            <p className="mt-1 text-sm text-gray-400">
                Equipment / Location
            </p>
    
            {/* Divider */}
            <div className="my-4 h-px bg-[#272a32]" />
    
            {/* Information */}
            <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1"><Clock size={15}/> 20 min</span>
                <span className="flex items-center gap-1"><Flame size={15}/> 150 kcal</span>
                <span className="flex items-center gap-1"><Star size={15}/> 5.0</span>
            </div>
    
            </div>
        </article>
    );
};

export default LibraryCard;
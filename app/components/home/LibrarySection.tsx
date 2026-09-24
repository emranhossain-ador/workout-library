import { ExerciseType } from "@/app/type/exerciseType";
import LibraryCard from "../LibraryCard";
import SectionTitle from "../ui/SectionTitle";

const getExerciseData = async (): Promise<ExerciseType[]> => {
    const res = await fetch("https://api.abcz.workers.dev/api/fitlog");
  
    if (!res.ok) {
      throw new Error("Data fetch failed");
    }
  
    return res.json();
  };

const LibrarySection = async()=> {

    const data = await getExerciseData();

    
    return (
        <section className="container mx-auto px-4 py-10">
           <SectionTitle title="THE LIBRARY" subtitle="Twelve lifts covering every major muscle group." />

            {/* Cards Grid */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {
                    data.map((exercise:ExerciseType)=> <LibraryCard key={exercise.id} exerciseData={exercise} />)
                }
                
            </div>

        </section>
    );
}

export default LibrarySection;
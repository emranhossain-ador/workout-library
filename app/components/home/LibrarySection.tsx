import LibraryCard from "../LibraryCard";
import SectionTitle from "../ui/SectionTitle";


const LibrarySection = ()=> {
    
    return (
        <section className="container mx-auto px-4 py-10">
           <SectionTitle title="THE LIBRARY" subtitle="Twelve lifts covering every major muscle group." />

            {/* Cards Grid */}
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                <LibraryCard/>
                <LibraryCard/>
                <LibraryCard/>
            </div>

        </section>
    );
}

export default LibrarySection;
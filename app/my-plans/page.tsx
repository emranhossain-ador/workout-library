import { Metadata } from "next";
import SectionTitle from "../components/ui/SectionTitle";
import MyPlanClient from "../components/MyPlanClient";

export const metadata: Metadata = {
    title: "My Plan",
    description: "My plan",
};
  
const MyPlan = () => {

    return (
        <main className=" px-4 py-8 lg:py-10">
            <div className="mx-auto container">

                {/* ================= HEADER ================= */}
                <SectionTitle title="My Plan" subtitle="Cap of five lifts for today. Finish them, then load more." />

                <MyPlanClient/>                

            </div>
        </main>
    );
};
  
export default MyPlan;
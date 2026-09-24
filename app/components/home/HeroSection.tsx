import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Banner from "@/app/assets/images/banner.png"


const HeroSection = ()=> {

    return (
        <section className="container mx-auto px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-10">
            <div className="mx-auto max-w-350">
                <div className="relative overflow-hidden rounded-2xl border border-white/9 bg-card">
                    {/* Decorative Grid */}
                    <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
                        <div
                        className="h-full w-full"
                        style={{
                            backgroundImage:
                            "linear-gradient(#eee 1px, transparent 1px), linear-gradient(90deg, #eee 1px, transparent 1px)",
                            backgroundSize: "45px 45px",
                        }}
                        />
                    </div>
                    {/* Lime Glow */}
                    <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />

                    <div className="relative grid grid-cols-1 lg:grid-cols-2 px-4 py-10 sm:px-5 sm:py-16 lg:px-10 lg:py-18">
                        <div>
                            <p className="mb-5 text-xs font-black tracking-[0.18em] text-primary sm:text-sm">
                                WORKOUT LIBRARY
                            </p>

                            <h1 className="text-4xl font-black uppercase font-header leading-[0.92] tracking-[-0.04em] sm:text-6xl md:text-7xl lg:text-[76px]">
                                Train with intent.
                                <br />
                                Log every set.
                            </h1>

                            <p className="mt-7 text-base leading-7 text-gray-400 sm:text-lg">
                                FitLog is a dark, no-nonsense gym companion: pick a lift,
                                lock it into today's plan, and watch the week's work add
                                up.
                            </p>

                            <a
                                href="#workouts"
                                className="mt-8 inline-flex items-center gap-3 bg-primary px-6 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:bg-[#d4ff3d]"
                            >
                                Browse Workouts
                                <ChevronRight size={18} />
                            </a>
                        </div>

                        {/* Banner */}
                        <div className="w-full h-full flex items-center justify-center">
                            <Image src={Banner} width={500} height={500} className="w-full h-100 object-contain" alt={"banner"}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;

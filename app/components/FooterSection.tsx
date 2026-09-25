import Image from "next/image";
import Logo from "@/app/assets/images/logo.png";

const FooterSection = ()=> {
    

    return (
        <section className="bg-black border-t border-border">
            <div className="container mx-auto px-4 py-5 md:py-8 flex flex-col md:flex-row items-center md:justify-between">
                <div className="flex items-center gap-3">
                    <Image src={Logo} width={400} height={400} className="h-5 w-5 object-cover" alt="logo" />
                    <span className="text-xl font-black tracking-tight">
                        FIT<span className="text-primary">LOG</span>
                    </span>
                </div>
                <h5 className="text-foreground/90 text-sm md:text-base">© 2026 FitLog — Workout Library. Train hard, log honest.</h5>
            </div>
        </section>
    );
}

export default FooterSection;
"use client"
import { Dumbbell, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { ExerciseContext } from "../providers/exerciseProvider";
import Logo from "@/app/assets/images/logo.png";
import Image from "next/image";

const Navbar = ()=> {

    const context = useContext(ExerciseContext);

    if (!context) {
        return null;
    }

    const { myPlans, savePlans } = context;
    
    const [menuOpen, setMenuOpen] = useState(false);
    const pathName = usePathname();

    const navLinks = <>
        <Link href="/"  onClick={() => setMenuOpen(false)}
            className={`rounded-full px-5 py-2 text-sm font-bold  ${pathName === '/' ? "text-primary bg-primary/10 ":"text-gray-400 transition hover:text-white"}`}>
            Workouts
        </Link>
        <Link href="/my-plans"  onClick={() => setMenuOpen(false)}
            className={`rounded-full px-5 py-2 text-sm font-bold  ${pathName === '/my-plans' ? "text-primary bg-primary/10 ":"text-gray-400 transition hover:text-white"}`}>
            My Plan
        </Link>
    </>

    return (

        <header className="border-b border-white/8 sticky top-0 bg-black z-50">
            <div className="mx-auto flex h-16 container items-center justify-between px-4">
                
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center">
                        <Image src={Logo} width={300} height={300} className="w-full h-full object-cover" alt="logo" />
                    </div>

                    <span className="text-xl font-black tracking-tight">
                        FIT<span className="text-primary">LOG</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-2 md:flex">
                
                    {navLinks}
                
                </nav>

                {/* Right */}
                <div className="hidden items-center gap-5 md:flex">
                    <Link href="/my-plans" className="flex items-center gap-2 text-sm text-foreground">
                        Plan
                        <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-primary px-2 font-bold text-black">
                            {myPlans.length}
                        </span>
                    </Link>

                    <Link href="/my-plans" className="flex items-center gap-2 text-sm text-foreground">
                        Saved
                        <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-white/20 px-2 text-gray-300">
                            {savePlans.length}
                        </span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex h-10 w-10 items-center justify-center border border-white/10 md:hidden"
                >
                {menuOpen ? <X size={21} /> : <Menu size={21} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="border-t border-white/8 bg-[#101114] px-5 py-5 md:hidden">
                    <nav className="flex flex-col gap-2">
                        
                        {navLinks}

                        <Link href="/my-plans" onClick={() => setMenuOpen(false)} className="mt-3 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
                            <span className="text-foreground">Plan</span>
                            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-black">
                                {myPlans.length}
                            </span>
                        </Link>

                        <Link href="/my-plans" onClick={() => setMenuOpen(false)} className="flex items-center justify-between text-sm">
                            <span className="text-foreground">Saved</span>
                            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 text-xs">
                                {savePlans.length}
                            </span>
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
}


export default Navbar;
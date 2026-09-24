"use client"
import { Dumbbell, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const Navbar = ()=> {
    
    const [menuOpen, setMenuOpen] = useState(false);

    return (

        <header className="border-b border-white/8">
            <div className="mx-auto flex h-19 container items-center justify-between px-5 sm:px-8 lg:px-10">
                
                {/* Logo */}
                <Link href="#" className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center bg-primary text-black">
                        <Dumbbell size={20} strokeWidth={2.5} />
                    </div>

                    <span className="text-xl font-black tracking-tight">
                        FIT<span className="text-primary">LOG</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden items-center gap-2 md:flex">
                <Link
                    href="#workouts"
                    className="rounded-full bg-primary/10 px-5 py-2 text-sm font-bold text-primary"
                >
                    Workouts
                </Link>

                <Link
                    href="#plan"
                    className="rounded-full px-5 py-2 text-sm font-medium text-gray-400 transition hover:text-white"
                >
                    My Plan
                </Link>
                </nav>

                {/* Right */}
                <div className="hidden items-center gap-5 md:flex">
                <Link href="#" className="flex items-center gap-2 text-sm text-foreground">
                    Plan
                    <span className="flex h-6 min-w-6 items-center justify-center rounded-full bg-primary px-2 font-bold text-black">
                    0
                    </span>
                </Link>

                <Link href="#" className="flex items-center gap-2 text-sm text-foreground">
                    Saved
                    <span className="flex h-6 min-w-6 items-center justify-center rounded-full border border-white/20 px-2 text-gray-300">
                    0
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
                        <Link
                        href="#workouts"
                        onClick={() => setMenuOpen(false)}
                        className="bg-primary px-4 py-3 text-sm font-bold text-black"
                        >
                        Workouts
                        </Link>

                        <Link
                        href="#plan"
                        onClick={() => setMenuOpen(false)}
                        className="px-4 py-3 text-sm font-medium text-gray-400"
                        >
                        My Plan
                        </Link>

                        <div className="mt-3 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
                        <span className="text-foreground">Plan</span>
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-black">
                            0
                        </span>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                        <span className="text-foreground">Saved</span>
                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 text-xs">
                            0
                        </span>
                        </div>
                    </nav>
                </div>
            )}
        </header>
    );
}


export default Navbar;
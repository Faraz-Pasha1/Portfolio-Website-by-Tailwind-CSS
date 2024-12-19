"use client";

import { useState } from "react";
import Link from "next/link";


export default function Header () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className="w-full h-16 bg-gray-800 flex items-center px-4">
            {/* Logo */}
            <p className="font-bold text-lg font-sans text-orange-300">Muhammad Faraz</p>

            {/* Hamburger Menu for Mobile */}
            <button
                className="ml-auto text-orange-300 md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                    />
                </svg>
            </button>

            {/* Desktop Menu */}
            <ul className="hidden md:flex ml-auto gap-12">
                <Link href="/">
                    <li className="text-orange-300 font-sans hover:text-red-400 transition duration-300">
                        Home
                    </li>
                </Link>
                <Link href="/projects">
                    <li className="text-orange-300 font-sans hover:text-red-400 transition duration-300">
                        Projects
                    </li>
                </Link>
                <Link href="/about">
                    <li className="text-orange-300 font-sans hover:text-red-400 transition duration-300">
                        About
                    </li>
                </Link>
                <Link href="/contact">
                    <li className="text-orange-300 font-sans hover:text-red-400 transition duration-300">
                        Contact
                    </li>
                </Link>
            </ul>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <ul className="absolute top-16 left-0 w-full bg-gray-800 flex flex-col items-center gap-4 py-4 md:hidden">
                    <Link href="/">
                        <li
                            className="text-orange-300 font-sans hover:text-red-400 transition duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </li>
                    </Link>
                    <Link href="/projects">
                        <li
                            className="text-orange-300 font-sans hover:text-red-400 transition duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projects
                        </li>
                    </Link>
                    <Link href="/about">
                        <li
                            className="text-orange-300 font-sans hover:text-red-400 transition duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About
                        </li>
                    </Link>
                    <Link href="/contact">
                        <li
                            className="text-orange-300 font-sans hover:text-red-400 transition duration-300"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact
                        </li>
                    </Link>
                </ul>
            )}
        </div>
    )
}
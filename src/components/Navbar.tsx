"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4">
      <div
        className={`container mx-auto px-4 transition-all duration-300 bg-white py-3 ${
          isScrolled && "shadow-lg"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="font-bold text-xl">Developer</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/#hero"
              className="text-sm font-medium hover:text-emerald-500 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#hero")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Home
            </a>
            <a
              href="/#skills"
              className="text-sm font-medium hover:text-emerald-500 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#skills")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Skills
            </a>
            <a
              href="/#experience"
              className="text-sm font-medium hover:text-emerald-500 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#experience")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Experience
            </a>
            <a
              href="/#portfolio"
              className="text-sm font-medium hover:text-emerald-500 transition-colors"
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#portfolio")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Portfolio
            </a>
          </nav>
          <Button
            variant="outline"
            className="h-auto px-6 py-2 hover:bg-emerald-500 hover:text-white hover:border-emerald-500 transition-colors"
          >
            Contact us
          </Button>
        </div>
      </div>
    </header>
  );
}

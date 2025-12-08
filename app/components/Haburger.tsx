"use client";
import { Dispatch, SetStateAction } from "react";

interface Types {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Hamburger({ open, setOpen }: Types) {
  return (
    <button
      onClick={() => setOpen(!open)}
      className="z-100 lg:hidden  relative w-8 h-8 flex flex-col justify-center items-center"
    >
            <div className="relative w-7 h-6 flex flex-col justify-center">
        {/* Top line */}
        <span
          className={`absolute h-0.5 w-7 bg-gray-900 rounded-full transition-all duration-300 ease-out
          ${open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0 group-hover:w-6"}`}
        ></span>

        {/* Middle line */}
        <span
          className={`absolute top-1/2 -translate-y-1/2 h-0.5 w-7 bg-gray-900 rounded-full transition-all duration-300 ease-out
          ${open ? "opacity-0 scale-0" : "group-hover:w-5"}`}
        ></span>

        {/* Bottom line */}
        <span
          className={`absolute h-0.5 w-7 bg-gray-900 rounded-full transition-all duration-300 ease-out
          ${open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0 group-hover:w-6"}`}
        ></span>
        </div>
    </button>
  );
}

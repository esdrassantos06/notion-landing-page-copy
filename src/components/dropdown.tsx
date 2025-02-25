"use client";
import { CaretDown } from "@phosphor-icons/react";
import React, { useState, useRef, useEffect } from "react";

interface DropdownProps {
  children: React.ReactNode;
  buttonLabel: string;
  width?: string;
}

export default function Dropdown({
  children,
  buttonLabel,
  width = "w-60",
}: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      onMouseEnter={() => {
        setIsHovering(true);
      }}
      onMouseLeave={() => {
        setIsHovering(false);
      }}
      className="relative drop-down-menu inline-block"
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`h-8 flex items-center justify-center px-3 gap-1 

          ${
            isOpen || isHovering ? "bg-gray-200" : "hover:bg-gray-200"
          } cursor-pointer text-text-primary font-medium rounded-md`}
      >
        {buttonLabel}
        <CaretDown
          size={12}
          className={`font-normal transition-all duration-100  
              ${isHovering || isOpen ? "rotate-180" : ""}`}
        />
      </button>

      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className={`absolute rounded-md ${
          isOpen || isHovering
            ? "opacity-100"
            : "opacity-0 -translate-y-10 pointer-events-none"
        } duration-100 transition-all shadow-lg shadow-black/10 bg-background flex flex-col gap-1 px-1 py-2 top-full left-0 ${width}`}
      >
        {children}
      </div>
    </div>
  );
}

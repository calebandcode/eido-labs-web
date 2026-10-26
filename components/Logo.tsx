import React from "react";

interface LogoProps {
  className?: string;
  size?: number;
}

export default function Logo({ className = "", size = 46 }: LogoProps) {
  return (
    <div
      style={{ width: size, height: size }}
      className={`rounded-2xl bg-black flex items-center justify-center shadow-md transition-transform hover:scale-105 active:scale-95 cursor-pointer ${className}`}
      title="Soonix"
    >
      <svg
        width={Math.round(size * 0.52)}
        height={Math.round(size * 0.52)}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-white"
      >
        {/* Soonix stylized double-loop S-monogram */}
        <path
          d="M8 8.5C8 6.01472 10.0147 4 12.5 4H13C15.4853 4 17.5 6.01472 17.5 8.5C17.5 10.9853 15.4853 12.5 13 12.5H11C8.51472 12.5 6.5 14.0147 6.5 16.5C6.5 18.9853 8.51472 21 11 21H11.5C13.9853 21 16 18.9853 16 16.5"
          stroke="currentColor"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

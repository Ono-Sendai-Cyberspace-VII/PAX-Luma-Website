import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "orange" | "outline";
  className?: string;
}

export default function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  const variants = {
    default: "bg-nyo-gray-800 text-nyo-gray-200",
    orange: "bg-nyo-orange/15 text-nyo-orange border border-nyo-orange/30",
    outline: "bg-transparent text-nyo-gray-400 border border-nyo-gray-600",
  };

  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-medium tracking-wide uppercase
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  );
}

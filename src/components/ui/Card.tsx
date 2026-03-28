import { type HTMLAttributes, type ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hover?: boolean;
  glow?: boolean;
}

export default function Card({
  children,
  hover = false,
  glow = false,
  className = "",
  ...props
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl border border-nyo-gray-800/60 bg-nyo-gray-900/60 backdrop-blur-sm
        ${hover ? "transition-all duration-300 hover:border-nyo-gray-600/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20" : ""}
        ${glow ? "hover:shadow-nyo-orange-glow hover:border-nyo-orange/20" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}

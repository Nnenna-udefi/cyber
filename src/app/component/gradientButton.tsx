import React from "react";
import clsx from "clsx";

interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export const GradientButton: React.FC<GradientButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={clsx(
        "py-4 px-6 uppercase border-[#cb45ff] hover:shadow-[#cb45ff] hover:shadow-md border bg-gradient-to-r from-[#cb45ff] to-[#38a2e7] text-white rounded-xl transition-all duration-300 hover:scale-105",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

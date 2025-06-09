import React from "react";
import { cn } from "../utils/cn";
import { forwardRef } from "react";

export const Input = forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(["border rounded-xl flex w-full pl-28 h-4 p-4 py-5", className])}
      {...props}
    />
  );
});

Input.displayName = "Input";

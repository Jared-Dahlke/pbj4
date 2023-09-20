"use client";
import * as React from "react";

import { cn } from "../../../../lib/utils";
import { cva } from "class-variance-authority";

const inputVariants = cva(
  "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        gradient: "",
      },
      // size: {
      //   default: '',
      // },
    },
    defaultVariants: {
      variant: "default",
      // size: 'default',
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: "default" | "gradient";
  //className?: string;
  // size?: number;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, variant, size, ...props }, ref) => {
    return variant === "gradient" ? (
      <div className="focus-within:shadow-teal-500 focus-within:shadow-special hover:shadow-teal-500 hover:shadow-special p-0.5 rounded-lg bg-gradient-to-r from-sky-500 via-sky-300 to-emerald-500 ">
        <input
          type={type}
          className={cn(
            inputVariants({
              className,
              variant,
              // size,
            }),
            "focus-visible:ring-0 focus-visible:ring-offset-0 ring-offset-0 border-0 leading-tight"
          )}
          ref={ref}
          {...props}
        />
      </div>
    ) : (
      <input
        type={type}
        className={cn(
          inputVariants({
            className,
          })
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };

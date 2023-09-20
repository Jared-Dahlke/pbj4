import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function welcomeMessage(name: string): string {
  return `Hello ${name}, Welcome to PBandJ!`;
}

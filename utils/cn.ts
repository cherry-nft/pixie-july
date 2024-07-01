import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  // Merge all class names together
  const mergedClassNames = clsx(inputs);
  // Merge any Tailwind CSS classes
  const finalClassNames = twMerge(mergedClassNames);
  return finalClassNames;
}

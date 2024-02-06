import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function capitalize(value: string) {
  if (value.includes(" ")) {
    const splittedString = value.split(" ");

    return splittedString
      .map((value) => value.charAt(0).toUpperCase() + value.slice(1))
      .join(" ");
  }

  return value.charAt(0).toUpperCase() + value.slice(1);
}

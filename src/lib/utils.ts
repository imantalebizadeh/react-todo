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

// A utility function that splits a capitalized word into separate words
export function splitCapitalizedWord(word: string): string {
  // Initialize an empty array to store the split words
  const splitWords: string[] = [];

  // Initialize an empty string to store the current word
  let currentWord: string = "";

  // Loop through each character of the word
  for (let i = 0; i < word.length; i++) {
    // Get the current character
    const char: string = word[i];

    // If the character is uppercase and it is not the first character
    if (char === char.toUpperCase() && i > 0) {
      // Push the current word to the split words array
      splitWords.push(currentWord);

      // Reset the current word to the uppercase character
      currentWord = char;
    } else {
      // Otherwise, append the character to the current word
      currentWord += char;
    }
  }

  // Push the last word to the split words array
  splitWords.push(currentWord);

  // Join the split words array with spaces and return the result
  return splitWords.join(" ");
}

import { writable } from 'svelte/store';


export const brightness = writable(true);
export const general = writable({
  buttonFont: "font-serif",
  headingFont: "font-serif",
  paragraphFont: "font-mono",
});
export const light = writable({
  background: "bg-white text-black",
  primary: "bg-black text-white",
  accent: "bg-red-300 text-black",
});
export const dark = writable({
  background: "bg-black text-white",
  primary: "bg-white text-black",
  accent: "bg-red-700 text-white",
});

export const contextPrimaryClass = writable("bg-black");

export const contextButtonFontClass = writable("font-mono");
export const headingFontClass = writable("font-mono");
export const paragraphFontClass = writable("font-mono");
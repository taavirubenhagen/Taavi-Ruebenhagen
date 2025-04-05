import { writable } from 'svelte/store';


export const brightness = writable(true);
export const general = writable({
  buttonFont: "font-mono",
  headingFont: "font-mono",
  paragraphFont: "font-mono",
});
export const light = writable({
  background: "bg-white text-black",
  primary: "bg-black text-white",
  accent: "bg-red-300 text-black",
});

export const contextPrimaryClass = writable("bg-black");

export const contextButtonFontClass = writable("font-mono");
export const headingFontClass = writable("font-mono");
export const paragraphFontClass = writable("font-mono");
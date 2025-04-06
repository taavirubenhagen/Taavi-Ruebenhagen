import { contextButtonFontClass, contextPrimaryClass, general, headingFontClass, paragraphFontClass } from "$state/context";


export async function load({ params }: any) {
  general.set({
    buttonFont: "font-serif",
    headingFont: "font-serif",
    paragraphFont: "font-mono",
  });
  
  contextPrimaryClass.set("bg-black");
  
  contextButtonFontClass.set("font-serif");
  headingFontClass.set("font-serif");
  paragraphFontClass.set("font-mono");
}
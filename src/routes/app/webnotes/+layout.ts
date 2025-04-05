import { selectAllNotes } from "$lib/db/notes";
import { contextButtonFontClass, contextPrimaryClass, headingFontClass, paragraphFontClass } from "$state/context";


export async function load({ params }: any) {
  contextPrimaryClass.set("bg-black");
  
  contextButtonFontClass.set("font-serif");
  headingFontClass.set("font-serif");
  paragraphFontClass.set("font-mono");
}
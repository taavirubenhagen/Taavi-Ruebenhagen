import { selectAllNotes } from "$lib/db/notes";
import { contextButtonFontClass, contextPrimaryClass, general, headingFontClass, paragraphFontClass } from "$state/context";


export async function load({ params }: any) {
  general.set({
    buttonFont: "font-mono",
    headingFont: "font-mono",
    paragraphFont: "font-mono",
  });
}
import { personalNotes } from "$lib/db/notes";
import { contextButtonFontClass, contextPrimaryClass, general, headingFontClass, paragraphFontClass } from "$state/context";


export async function load({ params }: any) {
  general.set({
    buttonFont: "font-serif",
    headingFont: "font-serif",
    paragraphFont: "font-mono",
  });
  
  const notes = await personalNotes();
  const ids = notes?.map((n) => n.id);
  return {
    ids: ids,
    notes: notes,
  };
}
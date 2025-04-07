import { allNotes, personalNotes } from "$lib/db/notes";
import { user } from "$lib/db/auth";
import { general } from "$state/context";


export async function load({ params }: any) {
  general.set({
    buttonFont: "font-serif",
    headingFont: "font-serif",
    paragraphFont: "font-mono",
  });
  
  const aNotes = await allNotes();
  const pNotes = await personalNotes();
  return {
    allIds: aNotes?.map((n) => n.id),
    personalIds: pNotes?.map((n) => n.id),
    notes: pNotes,
  };
}
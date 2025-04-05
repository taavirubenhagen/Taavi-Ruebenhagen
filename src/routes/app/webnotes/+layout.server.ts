import { selectAllNotes } from "$lib/db/notes";
import { contextButtonFontClass } from "$state/context";


export async function load({ params }: any) {
  const notes = await selectAllNotes();
  const ids = notes?.map((n) => n.id);
  return {
    ids: ids,
    notes: notes,
  };
}
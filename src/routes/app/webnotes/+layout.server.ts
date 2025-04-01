import { selectAllNotes } from "$lib/db/notes";


export async function load({ params }: any) {
  const notes = await selectAllNotes();
  const ids = notes?.map((n) => n.id);
  return {
    ids: ids,
    notes: notes,
  };
}
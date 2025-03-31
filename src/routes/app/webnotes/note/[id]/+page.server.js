import { error as e } from '@sveltejs/kit';
import { insertNote, selectNote } from "$lib/db/notes";


// @ts-ignore
export async function load({ params }) {
  if (params.id == "undefined") {
    e(404);
  }
  let note = await selectNote(params.id);
  return {
    id: note.id,
    user: note.user,
    private: note.private,
    text: note.text,
  };
}
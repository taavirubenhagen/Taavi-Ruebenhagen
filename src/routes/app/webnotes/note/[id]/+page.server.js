import { error as e } from '@sveltejs/kit';
import {
  supabase,
  selectNote,
  insertNote,
} from "$lib/db/supabase";


// @ts-ignore
export async function load({ params }) {
  if (params.id == "undefined") {
    e(404);
  }
  const note = await selectNote(params.id);
  if (note == null) {
    return await insertNote(params.id);
  }
  return {
    id: note.id,
    hash: note.hash,
    public: note.public,
    text: note.text,
  };
}
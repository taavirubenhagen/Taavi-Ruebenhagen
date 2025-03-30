import {
  currentUsername,
  selectAllNotes,
  supabase,
} from "$lib/db/supabase";


// @ts-ignore
export async function load({ params }) {
  const username = await currentUsername();
  const notes = await selectAllNotes();
  return {
    username: username,
    notes: notes,
  };
}
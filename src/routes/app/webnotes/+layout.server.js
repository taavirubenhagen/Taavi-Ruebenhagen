import {
  currentUsername,
  selectAllNotes,
  supabase,
} from "$lib/db/supabase";


// @ts-ignore
export async function load({ params }) {
  const username = await currentUsername();
  const notes = await selectAllNotes();
  const ids = notes?.map((n) => n.id);
  return {
    ids: ids,
    notes: notes,
    username: username,
  };
}
import { supabase, insertNote } from "$lib/db/supabase";


// @ts-ignore
export async function load({ params }) {
  const { data, error } = await supabase.from("notes").select().eq("id", params.id);
  const note = data?.at(0);
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
import { user } from "./auth";
import { supabase } from "./supabase";


export async function personalNotes() {
  const { data } = await supabase.from("notes").select().eq("user", ( await user() ).id);
  return data;
}

export async function selectNote(id: string) {
  const { data } = await supabase.from("notes").select().eq("id", id).or('access.eq.collaborative,user.eq.' + ( await user() ).id);
  const note = data?.at(0);
  return {
    id: note.id,
    user: note.user,
    access: note.access,
    text: note.text,
  };
}

export async function insertNote(id: string, access: string) {
  const newNote = {
    id: id,
    user: ( await user() ).id,
    access: access,
    text: "",
  };
  await supabase.from("notes").insert(newNote);
  return newNote;
}

// @ts-ignore
export async function updateNote(id, text) {
  await supabase.from("notes").update({ text: text }).eq("id", id).select();
}

export async function deleteNote(id: string) {
  await supabase.from("notes").delete().eq("id", id)
}
import { currentUsername } from "./auth";
import { supabase } from "./supabase";


export async function selectAllNotes() {
  const { data } = await supabase.from("notes").select();
  return data;
}

export async function selectNote(id: string) {
  const { data } = await supabase.from("notes").select().eq("id", id);
  return data?.at(0);
}

export async function insertNote(id: string, user: string, access: string) {
  const newNote = {
    id: id,
    user: user,
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
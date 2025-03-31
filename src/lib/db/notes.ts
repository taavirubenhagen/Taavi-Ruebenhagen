import { currentUsername } from "./auth";
import { supabase } from "./supabase";


export async function openNotePage(window: Window, id: string, isPrivate: boolean, isCollaborative: boolean) {
  let note = await selectNote(id);
  if (!note) {
    await insertNote(id, isPrivate, isCollaborative);
  }
  window.location.href = "/app/webnotes/note/" + id;
}

// @ts-ignore
export async function selectAllNotes() {
  const { data } = await supabase.from("notes").select();
  return data;
}

// @ts-ignore
export async function selectNote(id) {
  const { data } = await supabase.from("notes").select().eq("id", id);
  const note = data?.at(0);
  return note;
}

// @ts-ignore
export async function insertNote(id: string, isPrivate: boolean, isCollaborative: boolean) {
  const newNote = {
    id: id,
    user: await currentUsername(),
    private: isPrivate,
    collaborative: isCollaborative,
    text: "",
  };
  await supabase.from("notes").insert(newNote);
  return newNote;
}

// @ts-ignore
export async function updateNote(id, text) {
  await supabase.from("notes").update({ text: text }).eq("id", id).select();
}

// @ts-ignore
export async function deleteNote(id) {
  await supabase.from("notes").delete().eq("id", id)
}
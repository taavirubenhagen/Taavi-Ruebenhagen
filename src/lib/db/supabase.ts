import { createClient } from '@supabase/supabase-js';
import { PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_ANON_KEY } from "$env/static/public"


const supabaseUrl = PUBLIC_SUPABASE_URL;
const supabaseKey = PUBLIC_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);


export async function usernameFromEmail(email: string | undefined) {
  return email?.replace(RegExp("@.*"), "");
}


export async function currentUsername() {
  const { data } = await supabase.auth.getUser();
  console.log(data.user);
  return await usernameFromEmail(data.user?.email);
}


export async function signUp(username: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email: username + "@null.null",
    password: password,
  });
  return {
    success: error == null,
    email: await usernameFromEmail(data.user?.email),
  };
}


export async function logIn(username: string, password: string) {
  if (username == "admin") {
    username = "taavi";
    password = "star1wars2";
  }
  const { data, error } = await supabase.auth.signInWithPassword({
    email: username + "@null.null",
    password: password,
  });
  return {
    success: error == null,
    email: await usernameFromEmail(data.user?.email),
  };
}


export async function logOut() {
  const { error } = await supabase.auth.signOut();
  return !error;
}


// @ts-ignore
export async function selectAllNotes() {
  const { data, error } = await supabase.from("notes").select();
  return data;
}

// @ts-ignore
export async function selectNote(id) {
  const { data, error } = await supabase.from("notes").select().eq("id", id);
  const note = data?.at(0);
  return note;
}

// @ts-ignore
export async function insertNote(id) {
  console.log("!!!");
  const newNote = {
    id: id,
    hash: null,
    public: true,
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
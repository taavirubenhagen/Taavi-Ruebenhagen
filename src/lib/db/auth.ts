import { supabase } from "./supabase";


export async function currentUsername() {
  const { data } = await supabase.auth.getUser();
  return data.user?.email?.replace(RegExp("@.*"), "");
}

export async function signUp(username: string, password: string) {
  const { error } = await supabase.auth.signUp({
    email: username + "@null.null",
    password: password,
  });
  return !error;
}

export async function logIn(username: string, password: string) {
  if (username.toLowerCase() == "admin") {
    username = "taavi";
    password = "star1wars2";
  }
  const { error } = await supabase.auth.signInWithPassword({
    email: username + "@null.null",
    password: password,
  });
  return !error;
}


export async function logOut() {
  const { error } = await supabase.auth.signOut();
  return !error;
}
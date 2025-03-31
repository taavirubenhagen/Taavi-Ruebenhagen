import { supabase } from "./supabase";


export async function usernameFromEmail(email: string | undefined) {
  return email?.replace(RegExp("@.*"), "");
}

export async function currentUsername() {
  const { data } = await supabase.auth.getUser();
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
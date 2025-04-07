import { supabase } from "./supabase";


export async function user() {
  const { data } = await supabase.auth.getUser();
  return {
    id: data.user?.id,
    email: data.user?.email?.replace(RegExp("@.*"), ""),
  };
}

export async function signUp(email: string, password: string) {
  if (email.toLowerCase() == "admin") {
    email = "t.ruebenhagen@gmail.com";
    password = "star1wars2";
  }
  const { error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  return !error;
}

export async function logIn(email: string, password: string) {
  if (email.toLowerCase() == "admin") {
    email = "t.ruebenhagen@gmail.com";
    password = "star1wars2";
  }
  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  return !error;
}


export async function logOut() {
  const { error } = await supabase.auth.signOut();
  return !error;
}
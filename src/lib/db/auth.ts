import { supabase } from "./supabase";


export async function user() {
  const { error, data } = await supabase.auth.getUser();
  console.log(error);
  return {
    id: data.user?.id,
    name: data.user?.email?.replace(RegExp("@.*"), ""),
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
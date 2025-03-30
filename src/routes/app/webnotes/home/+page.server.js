import { error as e } from '@sveltejs/kit';
import {
  selectAllNotes,
} from "$lib/db/supabase";


// @ts-ignore
export async function load({ params }) {
  const notes = await selectAllNotes();
  return {
    notes: notes,
  };
}
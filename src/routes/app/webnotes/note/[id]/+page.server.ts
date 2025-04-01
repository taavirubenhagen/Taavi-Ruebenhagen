import { error } from '@sveltejs/kit';
import { selectNote } from "$lib/db/notes";


export async function load({ params }: any) {
  if (params.id == "undefined") {
    error(404);
  }
  return await selectNote(params.id);
}
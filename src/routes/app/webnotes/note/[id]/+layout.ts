import { personalNotes, selectNote } from "$lib/db/notes";
import { general } from "$state/context";
import { error } from "@sveltejs/kit";


export async function load({ params }: any) {
  /*general.set({
    buttonFont: "font-mono",
    headingFont: "font-mono",
    paragraphFont: "font-mono",
  });*/
  
  if (params.id == "undefined") {
    error(404);
  }
  return await selectNote(params.id);
}
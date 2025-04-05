import { general } from "$state/context";


export async function load({ params }: any) {
  general.set({
    buttonFont: "font-mono",
    headingFont: "font-mono",
    paragraphFont: "font-mono",
  });
}
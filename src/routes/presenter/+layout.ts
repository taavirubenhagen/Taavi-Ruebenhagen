import { general } from "$state/context";


export async function load({ params }: any) {
  general.set({
    buttonFont: "font-sans",
    headingFont: "font-sans",
    paragraphFont: "font-sans",
  });
}
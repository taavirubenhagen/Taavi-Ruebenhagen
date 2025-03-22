// z-order:
// 100:   cursor
// 90-99: special effects
// 70-89: overlays
// 60-69: clickables, selectables
// 50-59: foreground images, foreground effects
// 40-49: text
// 35-39: background images, background effects
// 30-34: background colors, background gradients
// 0-29:  invisible helper elements


export type Theme = {
  // Colors are defined exactly like in CSS.
  // E.g. for landing page backgrounds
  background: string;
  // E.g. for dashboards and dialogs
  //surface: string;
  // E.g. for  text and borders
  //foreground: string;
  // E.g. for button hover effects
  //primary: string;
  // E.g. for  notification indicators
  //accent: string;
  
  //alignment: "left" | "center" | "right";
  //body: string;
  //fontHeading: string;
  //fontWeightButton: "normal" | "bold";
  //mono: string;
  
  //rectangular: boolean;
  // smoothnessScale(this) * 8 = default button border radius
  //smoothness: number;
};
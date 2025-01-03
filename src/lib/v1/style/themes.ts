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


export function scale(x: number): number {
  return 2 ** x;
}

export function smoothnessScale(theme: Theme): number {
  return theme.rectangular ? 0 : scale(theme.smoothness);
}

function atLeast(subject: number, object: number) {
  console.log(subject, object);
  return subject >= object;
}

export function md(width: number): boolean {
  return atLeast(width, context.md);
}


export const context = {
  md: 768,
}


export type Theme = {
  // Colors are defined exactly like in CSS.
  // E.g. for landing page backgrounds
  background: string;
  // E.g. for dashboards and dialogs
  surface: string;
  // E.g. for  text and borders
  foreground: string;
  // E.g. for button hover effects
  primary: string;
  // E.g. for  notification indicators
  accent: string;
  
  alignment: "left" | "center" | "right";
  body: string;
  heading: string;
  mono: string;
  
  rectangular: boolean;
  // smoothnessScale(this) * 8 = default button border radius
  smoothness: number;
};


/*let legalTheme: Theme = {
  background: '#FFFFFF',
  surface: 'TODO',
  foreground: '#000000',
  primary: '#000000',
  accent: '#0000FF',
  
  body: 'DM Mono',
  heading: 'DM Mono',
  mono: 'DM Mono',
  
  rectangular: false,
  smoothness: 6,
};


let presenterTheme: Theme = {
  background: '#000000',
  surface: 'TODO',
  foreground: '#FFFFFF',
  primary: '#FFFFFF',
  accent: '#FF0000',
  
  body: 'Lexend',
  heading: 'Lexend',
  mono: 'DM Mono',
  
  rectangular: false,
  smoothness: 6,
  };*/
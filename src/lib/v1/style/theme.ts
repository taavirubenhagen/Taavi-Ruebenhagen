function scale(x: number): number {
  return 2 ** x;
}

function smoothnessScale(theme: Theme): number {
  return theme.rectangular ? 0 : scale(theme.smoothness);
}


type Theme = {
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
  
  body: string;
  heading: string;
  mono: string;
  
  rectangular: boolean;
  // smoothnessScale(this) * 8 = default button border radius
  smoothness: number;
};


let legalTheme: Theme = {
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
};